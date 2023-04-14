
import './History.scss';

import React, { useState, useEffect } from 'react';

function History(props) {
  const [videoHistory, setVideoHistory] = useState([]);

  const handleVideoClick = (video) => {
// Check if the video is in the history    

const index = videoHistory.indexOf(video);

    if (index !== -1) {
  
      const updatedHistory = [...videoHistory];
      updatedHistory.splice(index, 1);

      // video at the top of the history
      setVideoHistory([video, ...updatedHistory]);
    } else {

// Add the video to the beginning of the history

  const updatedHistory = [video, ...videoHistory];
      setVideoHistory(updatedHistory);
    }

    // Mise à jour historique dans le localstorage
    localStorage.setItem('videoHistory', JSON.stringify(videoHistory));
  };

  const handleHistoryClick = (video) => {

// Modify the URL to include the video id

    window.history.pushState(null, null, `?v=${video}`);
    
  };

// Load saved history

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
