const Database = require("../../Utils/Configs/db");

module.exports = {
    create: payload => {
        console.log(payload);
        let sql = `INSERT INTO pretest SET ?`;
        return new Promise((resolve, reject) => {
            Database.query(sql, payload, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    }
}