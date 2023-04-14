//SOCKET ENTRE OBS ET LE SITE POUR AFFICHER LE LIVE => 3000\\
const express = require('express');
const { con } = require('../../db/connection')
const requetePostLive = express()
const cors = require('cors');
const server = require('http').Server(requetePostLive);

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
//-------------------------------------------------\\



//REQUETE POST LIVE VERS BDD => 3008\\
requetePostLive.use(express.json());
requetePostLive.use(cors());


requetePostLive.post('/api/postLives', (req, res) => {
    const { url, title, description } = req.body;
    const sql = `INSERT INTO lives (url, title, description, statut) VALUES ('${url}', '${title}', '${description}', '1')`;
    con.query(sql, (error, results) => {
      if (error) {
        console.error(`Error executing SQL query: ${error.stack}`);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
      } else {
        res.json(results);
      }
    });
  });

  requetePostLive.listen(3008, () => { // Serveur Node
console.log('--> Requete POST LIVE sur 3008');
});
//----------------------------------\\



//REQUETE GET LIVE DEPUIS BDD => 3009\\
const requeteGetLive = express()
requeteGetLive.use(express.json());
requeteGetLive.use(cors());

requeteGetLive.get('/api/getLives', (req, res) => {
  const sql = 'SELECT * FROM lives WHERE statut = 1';

  con.query(sql, (error, results) => {
    if (error) {
      console.error(`Error executing SQL query: ${error.stack}`);
      res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
    } else {
      res.json(results);
      if (!Array.isArray(results)) {
        results = [results];
      }
      
    }
  });
});

requeteGetLive.listen(3009, () => { // Serveur Node
  console.log('--> Requete GET LIVE sur 3009');
});
//----------------------------------\\



//REQUETE UPDATE LIVE VERS BDD => 3010\\
const requeteUpdateLive = express()
requeteUpdateLive.use(express.json());
requeteUpdateLive.use(cors());

requeteUpdateLive.post('/api/updateLives', (req, res) => {
    const { url, title, description } = req.body;
    const sql = `UPDATE lives SET statut='0' WHERE title='${title}' AND description = '${description}'`;
    con.query(sql, (error, results) => {
      if (error) {
        console.error(`Error executing SQL query: ${error.stack}`);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
      } else {
        res.json(results);
      }
    });
});

requeteUpdateLive.listen(3010, () => { // Serveur Node
    console.log('--> Requete UPDATE LIVE sur 3010');
});
//----------------------------------\\