const Model = require("../../Models/User");
const Response = require("../../Utils/Helper/Responses");
const Constants = require("../../Utils/Constants");

module.exports = {
    login: (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
        const payload = [username, password]

        if (!username && !password) Response.badRequest(res, Constants.INVALID_CREDENTIAL);
        Model.getUser(payload)
            .then(result => {
                result.length <= 0 && Response.badRequest(res, Constants.INVALID_CREDENTIAL);
                Response.success(res, true)
            })
            .catch(err => {
                Response.failed(res, err)
            })
    }
}