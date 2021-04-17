const Model = require("../../Models/Responden");
const Response = require("../../Utils/Helper/Responses");
const { v4: uuidv4 } = require('uuid');
const { DATA_NOT_FOUND } = require("../../Utils/Constants");


module.exports = {
    getResponden: async (req, res, next) => {
        const limit = req.query.limit ? parseInt(req.query.limit) : 0;
        const page = req.query.page ? parseInt(req.query.page) - 1 : 0;
        const search = req.query.search ? req.query.search : "";
        const payload = [limit, page >= 0 ? (page * limit) : 0, search];
        const pagination = {
            elements: 0
        }
        await Model.countResponden(payload)
            .then(result => {
                if (parseInt(req.query.limit)) {
                    pagination.pages = Math.ceil(result[0].elements / req.query.limit);
                }
                pagination.elements = result[0].elements;
            })
            .catch(err => {
                Response.failed(res, err, next);
            })
        await Model.getResponden(payload)
            .then(result => {
                result = { data: result, ...pagination };
                Response.success(res, result);
            })
            .catch(err => {
                Response.failed(res, err, next);
            })
    },
    createResponden: async (req, res, next) => {
        req.body && (req.body.secureId = uuidv4());
        const payload = { ...req.body };
        Model.createResponden(payload)
            .then(_ => {
                Response.success(res, { secureId: req.body.secureId });
            })
            .catch(err => {
                Response.failed(res, err, next);
            })
    },
    getIdResponden: (req, res, next) => {
        return new Promise((resolve, reject) => {
            const payload = req.params.secureId;
            Model.getId(payload)
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    Response.failed(res, err, next);
                })
        })
    },
    updateResponden: (payload, res, next, type = "pretest") => {
        return new Promise((resolve, reject) => {
            Model.updateResponden(payload, type)
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    Response.failed(res, err, next);
                })
        })
    },
    getDetailResponden: async (req, res, next) => {
        const payload = req.params.secureId;

        try {
            const [Tempresult] = await Model.getDetail(payload)
            !Tempresult && Response.failed(res, DATA_NOT_FOUND, next);

            const { id_responden, secureId, 
                    initialName, agreement, 
                    age, gestationalAge, 
                    education, salaryRange, 
                    pretest, posttest, 
                    ...etc } = Tempresult
            
            let result = {
                id_responden, secureId, 
                initialName, agreement, 
                age, gestationalAge, 
                education, salaryRange, 
                pretest, posttest,  
                pretestList: [],
                posttestList: [],
                screeningList: []
            }
            
            Object.entries(etc).forEach(e => {
                if (e[0].includes("pretest")) {
                    result.pretestList = [...result.pretestList, { answer: e[1] ? e[1] : 0 }]
                } else if (e[0].includes("posttest")) {
                    result.posttestList = [...result.posttestList, { answer: e[1] ? e[1] : 0 }]
                } else if (e[0].includes("screening")) {
                    result.screeningList = [...result.screeningList, { answer: e[1] }]
                }
            });

            Response.success(res, result);

        } catch (err) {
            Response.failed(res, err, next);
        }
    }
};