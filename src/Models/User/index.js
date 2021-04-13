const Database = require("../../Utils/Configs/db");


module.exports = {
    getUser: payload => {
        const sql = `SELECT * FROM users WHERE username=? AND password=?`
        return new Promise((resolve, reject) => {
            Database.query(sql, payload, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    }
}