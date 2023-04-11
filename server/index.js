const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3001
const videoMiddleware = require('./video/route')
const channelsMiddleware = require('./channel/route')
const shortsMiddleware = require('./short/routes')
const searchMiddleware = require('./recherche/route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

app.use(function (req, res, next) { // Empeche les erreur de CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '');
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//utilise le middleware des channels lorsque la requête commence par /channels
app.use("/channels", channelsMiddleware.routes)
app.use("/videos", videoMiddleware.routes)
app.use("/shorts", shortsMiddleware.routes)
app.use("/search", searchMiddleware.routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
<<<<<<< HEAD
})
=======

  var con = mysql.createConnection(initDb);
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get('/users', function(req, res) {
    con.query("SELECT * FROM users", function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

})
>>>>>>> main
