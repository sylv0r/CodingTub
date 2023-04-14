import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AffichageLive() {
  const [lives, setLives] = useState([]);


  //AFFICHE LES LIVES EN COURS SUR LA PAGE D'ACCUEIL\\
  useEffect(() => {
    const fetchLives = () => { //Regarde si y a un live en cours
      fetch('http://localhost:3009/api/getLives')
        .then(response => response.json())
        .then(data => {
          setLives(data);
        })
        .catch(error => {
          console.error('Erreur dans la recherche de lives en cours :', error);
        });
    };

    //Fetch la requete au lancement
    fetchLives();

    //Fetch la requete toute les 5 secondes
    const intervalDesFetch = setInterval(() => {
      fetchLives();
    }, 5000);

    //Supprime le fetch de la requete lorsque l'utilisateur quitte la page (important)
    return () => {
      clearInterval(intervalDesFetch);
    };
  }, []);
  //------------------------------------------------\\




  return (
    <div>
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
    </div>
  );
}

export default AffichageLive;
