const mysql = require('mysql2');
const constants = require('./constants');


/* Database connection */
const pool = mysql.createPool({
    host: constants.DB_HOST,
    user: constants.DB_USER,
    password: constants.DB_PASSWORD,
    database: constants.DB_DATABASE
});

let sql = "SELECT * FROM users;";

pool.execute(sql, function(err, result){
    if(err) throw err;

    result.forEach(res => {
        console.log(res.name);
    })
});

module.exports= pool.promise();