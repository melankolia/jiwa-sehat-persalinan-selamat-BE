const Model = require("../../Models/Post-test");
const Response = require("../../Utils/Helper/Responses");
const Responden = require("../Responden");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createPosttest: async (req, res, next) => {
        const payload = { ...req.body };
        try {
            await Responden.getIdResponden(req, res, next)
                .then(result => {
                    result.length <= 0 && Response.failed(res, err, next);
                    payload.id_responden = result[0].id_responden;
                    payload.secureId = uuidv4();
                })
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
        } catch (error) {
            Response.failed(res, err, next)
        }
    },
}