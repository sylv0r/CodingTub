const mysql = require('mysql');
const initDb = require('./initDb.js');
const { promisify } = require('util')

var con = mysql.createConnection(initDb);
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query2 = promisify(con.query)

module.exports.con = con