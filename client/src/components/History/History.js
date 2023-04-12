import React, { useState } from 'react';

function History(props) {
  const [videoHistory, setVideoHistory] = useState([]);

  const handleVideoClick = (video) => {
    // Ajouter la vidéo cliquée à l'historique
    const updatedHistory = [...videoHistory, video];
    setVideoHistory(updatedHistory);

    // Mettre à jour l'historique dans localStorage
    localStorage.setItem('videoHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div>
      <h2>Liste des vidéos</h2>
      <ul>
        <li onClick={() => handleVideoClick('Vidéo 1')}>Vidéo 1</li>
        <li onClick={() => handleVideoClick('Vidéo 2')}>Vidéo 2</li>
        <li onClick={() => handleVideoClick('Vidéo 3')}>Vidéo 3</li>
      </ul>

      <h2>Historique des vidéos visionnées</h2>
      <ul>
        {videoHistory.map((video, index) => (
          <li key={index}>{video}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
