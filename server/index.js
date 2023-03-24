const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql');
const initDb = require('./initDb')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

app.use(function (req, res, next) { // Empeche les erreur de CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '');
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});


