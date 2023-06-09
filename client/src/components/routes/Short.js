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
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [timer, setTimer] = useState(null);
  const [likesCount, setLikesCount] = useState(0);
   //const userId = localStorage.getItem('user_id') || 1 ;

  const userId = 1;

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/shorts/fetch");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
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

  const fetchLikes = async (videoId) => {
    try {
      const response = await axios.get(`http://localhost:3001/shorts/fetchlikes/${videoId}`);
      console.log('Response data:', response.data); // Log the entire data object
  
      const likes = response.data[0].like;
  
      console.log('Likes fetched:', likes);
      return likes;
      
    } catch (error) {
      console.error('Error fetching likes:', error);
      return null;
    }}
  
  const fetchComments = async (videoId) => {
    try {
      const response = await axios.get(`http://localhost:3001/shorts/fetchcomments/${videoId}`, { params: { user_id: userId } });
      setComments(response.data);

      const newTimer = setTimeout(() => {
        fetchComments(videoId);
      }, 50000);

      setTimer(newTimer);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (displayedVideos[1]) {
      const videoId = displayedVideos[1].id;
      fetchComments(videoId);

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [displayedVideos]);

  useEffect(() => {
    const fetchAndSetLikesCount = async () => {
      const videoId = displayedVideos[1]?.id;
      if (videoId) {
        const likes = await fetchLikes(videoId); // Get the likes directly
        console.log('Fetched likes:', likes);
        setLikesCount(likes); // Set the likes count directly
        console.log('Updated likesCount:', likes);
      }
    };
  
    console.log("useEffect called for displayedVideos[1]:", displayedVideos[1]);
    fetchAndSetLikesCount();
  }, [displayedVideos[1]]);

  const sendComment = async (commentText, videoId) => {
    try {
      await axios.post(`http://localhost:3001/shorts/setcomment/${videoId}`, { comment: commentText, user_id: userId });
      fetchComments(videoId);
    } catch (error) {
      console.error('Error sending comment:', error);
    }
  };

  const handleLike = async (videoId) => {
    try {
      await axios.post(`http://localhost:3001/shorts/like/${videoId}`, { user_id: userId });
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

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      sendComment(commentText, displayedVideos[1]?.id);
      setCommentText("");
    }
  };
 
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
            <span className="likes-count">{likesCount}</span>
          </button>
          <button className="comment-button" onClick={() => setShowComments(!showComments)}>
            <FaComment />
          </button>
          <Link to="/Uploadshort">
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
      <div>
        <div>
        {showComments && (
            <div className="comments-sidebar">
              <div className="input-container">
                <input
                  type="text"
                  className="comment-input"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button className="submit-comment" onClick={handleCommentSubmit}>
                  Send
                </button>
              </div>
              <div className="comments-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <p className="comment-author">{comment.user_id}</p>
                    <p className="comment-text">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
 }  

 export default Short;