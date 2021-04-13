const Model = require("../../Models/Responden");
const Response = require("../../Utils/Helper/Responses");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getResponden: (req, res, next) => {
        console.log(req.query.page);
        const limit = req.query.limit ? parseInt(req.query.limit) : 0;
        const page = req.query.page ? parseInt(req.query.page) - 1 : 0;
        const payload = [limit, page >= 0 ? page : 0];
        const pagination = {
            elements: 0
        }
        Model.countResponden()
            .then(result => {
                if (parseInt(req.query.limit)) {
                    pagination.pages = Math.ceil(result[0].elements / req.query.limit);
                }
                pagination.elements = result[0].elements;
            })
            .catch(err => {
                Response.failed(res, err, next);
            })
        Model.getResponden(payload)
            .then(result => {
                result = { result, ...pagination };
                Response.success(res, result);
            })
            .catch(err => {
                Response.failed(res, err, next);
            })
    },
    createResponden: (req, res, next) => {
        req.body && (req.body.secureId = uuidv4());
        const payload = { ...req.body };
        Model.createResponden(payload)
            .then(_ => {
                Response.success(res, true);
            })
            .catch(err => {
                Response.failed(res, err, next);
            })
    },
};