import React from 'react';
import { Link } from 'react-router-dom';


function Accueil() {
  return (
    <div className="Accueil">
      <header className="Accueil-header">
        <h1 className="Accueil-title">Bienvenue sur la section Live de CodingTube</h1>
        <p className="Accueil-intro">
          Vous pouvez accéder à la page de visualisation du live en cliquant sur le bouton ci-dessous.
        </p>
        <Link to="/affichageLive">
          <button className="Accueil-button">Visualiser le live</button>
        </Link>
        <Link to="/creerLive">
          <button className="Accueil-button">Créer le live</button>
        </Link>
      </header>
    </div>
  );
}

export default Accueil;
