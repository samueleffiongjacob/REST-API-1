const mysql = require("mysql");

const conections = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "FGCIcisco15$",
  database: "sidehustle",
});

conections.connect(function (err) {
  // if (err) throw err; //this did not run still i remove this
  if (err);
  // the above is  what is working for me
  console.log("Connected!");
});

module.exports = conections;
