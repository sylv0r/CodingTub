import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './affichageLive.scss';

function App() {
  const videoRef = useRef();
  const [isLiveOpen, setIsLiveOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const isLiveOpenInStorage = JSON.parse(localStorage.getItem('isLiveOpen'));
      setIsLiveOpen(isLiveOpenInStorage);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!isLiveOpen) {
      return;
    }
    //Configuration des sockets pour relier le serveur au client
    const socket = io.connect('http://localhost:3005');
    //Configuration des sockets pour relier le serveur au client

    //Configuration des Peer to Peer 
    const pc = new RTCPeerConnection();

    console.log (isLiveOpen);

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
  }, [isLiveOpen]);


  return (
    <div className="App">
      <head>
        <style>
          <link src=""></link>
        </style>
      </head>
      <body id="global">
        <div id="autre_live">
            <h2>Lives en cours</h2>
        </div>
        <div id="actuel_live">
            {isLiveOpen && <video ref={videoRef} autoPlay playsInline id="live"></video>}
            <div id="description">
                <h2>description</h2>
            </div>
        </div>
        <div id="chat_live">
            <h2>Salon textuelle</h2>
        </div>
      </body>
    </div>
  );
}

export default App;
