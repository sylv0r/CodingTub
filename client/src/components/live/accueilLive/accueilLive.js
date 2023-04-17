import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AffichageLive() {
  const [lives, setLives] = useState([]);
  const [videoURL, setVideoURL] = useState('');

  

  useEffect(() => {
    const fetchLives = () => {
      fetch('http://localhost:3009/api/getLives')
        .then(response => response.json())
        .then(data => {
          setLives(data);
        })
        .catch(error => {
          console.error('Erreur dans la recherche de lives en cours :', error);
        });
    };

    fetchLives();

    const intervalDesFetch = setInterval(() => {
      fetchLives();
    }, 5000);

    return () => {
      clearInterval(intervalDesFetch);
    };
  }, []);

  const handleVideoClick = (event, url) => {
    event.preventDefault();
    setVideoURL(url);
  };

  return (
    <div id="accueilLive_body">
      <h1>Liste des lives en cours</h1>
      <ul>
        {Array.isArray(lives) && lives.map(live => (
          <li key={live.id}>
            <a href={live.URL}>{live.title}</a>
          </li>
        ))}
      </ul>
      <Link to="/creerLive">
        <button className="Accueil-button">Créer le live</button>
      </Link>
      <br></br>
      <br></br>
      <div>
        <h1>Rediffusion de live</h1>
        {videoURL && (
          <video controls src={videoURL}></video>
        )}
        {!videoURL && (
          <p>Sélectionnez une vidéo pour la lire</p>
        )}
        <ul>
          {Array.isArray(lives) && lives.map(live => (
            <li key={live.id}>
              <a href="#" onClick={(event) => handleVideoClick(event, live.videoURL)}>
                {live.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AffichageLive;
