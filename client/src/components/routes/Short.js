import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../style/short.css";

const Short = () => {
  const [videos, setVideos] = useState([]);

  // Fonction pour charger les vidéos depuis l'API
  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/shorts/fetch");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Charger les vidéos lors de l'initialisation du composant
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="player-container">
      <div className="player-past">
        <ReactPlayer
          url={videos[0]?.shorturl}
          controls={true}
          height="100%"
          width="100%"
          className="player"
        />
        <p>{videos[0]?.description}</p>
      </div>
      <div className="player-current">
        <ReactPlayer
          url={videos[1]?.shorturl}
          controls={true}
          height="100%"
          width="100%"
          className="player"
        />
        <p>{videos[1]?.description}</p>
      </div>
      <div className="player-next">
        <ReactPlayer
          url={videos[2]?.shorturl}
          controls={true}
          height="100%"
          width="100%"
          className="player"
        />
        <p>{videos[2]?.description}</p>
      </div>
    </div>
  );
};

export default Short;
