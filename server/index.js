const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3005
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
})




//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  // Réception de l'offre du client
  socket.on('offer', (offer) => {
    console.log('Received offer:', offer);

    // Envoi de l'offre au client suivant
    socket.broadcast.emit('offer', offer);
  });

  // Réception de la réponse du client suivant
  socket.on('answer', (answer) => {
    console.log('Received answer:', answer);

    // Envoi de la réponse au client initial
    socket.broadcast.emit('answer', answer);
  });

  // Réception des candidats ICE du client
  socket.on('candidate', (candidate) => {
    console.log('Received candidate:', candidate);

    // Envoi des candidats ICE au client suivant
    socket.broadcast.emit('candidate', candidate);
  });

  // Gestion de la déconnexion
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\
