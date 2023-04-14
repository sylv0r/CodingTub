import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './affichageLive.scss';

function App() {
  const videoRef = useRef();

  //Pour commencer ou finir le live\\
  const [liveEnCours, setLiveEnCours] = useState(true); //Live en cours sur false
  const [inputTitre, setInputTitre] = useState(''); //Live en cours sur false
  const [inputDescription, setInputDescription] = useState(''); //Live en cours sur false

  useEffect(() => {
    const handleStorageChange = () => {
      const liveEnCoursStockage = JSON.parse(localStorage.getItem('liveEnCours')); // Récupere la valeur de "liveEnCours" dans le stockage local
      const inputTitreStockage = localStorage.getItem('inputTitre'); // Récupere la valeur de "liveEnCours" dans le stockage local
      const inputDescriptionStockage = localStorage.getItem('inputDescription'); // Récupere la valeur de "liveEnCours" dans le stockage local
      setInputTitre(inputTitreStockage);
      setInputDescription(inputDescriptionStockage);

      setLiveEnCours(liveEnCoursStockage); // Redéfinie
    };

    window.addEventListener('storage', handleStorageChange); //Ecoute si la valeur change

    return () => {
      window.removeEventListener('storage', handleStorageChange); //Enleve le listener pour eviter d'utiliser trop de mémoire
    };
  }, []);

  useEffect(() => {
    if (!liveEnCours) {
      return;
    }
    //Configuration des sockets pour relier le serveur au client
    const socket = io.connect('http://localhost:3005');
    //Configuration des sockets pour relier le serveur au client

    //Configuration des Peer to Peer 
    const pc = new RTCPeerConnection();

    console.log (liveEnCours);

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
  }, [liveEnCours]);


return (
  <div className="App">
    <head>
      <style>
        <link src=""></link>
      </style>
    </head>
    <body id="body_creer_live">
      <div id="global_creer_live">
        {liveEnCours ? ( //Si liveEnCours = false alors rien ne s'affiche
            <>
              <div id="option_creer_live">
                  <h2>Lives en cours</h2>
              </div>
              <div id="creer_live_description">
                <video ref={videoRef} autoPlay playsInline id="creer_live"></video>
              <div id="description">
                      <h2>{inputTitre}</h2>
                      <h2>{inputDescription}</h2>                
                  </div>
              </div>
            </>
        ) : (
            <>
              <div id="option_creer_live">
                <h2>Lives en cours</h2>
              </div>
              <div id="creer_live_description">
                  <div id="emplacement_live"><h2>FIN DU LIVE</h2></div>
                <div id="creer_description">
                  <form id="creer_form">
                      <h2>{inputTitre}</h2>
                      <h2>{inputDescription}</h2>
                  </form>
                </div>
              </div>
            </>
        )}

        <div id="creer_chat_live">
          <h2>Salon textuelle</h2>
        </div>
      </div>


    </body>
  </div>
);
}

export default App;