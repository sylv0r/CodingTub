//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\
const express = require('express');
const { con } = require('../../db/connection')
const app = express()
const cors = require('cors');
const server = require('http').Server(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
    });

 

    io.on('connection', (socket) => {
    console.log('SERVEUR >>>> CONNECTION');

    // Réception de l'offre du client
    socket.on('offer', (offer) => {
        console.log('SERVEUR ++++ OFFRE');

        // Envoi de l'offre au client suivant
        socket.broadcast.emit('offer', offer);
    });

    // Réception de la réponse du client suivant
    socket.on('answer', (answer) => {
        console.log('SERVEUR <=== REPONSE', answer);

        // Envoi de la réponse au client initial
        socket.broadcast.emit('answer', answer);
    });

    // Réception des candidats ICE du client
    socket.on('candidate', (candidate) => {
        console.log('SERVEUR <=== ', candidate);

        // Envoi des candidats ICE au client suivant
        socket.broadcast.emit('candidate', candidate);
    });

    // Gestion de la déconnexion
    socket.on('disconnect', () => {
        console.log('<-- Déconnexion');
    });
    });

    server.listen(3005, () => {
    console.log(`--> Serveur Live sur ${3005}`);
    });


module.exports = async (req, res) => {
    }
//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\
app.use(express.json());
app.use(cors());


app.post('/api/lives', (req, res) => {
    const { url, title } = req.body;
    const sql = `INSERT INTO lives (url, title) VALUES ('${url}', '${title}')`;
    con.query(sql, (error, results) => {
      if (error) {
        console.error(`Error executing SQL query: ${error.stack}`);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
      } else {
        res.json(results);
      }
    });
  });

app.listen(3008, () => { // Serveur Node
console.log('--> Requete POST LIVE sur 3008');
});