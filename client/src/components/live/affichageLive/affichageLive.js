import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './affichageLive.scss';
import { Link } from 'react-router-dom';

function AffichageLive() {
  const videoRef = useRef();

  // Pour commencer ou finir le live
  const [liveEnCours, setLiveEnCours] = useState(true);
  const [inputTitre, setInputTitre] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [lives, setLives] = useState([]);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

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
    const newSocket = io.connect('http://localhost:3005');
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
          newSocket.emit('offer', offer);
        });

        // Affiche le flux vidéo en direct dans la balise video HTML5
        videoRef.current.srcObject = stream; 
      });

    // Reçois la réponse du serveur
    newSocket.on('answer', answer => {
      console.log("CLIENT <<<<< ANSWER");
      pc.setRemoteDescription(answer);
    });

    // Reçois un ICE candidat du serveur
    newSocket.on('candidate', candidate => {
      console.log("CLIENT <<<<< CANDIDATE");
      pc.addIceCandidate(candidate);
    });

    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [liveEnCours]);

  const handleKeyDown = e => {
    if (!socket || e.key !== 'Enter') {
      return;
    }

    e.preventDefault();
    console. log("log")
    socket.emit('chat-message', message);
    setMessage('');
    console. log(message)

  };

  useEffect(() => {
    if (!socket) {
      console.log("socket non initialisé");
      return;
    }
  
  
    socket.on('chat-message', message => {
      setMessages(messages => [...messages, message]);
    });
  
    return () => {
      console.log("Déconnexion de la socket");
      socket.disconnect();
    };
  }, [socket, message]);
  
  const handleInputChange = e => {
    if (e.target.name === 'titre') {
    setInputTitre(e.target.value);
    localStorage.setItem('inputTitre', e.target.value);
    } else {
    setInputDescription(e.target.value);
    localStorage.setItem('inputDescription', e.target.value);
    }
    };
    
    const handleStartStopClick = () => {
    if (liveEnCours) {
    localStorage.setItem('liveEnCours', false);
    setLiveEnCours(false);
    socket.disconnect();
    } else {
    localStorage.setItem('liveEnCours', true);
    setLiveEnCours(true);
    }
    };

    
    
    return (
    <div className="affichageLive">
    <div className="video-container">
    <video className="video" autoPlay ref={videoRef}></video>
    <div className="chat-container">
    <div className="messages-container">
  {messages.map((message, index) => (
    <div key={index}>{message}</div>
  ))}
</div>

  <div className="input-container">
    <input
      type="text"
      placeholder="Tapez votre message"
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  </div>
</div>

    </div>
    <div className="infos-container">
    {liveEnCours ? (
      <>
        <h2>Titre : {inputTitre}</h2>
        <p>Description : {inputDescription}</p>
      </>
    ) : (
      <div className="form-container">
        <form>
          <label>
            Titre :
            <input
              type="text"
              name="titre"
              value={inputTitre}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description :
            <textarea
              name="description"
              value={inputDescription}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
    )}

    <div className="buttons-container">
      {liveEnCours ? (
        <button onClick={handleStartStopClick}>Stop</button>
      ) : (
        <button onClick={handleStartStopClick}>Start</button>
      )}
      <Link to="/">Retour à l'accueil</Link>
    </div>
  </div>
</div>
);
}

export default AffichageLive;



