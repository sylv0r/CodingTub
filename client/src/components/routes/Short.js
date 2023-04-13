import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../style/short.css";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Short = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/shorts/fetch");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  const handleLike = async (videoId) => {
    console.log('Video ID:', videoId);
    try {
      await axios.post(`http://localhost:3001/shorts/like/${videoId}`);
      fetchVideos(); 
    } catch (error) {
      console.error("Error liking video:", error);
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
        <button onClick={() => handleLike(videos[1]?.id)}>
          <FaThumbsUp />
          <span>Like</span>
        </button>
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
      <div className="upload-button">
      <Link to="/UploadShort">
        <button>Upload Video</button>
      </Link>
    </div>
    </div>
  );
};

export default Short;
