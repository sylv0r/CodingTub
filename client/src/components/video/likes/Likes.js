import React, { useState, useEffect } from 'react';
import './likes.scss';
import { useSearchParams, useNavigate } from 'react-router-dom';

function Likes(props) {
  const [videoLikes, setVideoLikes] = useState(props.video[0].likes);
  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  const video_id = searchParams.get('id');

  const [isActive, setIsActive] = useState(false);

  async function verifyLike() {
    const response = await fetch(`http://localhost:3001/videos/verifLike?video_id=${video_id}`, {
      method: 'GET',
      headers: { authorization: localStorage.getItem("jwt"), 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    var count = Object.keys(result).length;
    if (count > 0) {
      setIsActive(true);
    }
  }

  useEffect(() => {
    verifyLike();
  }, []);



  async function handleLikeClick() {
    if (!localStorage.getItem("jwt")) {
      navigate('/connexion');
      return null;
  }
    if (isActive) {
      await fetch(`http://localhost:3001/videos/deleteLike/`, {
        method: 'DELETE',
        headers: { authorization: localStorage.getItem("jwt"), 'Content-Type': 'application/json' },
        body: JSON.stringify({
          video_id: video_id,
        }),
      });
      setVideoLikes(videoLikes - 1);
    } else {
      await fetch(`http://localhost:3001/videos/likes/`, {
        method: 'POST',
        headers: { authorization: localStorage.getItem("jwt"), 'Content-Type': 'application/json' },
        body: JSON.stringify({
          video_id: video_id,
        }),
      });
      setVideoLikes(videoLikes + 1);
    }
    setIsActive(!isActive);
  }



  return (
    <div id="all_like">
    
      <span id="likes">{videoLikes}</span>
      <div id="placement_button_like">
        <button 
          className={`like-button ${isActive ? 'active' : ''}`}
          onClick={handleLikeClick}
        >
          Like
        </button>
      </div>
    </div>
  );
}

export default Likes;
