const Model = require("../../Models/Pre-test");
const Response = require("../../Utils/Helper/Responses");
const Responden = require("../Responden");
const { v4: uuidv4 } = require('uuid');
const { DATA_NOT_FOUND } = require("../../Utils/Constants");

module.exports = {
    createPretest: async (req, res, next) => {
        const payload = { ...req.body };
        try {
            const pretest = Object.values(payload).reduce((t, e) => t + e);

            await Responden.getIdResponden(req, res, next)
                .then(result => {
                    result.length <= 0 && Response.failed(res, DATA_NOT_FOUND , next);
                    payload.id_responden = result[0].id_responden;
                    payload.secureId = uuidv4();
                })
                .catch(err => {
                    Response.failed(res, err, next);
                })
            
            await Responden.updateResponden([pretest, payload.id_responden], res, next)
                .catch(err => {
                    Response.failed(res, err, next);
                })

            await Model.create(payload)
                .then(result => {
                    Response.success(res, result);
                })
                .catch(err => {
                    Response.failed(res, err, next)
                })
        } catch (err) {
            console.log(err);
            Response.failed(res, err, next)
        }
    },
}