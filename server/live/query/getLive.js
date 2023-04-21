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


io.on("connection", socket => {
    socket.join("stream");
    console.log('SERVEUR >>>> CONNECTION');

    const streamData = {
      streamUrl: 'http://localhost:3000/affichageLive?url=b6f1a91d-3104-4ff9-86ff-94092e2130c1.m3u8'
    }
    socket.emit('stream',streamData);

    socket.on('join', (room) => {
        console.log(`la room: ${room}`);
        socket.join(room);
    });

    socket.on('offer', (offer) => {
        socket.to("stream").emit('offer', offer);
        console.log('SERVEUR ++++ OFFRE SERVER');
    });

    socket.on('answer', (answer) => {
        socket.to("stream").emit('answer', answer);
        console.log('SERVEUR <=== REPONSE', answer);
    });

    socket.on('candidate', (candidate) => {
        socket.to("stream").emit('candidate', candidate);
        console.log('SERVEUR <=== ', candidate);
    });


    // Gestion de la déconnexion
    socket.on("disconnecting", () => {
        console.log(socket.rooms);
    });
});
server.listen(3005, () => {
    console.log(`--> Serveur stream sur ${3005}`);
});



module.exports = async (req, res) => {

}
//-------------------------------------------------\\



//REQUETE POST LIVE VERS BDD => 3008
requetePostLive.use(express.json());
requetePostLive.use(cors());


requetePostLive.post('/api/postLives', (req, res) => {
    const { url, title, description } = req.body;
    const sql = `INSERT INTO lives (url, title, description, viewer, statut) VALUES ('${url}', '${title}', '${description}', "0", '1')`;
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



//REQUETE GET LIVE DEPUIS BDD => 3009
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



//REQUETE UPDATE LIVE VERS BDD => 3010, 3011, 3012\\
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

const requeteUpdateLiveViewer = express()
requeteUpdateLiveViewer.use(express.json());
requeteUpdateLiveViewer.use(cors());

requeteUpdateLiveViewer.post('/api/updateLivesViewer', (req, res) => {
    const { url, title, description } = req.body;
    const sql = `UPDATE lives SET viewer = viewer + 1 WHERE title='${title}'`;
    con.query(sql, (error, results) => {
      if (error) {
        console.error(`Error executing SQL query: ${error.stack}`);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
      } else {
        res.json(results);
        console.log("Requete UPDATE LIVE VIEWER PLUS envoyé")
      }
    });
});

requeteUpdateLiveViewer.listen(3011, () => { // Serveur Node
    console.log('--> Requete UPDATE LIVE VIEWER + sur 3011');
});



const requeteUpdateLiveViewerEnlevé = express()
requeteUpdateLiveViewerEnlevé.use(express.json());
requeteUpdateLiveViewerEnlevé.use(cors());

requeteUpdateLiveViewerEnlevé.post('/api/updateLivesViewerEnlever', (req, res) => {
    const {url, title, description } = req.body;
    const sql = `UPDATE lives SET viewer = viewer - 1 WHERE title='${title}'`;
    con.query(sql, (error, results) => {
      if (error) {
        console.error(`Error executing SQL query: ${error.stack}`);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'exécution de la requête SQL" });
      } else {
        res.json(results);
        console.log("Requete UPDATE LIVE VIEWER ENLEVÉ envoyé")
      }
    });
});

requeteUpdateLiveViewerEnlevé.listen(3012, () => { // Serveur Node
    console.log('--> Requete UPDATE LIVE VIEWER - sur 3012');
});
//----------------------------------\\