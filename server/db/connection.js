const mysql = require('mysql');
const initDb = require('./initDb');

// Création de la connexion à la base de données MySQL
const connection = mysql.createConnection(initDb);
const { promisify } = require('util')
// Connexion à la base de données MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    process.exit(1);
  }
  console.log('Connected to the MySQL database.');
});

// Exportation de la connexion pour une utilisation dans d'autres fichiers
module.exports = connection;

var con = mysql.createConnection(initDb);
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query2 = promisify(con.query)

module.exports.con = con
