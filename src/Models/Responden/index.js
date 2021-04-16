const Database = require("../../Utils/Configs/db");

module.exports = {
    getResponden: (payload) => {
        let sql = `SELECT * FROM responden 
                    WHERE   initialName LIKE '%${payload[2]}%' OR 
                            age LIKE '%${payload[2]}%' OR 
                            gestationalAge LIKE '%${payload[2]}%' OR 
                            education LIKE '%${payload[2]}%' OR 
                            salaryRange LIKE '%${payload[2]}%' OR
                            pretest LIKE '%${payload[2]}%' OR 
                            posttest LIKE '%${payload[2]}%'`;
        if (payload[0] && (payload[1] >= 0)) {
            sql += " LIMIT ? OFFSET ?";
        }
        return new Promise((resolve, reject) => {
            Database.query(sql, payload, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    },
    countResponden: payload => {
        let sql = `Select count(*) as elements from responden
                    WHERE   initialName LIKE '%${payload[2]}%' OR 
                    age LIKE '%${payload[2]}%' OR 
                    gestationalAge LIKE '%${payload[2]}%' OR 
                    education LIKE '%${payload[2]}%' OR 
                    salaryRange LIKE '%${payload[2]}%' OR
                    pretest LIKE '%${payload[2]}%' OR 
                    posttest LIKE '%${payload[2]}%'`;
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
    },
    updateResponden: payload => {
        let sql = `UPDATE responden SET pretest = ? WHERE id_responden = ?`;
        return new Promise((resolve, reject) => {
            Database.query(sql, [...payload], (err, response) => {
                console.log(response)
                console.log(err)
                if (!err) resolve(response);
                else reject(err);
            });
        });
    },
    getId: payload => {
        let sql = `SELECT * FROM responden WHERE secureId LIKE "%${payload}%"`;
        return new Promise((resolve, reject) => {
            Database.query(sql, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    }
}