import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './affichageLive.scss';
import { Link } from 'react-router-dom';
var tkt=0;

function App() {
  const videoRef = useRef();

  // Pour commencer ou finir le live
  const [liveEnCours, setLiveEnCours] = useState(true);
  const [inputTitre, setInputTitre] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [lives, setLives] = useState([]);

  useEffect(() => {
    // AFFICHE LES LIVES EN COURS SUR LA PAGE D'ACCUEIL
    fetch('http://localhost:3009/api/getLives')
      .then(response => response.json())
      .then(data => {
        setLives(data);
      })
      .catch(error => {
        console.error('Erreur dans la recherche de lives en cours :', error);
      });

    const handleStorageChange = () => {
      const liveEnCoursStockage = JSON.parse(localStorage.getItem('liveEnCours'));
      const inputTitreStockage = localStorage.getItem('inputTitre');
      const inputDescriptionStockage = localStorage.getItem('inputDescription');
      setInputTitre(inputTitreStockage);
      setInputDescription(inputDescriptionStockage);
      setLiveEnCours(liveEnCoursStockage);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!liveEnCours) {
      return;
    }
    
    // Configuration des sockets pour relier le serveur au client
    const socket = io.connect('http://localhost:3005');
    // Configuration des sockets pour relier le serveur au client

    // Configuration des Peer to Peer
    const pc = new RTCPeerConnection();

    console.log(liveEnCours);

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
  // envoie au meme url que celui dans la bdd
  const liveEnCoursData = lives.find(live => live.URL === window.location.href); 
  if (liveEnCoursData === undefined && tkt > 3){ // Rediriger les fausses urls
    tkt =+1;
    console.log("tkt"+tkt);
    window.location.href = "http://localhost:3000/accueilLive";
  } else {
    tkt = tkt+1;
    //console.log("tkt"+tkt);
    console.log("URL existant");
  }


  return (
    <div className="App">
      <head>
        <style>
          <link src=""></link>
        </style>
      </head>
      <body id="body_creer_live">
        <div id="global_creer_live">
          {liveEnCours ? (
            <>
              <div id="option_creer_live">
                <h1>Lives en cours</h1>
                <Link to="/accueilLive">
                  <button className="Accueil-button">Retourner à l'accueil</button>
                </Link>
                {Array.isArray(lives) && lives.map(live => (
                <li key={live.id}>
                  <a href={live.URL}>{live.title}</a>
                </li>
              ))}
              </div>
              <div id="creer_live_description">
                <video ref={videoRef} autoPlay playsInline id="creer_live"></video>
                {Array.isArray(lives) && lives.map(live => {
                  if (live.URL === window.location.href) {
                    return (
                      <div id="description" key={live.id}>
                        <h2>{live.title}</h2>
                        <p>{live.description}</p>
                      </div>
                    )
                  } 
                  return null;
                })}
              </div>
            </>
          ) : (
            <>
              <div id="option_creer_live">
                <h2>Lives en cours</h2>
                <Link to="/accueilLive">
                  <button className="Accueil-button">Retourner à l'accueil</button>
                </Link>
                {Array.isArray(lives) && lives.map(live => (
                  <li key={live.id}>
                    <a href={live.URL}>{live.title}</a>
                  </li>
                ))}
              </div>
              <div id="creer_live_description">
                <div id="emplacement_live"><h2>FIN DU LIVE</h2></div>
                <div id="creer_description">
                  <form id="creer_form">
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