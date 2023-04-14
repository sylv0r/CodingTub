
import './History.scss';

import React, { useState, useEffect } from 'react';

function History(props) {
  const [videoHistory, setVideoHistory] = useState([]);

  const handleVideoClick = (video) => {
    // Vérifier si la video est dans l'historique
    const index = videoHistory.indexOf(video);

    if (index !== -1) {
  
      const updatedHistory = [...videoHistory];
      updatedHistory.splice(index, 1);

      // video en haut de l'historique
      setVideoHistory([video, ...updatedHistory]);
    } else {
      // Ajouter la vidéo au début de l'historique
      const updatedHistory = [video, ...videoHistory];
      setVideoHistory(updatedHistory);
    }

    // Mise à jour historique dans le localstorage
    localStorage.setItem('videoHistory', JSON.stringify(videoHistory));
  };

  const handleHistoryClick = (video) => {
    // Modifier l'URL pour inclure l'id de la vidéo
    window.history.pushState(null, null, `?v=${video}`);
    
  };

  // Charger l'historique sauvgardé
  useEffect(() => {
    const savedHistory = localStorage.getItem('videoHistory');
    if (savedHistory) {
      setVideoHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <div className='evenement'>
      <h2>vidéos</h2>
      <ul>
        <li onClick={() => handleVideoClick('dinggzzz')}>dinggzzz</li>
        <li onClick={() => handleVideoClick('vroum')}>vroum</li>
        <li onClick={() => handleVideoClick('testss')}>testss</li>
      </ul>

      <h2>Historique </h2>
      <ul>
        {videoHistory.map((video, index) => (
          <li key={index} onClick={() => handleHistoryClick(video)}>
            {video}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
