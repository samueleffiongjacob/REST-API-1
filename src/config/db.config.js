const mysql = require("mysql");

const conections = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your passwword",
  database: "your databases name",
});

conections.connect(function (err) {
  if (err) throw err; //this did not run still i remove this
  // if (err);
  // the above is  what is working for me
  console.log("Connected!");
});

module.exports = conections;
