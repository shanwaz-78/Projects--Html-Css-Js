const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "portfolio",
});

module.exports = conn;
