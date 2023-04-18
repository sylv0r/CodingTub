import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './likes.scss';
import { useSearchParams } from 'react-router-dom';

function Likes(props) {
  const [userId, setUserId] = useState(localStorage.getItem('user_id'));

  let [searchParams, setSearchParams] = useSearchParams();
  const video_id = searchParams.get('id');

  const video_info = props.video[0].likes;

  
  const [isActive, setIsActive] = useState(false);
  
  

const toggleActive = () => {
    setIsActive(!isActive);
    handleLikeClick();
};

async function handleLikeClick() {
  await fetch(`http://localhost:3001/videos/likes/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      video_id: video_id,
      user_id: userId,
    }),
  });
}
  return (
      <div id="all_like">
      <span id="likes">{video_info}</span>
      <div className="placement">
        <button
          className={`like-button ${isActive ? 'active' : ''}`}
          onClick={toggleActive}
          >
          Like
        </button>
      </div>
    </div>
  );
}

export default Likes;
