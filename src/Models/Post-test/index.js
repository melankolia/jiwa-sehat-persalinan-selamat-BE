const Database = require("../../Utils/Configs/db");

module.exports = {
    create: payload => {
        let sql = `INSERT INTO posttest SET ?`;
        return new Promise((resolve, reject) => {
            Database.query(sql, payload, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    }
}