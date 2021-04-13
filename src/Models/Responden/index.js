const Database = require("../../Utils/Configs/db");

module.exports = {
    getResponden: (payload) => {
        let sql = "SELECT * FROM responden";
        if (payload[0] && (payload[1] >= 0)) {
            sql = `SELECT * FROM responden LIMIT ? OFFSET ?`;
        }
        return new Promise((resolve, reject) => {
            Database.query(sql, payload, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    },
    countResponden: _ => {
        let sql = `Select count(*) as elements from responden`;
        return new Promise((resolve, reject) => {
            Database.query(sql, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    },
    createResponden: payload => {
        let sql = `INSERT INTO responden SET ?`;
        return new Promise((resolve, reject) => {
            Database.query(sql, payload, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    }
}