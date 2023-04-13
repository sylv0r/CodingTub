import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './creerLive.scss';

function App() {
  const videoRef = useRef();

  //Pour commencer ou finir le live\\
  const [liveEnCours, setLiveEnCours] = useState(false); //Live en cours sur false

  const liveOuvert = () => {
    setLiveEnCours(true); //Met Live en cours en true, quand cliqué sur le bouton "Ouvrir le live"
    localStorage.setItem("liveEnCours", true);//Met Live en cours en true dans le stockage local -> pour affichage
  
    const liveData = { url: 'http://localhost:3000/affichageLive', title: 'Titre du live' };
  
    fetch('http://localhost:3008/api/postLives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(liveData)
    })
    .then(response => response.json())
    .then(data => console.log("requete sql : " + data))
    .catch(error => console.error(error));

    
  };

  const liveFermé = () => {
    setLiveEnCours(false); //Met Live en cours en false, quand cliqué sur le bouton "Fermer le live"
    localStorage.setItem("liveEnCours", false);//Met Live en cours en false dans le stockage local -> pour affichage
  };
  //-------------------------------\\


  useEffect(() => {
    if (!liveEnCours) {
      return;
    }

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
    
    return () => {
      socket.disconnect();
    };
  }, [liveEnCours]);

  return (
    <div className="App">
      <head>
        <style>
          <link src=""></link>
        </style>
      </head>
      <body id="global">
        <div id="actuel_live">
          {liveEnCours ? ( //Si liveEnCours = false alors rien ne s'affiche
            <>
              <video ref={videoRef} autoPlay playsInline id="live"></video>
              <button onClick={liveFermé}>Fermer le live</button>
              <div id="description">
                <h2>description</h2>
              </div>
            </>
          ) : (
            <button onClick={liveOuvert}>Ouvrir le live</button>
          )}
        </div>
        <div id="chat_live">
          <h2>Salon textuelle</h2>
        </div>
      </body>
    </div>
  );
}

export default App;
