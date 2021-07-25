const Model = require("../../Models/Responden");
const Response = require("../../Utils/Helper/Responses");
const { splitter } = require("../../Utils/Helper/Etc");
const { v4: uuidv4 } = require('uuid');
const { DATA_NOT_FOUND, QUESTION_SURVEY } = require("../../Utils/Constants");


module.exports = {
    getAllResponden: (req, res, next) => {
        return new Promise((resolve, reject) => {
            Model.getAllResponden()
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    Response.failed(res, err, next);
                })
        })
    }, 
    getResponden: async (req, res, next) => {
        const limit = req.query.limit ? parseInt(req.query.limit) : 0;
        const page = req.query.page ? parseInt(req.query.page) - 1 : 0;
        const search = req.query.search ? req.query.search : "";
        const sortBy = req.query.sortBy ? req.query.sortBy : "";
        const sortDesc = req.query.sortDesc ? req.query.sortDesc : ""
        const payload = [limit, page >= 0 ? (page * limit) : 0, search ,sortBy, sortDesc];
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
                postTestList: []
            }
            
            Object.entries(etc).forEach((e, i) => {
                if (e[0].includes("pretest")) {
                    result.pretestList = [...result.pretestList, { 
                        question: QUESTION_SURVEY[splitter(e)],
                        answer: e[1] >= 0 && e[1] != null ? String(e[1]) : null
                    }]
                } else if (e[0].includes("posttest")) {
                    result.postTestList = [...result.postTestList, { 
                        question: QUESTION_SURVEY[splitter(e)],
                        answer: e[1] >= 0 && e[1] != null ? String(e[1]) : null
                    }]
                }
            });

            Response.success(res, result);
        } catch (err) {
            Response.failed(res, err, next);
        }
    },
    deleteResponden: (req, res, next) => {
        const payload =  [ req.params.secureId ? req.params.secureId : null ];

        !payload[0] && Response.failed(res, DATA_NOT_FOUND, next);
        Model.deleteResponden(payload)
            .then(_ => {
                Response.success(res, true);
            }) 
            .catch(err => {
                Response.failed(res, err, next);
            })
    }
};