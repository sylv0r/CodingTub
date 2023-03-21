const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const cors = require('cors')
const mysql = require('mysql');
const initDb = require('./initDb')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  var con = mysql.createConnection(initDb);
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get('/users', function(req, res) {
    con.query('SELECT * FROM users', function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
  
})