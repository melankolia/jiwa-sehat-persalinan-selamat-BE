const Database = require("../../Utils/Configs/db");

module.exports = {
    getAllResponden: () => {
        let sql = `SELECT	initialName,
                            age,
                            gestationalAge,
                            education,
                            salaryRange,
                            pretest,
                            posttest, 
                            pretest.question1 AS pretest_question1,
                            pretest.question2 AS pretest_question2,
                            pretest.question3 AS pretest_question3,
                            pretest.question4 AS pretest_question4,
                            pretest.question5 AS pretest_question5,
                            pretest.question6 AS pretest_question6,
                            pretest.question7 AS pretest_question7,
                            pretest.question8 AS pretest_question8,
                            pretest.question9 AS pretest_question9,
                            pretest.question10 AS pretest_question10,
                            pretest.question11 AS pretest_question11,
                            pretest.question12 AS pretest_question12,
                            pretest.question13 AS pretest_question13,
                            pretest.question14 AS pretest_question14,
                            posttest.question1 AS posttest_question1,
                            posttest.question2 AS posttest_question2,
                            posttest.question3 AS posttest_question3,
                            posttest.question4 AS posttest_question4,
                            posttest.question5 AS posttest_question5,
                            posttest.question6 AS posttest_question6,
                            posttest.question7 AS posttest_question7,
                            posttest.question8 AS posttest_question8,
                            posttest.question9 AS posttest_question9,
                            posttest.question10 AS posttest_question10,
                            posttest.question11 AS posttest_question11,
                            posttest.question12 AS posttest_question12,
                            posttest.question13 AS posttest_question13,
                            posttest.question14 AS posttest_question14
                    FROM responden
                    LEFT JOIN pretest on responden.id_responden = pretest.id_responden 
                    LEFT JOIN posttest on responden.id_responden = posttest.id_responden`;
        return new Promise((resolve, reject) => {
            Database.query(sql, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        })
    },
    getResponden: (payload) => {
        let sql = `SELECT * FROM responden 
                    WHERE   initialName LIKE '%${payload[2]}%' OR 
                            age LIKE '%${payload[2]}%' OR 
                            gestationalAge LIKE '%${payload[2]}%' OR 
                            education LIKE '%${payload[2]}%' OR 
                            salaryRange LIKE '%${payload[2]}%' OR
                            pretest LIKE '%${payload[2]}%' OR 
                            posttest LIKE '%${payload[2]}%'`;

        (payload[3] && payload[4]) && (sql += ` ORDER BY ${payload[3]} ${payload[4]}`); 
        (payload[0] && (payload[1] >= 0)) && (sql += " LIMIT ? OFFSET ?");
            
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
    updateResponden: (payload, type) => {
        let sql = `UPDATE responden SET ${type} = ? WHERE id_responden = ?`;
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
    },
    getDetail: payload => {
        let sql = `SELECT	responden.id_responden, 
                            responden.secureId,
                            initialName,
                            agreement,
                            age,
                            gestationalAge,
                            education,
                            salaryRange,
                            posttest, 
                            pretest,
                            pretest.question1 AS pretest_question1,
                            pretest.question2 AS pretest_question2,
                            pretest.question3 AS pretest_question3,
                            pretest.question4 AS pretest_question4,
                            pretest.question5 AS pretest_question5,
                            pretest.question6 AS pretest_question6,
                            pretest.question7 AS pretest_question7,
                            pretest.question8 AS pretest_question8,
                            pretest.question9 AS pretest_question9,
                            pretest.question10 AS pretest_question10,
                            pretest.question11 AS pretest_question11,
                            pretest.question12 AS pretest_question12,
                            pretest.question13 AS pretest_question13,
                            pretest.question14 AS pretest_question14,
                            posttest.question1 AS posttest_question1,
                            posttest.question2 AS posttest_question2,
                            posttest.question3 AS posttest_question3,
                            posttest.question4 AS posttest_question4,
                            posttest.question5 AS posttest_question5,
                            posttest.question6 AS posttest_question6,
                            posttest.question7 AS posttest_question7,
                            posttest.question8 AS posttest_question8,
                            posttest.question9 AS posttest_question9,
                            posttest.question10 AS posttest_question10,
                            posttest.question11 AS posttest_question11,
                            posttest.question12 AS posttest_question12,
                            posttest.question13 AS posttest_question13,
                            posttest.question14 AS posttest_question14
                    FROM responden
                    LEFT JOIN pretest on responden.id_responden = pretest.id_responden 
                    LEFT JOIN posttest on responden.id_responden = posttest.id_responden
                    WHERE responden.secureId='${payload}'`;

        return new Promise((resolve, reject) => {
            Database.query(sql, (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    },
    deleteResponden: payload => {
        let sql = `DELETE FROM responden WHERE secureId = ?`;
        return new Promise((resolve, reject) => {
            Database.query(sql, [payload], (err, response) => {
                if (!err) resolve(response);
                else reject(err);
            });
        });
    },
}