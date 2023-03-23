const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const cors = require('cors')
const usersMiddleware = require('./users/route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

//utilise le middleware des channels lorsque la requête commence par /channels
app.use("/users", usersMiddleware.routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})