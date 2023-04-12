//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\
const express = require('express');
const { con } = require('../../db/connection')
const app = express()
const cors = require('cors');
const server = require('http').Server(app);

console.log("dfgh");
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
    });

    app.get('/', (req, res) => {
    res.send('Test');
    });

    io.on('connection', (socket) => {
    console.log('SERVEUR >>>> CONNECTION');

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

    server.listen(3005, () => {
    console.log(`Serveur ${3005}`);
    });


module.exports = async (req, res) => {
    }
//////////////////////////LIVE\\\\\\\\\\\\\\\\\\\\\\\
