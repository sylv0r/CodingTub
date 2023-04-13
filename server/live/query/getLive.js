//SOCKET ENTRE OBS ET LE SITE POUR AFFICHER LE LIVE => 3000\\
const express = require('express');
const { con } = require('../../db/connection')
const app = express()
const app2 = express()
const app3 = express()
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
//-------------------------------------------------\\

//REQUETE POST LIVE VERS BDD => 3008\\
app.use(express.json());
app.use(cors());


app.post('/api/postLives', (req, res) => {
    const { url, title } = req.body;
    const sql = `INSERT INTO lives (url, title, statut) VALUES ('${url}', '${title}', '1')`;
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
//----------------------------------\\

//REQUETE GET LIVE DEPUIS BDD => 3009\\
app2.use(express.json());
app2.use(cors());

app2.get('/api/getLives', (req, res) => {
  const sql = 'SELECT * FROM lives WHERE statut = 1';

  con.query(sql, (error, results) => {
    if (error) {
      console.error(`Error executing SQL query: ${error.stack}`);
      res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
    } else {
      res.json(results);
    }
  });
});

app2.listen(3009, () => { // Serveur Node
  console.log('--> Requete GET LIVE sur 3009');
});
//----------------------------------\\

//REQUETE UPDATE LIVE VERS BDD => 3010\\
app3.use(express.json());
app3.use(cors());

app3.post('/api/updateLives', (req, res) => {
    const { url, title } = req.body;
    const sql = `UPDATE lives SET statut='0' WHERE url='${url}'`;
    con.query(sql, (error, results) => {
      if (error) {
        console.error(`Error executing SQL query: ${error.stack}`);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
      } else {
        res.json(results);
      }
    });
});

app3.listen(3010, () => { // Serveur Node
    console.log('--> Requete UPDATE LIVE sur 3010');
});
//----------------------------------\\