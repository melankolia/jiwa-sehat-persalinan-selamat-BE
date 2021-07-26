const mysql = require("mysql2");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 20,
    waitForConnections: true,
})

// db.connect(err => {
//     if (err) console.log(err)
// })

module.exports = db;
// module.exports = db.promise();