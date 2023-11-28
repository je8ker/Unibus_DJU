//DB info
const mysql = require('mysql');
require("dotenv").config()

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port:3306,
    database:process.env.DATABASE_NAME,
});
connection.connect((err, res)=>{
    if(err) console.log(err);
});
module.exports = connection;