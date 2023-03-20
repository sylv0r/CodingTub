const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const cors = require('cors')
const mysql = require('mysql');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  var con = mysql.createConnection({
    host: "db4free.net",
    user: "branli",
    password: "Codingtub*",
    database: "codingtub"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
})