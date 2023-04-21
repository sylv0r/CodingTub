const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
<<<<<<< HEAD
const port = process.env.PORT || 5001;
=======
const port = process.env.PORT || 3001;
>>>>>>> 246977cfd474bdf47db02820352aaacbf8dd552e
const usersMiddleware = require('./users/route')
const videoMiddleware = require('./video/route')
const channelsMiddleware = require('./channel/route')
const shortsMiddleware = require('./short/routes')
const searchMiddleware = require('./recherche/route')
const liveMiddleware = require('./live/route')
const playlistMiddleware = require('./playlists/route')
const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
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
app.use("/searchBar", searchMiddleware.routes)
app.use("/ResultHashtag", searchMiddleware.routes)
app.use("/playlists", playlistMiddleware.routes)

//utilise le middleware des channels lorsque la requête commence par /channels
app.use("/users", usersMiddleware.routes)



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
