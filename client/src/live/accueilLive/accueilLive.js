import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AffichageLive() {
  const [lives, setLives] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3009/api/getLives')
      .then(response => response.json())
      .then(data => {
        setLives(data);
      });
  }, []);

  return (
    <div>
      <h1>Liste des lives en cours</h1>
      <ul>
        {lives.map(live => (
          <li key={live.id}>
            <a href={live.URL}>{live.title}</a>
          </li>
        ))}
      </ul>
      <Link to="/affichageLive">
          <button className="Accueil-button">Visualiser le live</button>
        </Link>
        <Link to="/creerLive">
          <button className="Accueil-button">Créer le live</button>
        </Link>
      </div>
  );
}

export default AffichageLive;
