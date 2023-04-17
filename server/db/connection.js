const mysql = require('mysql');
const initDb = require('./initDb.js');
const { promisify } = require('util')

var con = mysql.createConnection(initDb);
  
con.connect(function(err) {
  if (err) throw err;
  console.log("=> Connecté à la BDD");
});

con.query2 = promisify(con.query)

module.exports.con = con
