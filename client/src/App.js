import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

function App() {
  const videoRef = useRef();

  useEffect(() => {
    //Configuration des sockets pour relier le serveur au client
    const socket = io.connect('http://localhost:3005');
    //Configuration des sockets pour relier le serveur au client

    //Configuration des Peer to Peer 
    const pc = new RTCPeerConnection();

    // Connection Peer
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        stream.getTracks().forEach(track => {
          pc.addTrack(track, stream);
        });

        // Envoie la requete au serveur
        pc.createOffer().then(offer => {
          console.log("CLIENT <<<<< OFFER");
          pc.setLocalDescription(offer);
          socket.emit('offer', offer);
        });
        
        // Affiche le flux vidéo en direct dans la balise video HTML5
        videoRef.current.srcObject = stream;
      });

    // Reçois la réponse du serveur
    socket.on('answer', answer => {
      console.log("CLIENT <<<<< ANSWER");
      pc.setRemoteDescription(answer);
    });

    // Reçois un ICE candidat du serveur
    socket.on('candidate', candidate => {
      console.log("CLIENT <<<<< CANDIDATE");
      pc.addIceCandidate(candidate);
    });
  }, []);

  return (
    <div className="App">
      <head>
        <style>

        </style>
      </head>
      <body>
        <video ref={videoRef} autoPlay playsInline id="live"></video>
      </body>
    </div>
  );
}

export default App;
