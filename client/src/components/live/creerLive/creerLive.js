import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './creerLive.scss';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const videoRef = useRef();

  const [liveEnCours, setLiveEnCours] = useState(false);
  const [inputTitre, setInputTitre] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const liveOuvert = () => {
    const titre = document.getElementById("creer_form_titre").value;
    const description = document.getElementById("creer_form_description").value;
    setInputTitre(titre);
    setInputDescription(description);

    setLiveEnCours(true);
    localStorage.setItem("liveEnCours", true);
    localStorage.setItem("inputTitre", titre);
    localStorage.setItem("inputDescription", description);

    const liveURL = uuidv4();
    const liveData1 = { url: `http://localhost:3000/affichageLive?url=${liveURL}.m3u8`, title: titre, description: description};
    window.history.pushState(null,"fg" ,`/creerLive?url=${liveURL}.m3u8`);

    fetch('http://localhost:3008/api/postLives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(liveData1)
    })
    .then(response => response.json())
    .then(data => console.log("requete sql : " + data))  
    .catch(error => console.error(error));
  };

  const liveFermé = () => {
    setLiveEnCours(false);
    localStorage.removeItem("liveEnCours");

    const liveData2 = { url: 'http://localhost:3000/affichageLive', title: inputTitre, description: inputDescription};
  
    fetch('http://localhost:3010/api/updateLives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(liveData2)
    })
    .then(response => response.json())
    .then(data => console.log("requete sql : " + data))
    .catch(error => console.error(error));
  };

  useEffect(() => {
    if (!liveEnCours) {
      return;
    }

    const socket = io.connect('http://localhost:3005');
    const pc = new RTCPeerConnection();

    navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: {
        cursor: "always"
      }
    })
    .then(stream => {
      videoRef.current.srcObject = stream;
      pc.addStream(stream);

      pc.createOffer().then(offer => {
        console.log("CLIENT <<<<< OFFER");
        pc.setLocalDescription(offer);
        socket.emit('offer', offer);
      });
    });

    socket.on('answer', answer => {
      console.log("CLIENT <<<<< ANSWER");
      pc.setRemoteDescription(answer);
    });

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
      <body id="body_creer_live">
        <div id="global_creer_live">
          {liveEnCours ? ( //Si liveEnCours = false alors rien ne s'affiche
              <>
                <div id="option_creer_live_body">
                  <h1 id="connecté">CONNECTÉ</h1>
                  <button id="bouton_fermerLive" onClick={liveFermé}>Fermer le live</button>
                </div>
                <div id="creer_live_description">
                <video ref={videoRef} autoPlay playsInline id="creer_live" style={{ width: "100%", height: "100%" }}></video>
                  <div id="description">
                    <div id="description_gauche">
                      <h2>{inputTitre}</h2>
                      <h2>{inputDescription}</h2>
                    </div>
                    
                    <div id="description_viewer">              
                    </div>
                  </div>
                  </div>

              </>
          ) : (
              <>
                <div id="option_creer_live_body">
                  <h1 id="déconnecté">DÉCONNECTÉ</h1>
                  <div id="option_creer_live">
                      <button id="bouton_ouvrirLive" onClick={liveOuvert}>Ouvrir le live</button>
                    <Link to="/accueilLive">
                      <button id="bouton_accueilLive" className="Accueil-button">Retourner à l'accueil</button>
                    </Link>
                  </div>
                </div>
                <div id="creer_live_description">
                    <div id="emplacement_live"></div>
                  <div id="creer_description">
                    <form id="creer_form">
                      <input type="text" id="creer_form_titre" name="creer_form_titre" placeholder="TITRE DU LIVE :" />
                      <input type="text" id="creer_form_description" name="creer_form_description" placeholder="DESCRIPTION DU LIVE :" />
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
