const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const cors = require('cors')
//const channelsMiddleware = require('./channel/route')
const videosMiddleware = require('./videos/route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

//utilise le middleware des channels lorsque la requête commence par /channels
//app.use("/channels", channelsMiddleware.routes)

//utilise le middleware des videos lorsque la requête commence par /videos
app.use("/videos", videosMiddleware.routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})