import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../style/short.css";
import { FaThumbsUp, FaComment, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Short = () => {
  const [videos, setVideos] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/shorts/fetch");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleLike = async (videoId) => {
    try {
      await axios.post(`http://localhost:3001/shorts/like/${videoId}`);
      fetchVideos(); 
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="body">
      <div className="player-container">
        <div className="player-past">
          <ReactPlayer
            url={videos[0]?.shorturl}
            controls={true}
            height="600px"
            width="250px"
            className="player"
          />
          <p>{videos[0]?.description}</p>
        </div>
        <div className="player-current">
          <ReactPlayer
            url={videos[1]?.shorturl}
            controls={true}
            height="750px"
            width="380px"
            className="player"
          />
          <p>{videos[1]?.description}</p>
          <div className="like-comment-container">
            <button className="like-button" onClick={() => handleLike(videos[1]?.id)}>
              <FaThumbsUp />
            </button>
            <button className="comment-button" onClick={() => setShowComments(!showComments)}>
              <FaComment />
            </button>
            <Link to="/UploadShorts">
              <button className="upload-button">
                <FaUpload />
              </button>
            </Link>
          </div>
        </div>
        <div className="player-next">
          <ReactPlayer
            url={videos[2]?.shorturl}
            controls={true}
            height="600px"
            width="250px"
            className="player"
          />
          <p className="descriptionShort">{videos[2]?.description}</p>
        </div>
      </div>
      {showComments && (
        <div className="comments-sidebar">
          </div>
)}
</div>
);
};

export default Short;
