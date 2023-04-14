import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../style/short.css";
import { FaThumbsUp, FaComment, FaUpload, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Short = () => {
  const [videos, setVideos] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
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

  const prevVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextVideo = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    setDisplayedVideos([
      videos[currentIndex - 1] || {},
      videos[currentIndex] || {},
      videos[currentIndex + 1] || {},
    ]);
  }, [videos, currentIndex]);
 
  return (
    <div className="body">
      <div className="player-container">
        <div className="player-past">
          <ReactPlayer
            url={displayedVideos[0]?.shorturl}
            controls={true}
            height="600px"
            width="250px"
            className="player"
          />
          <p>{displayedVideos[0]?.description}</p>
        </div>
        <div className="player-current" style={{ position: "relative" }}>
          
  
          <ReactPlayer
            url={displayedVideos[1]?.shorturl}
            controls={true}
            height="750px"
            width="380px"
            className="player"
          />
          <p>{displayedVideos[1]?.description}</p>
          
         
        </div>
        <div className="next-previous-container">
        <button className="next-video-button" onClick={nextVideo}>
            <FaArrowRight />
          </button>
        <button className="prev-video-button" onClick={prevVideo}>
            <FaArrowLeft />
          </button>

        </div>
        <div className="like-comment-container">
        
          <button className="like-button" onClick={() => handleLike(displayedVideos[1]?.id)}>
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
        <div className="player-next">
          <ReactPlayer
            url={displayedVideos[2]?.shorturl}
            controls={true}
            height="600px"
            width="250px"
            className="player"
          />
          <p className="descriptionShort">{displayedVideos[2]?.description}</p>
        </div>
      </div>
      {showComments && (
        <div className="comments-sidebar">
          {/* Add your comments implementation here */}
        </div>
      )}
    </div>
  );
 }  

 export default Short;