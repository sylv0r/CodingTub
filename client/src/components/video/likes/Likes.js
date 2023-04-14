import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import './likes.scss';
import { useSearchParams  } from 'react-router-dom'
function Likes(props) {
    
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send
    

    const video_info = props.video[0].likes;




    async function handleLikeClick() {
  

        await fetch(`http://localhost:3001/videos/likes/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            
                id: id
            })
            
        });
    }


    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
      setIsActive(!isActive);
    }

    



    
    return (
                 
             <div id='all_like'>
                <span id='likes'>
                    {video_info} 
                </span>
                <div className="placement">
                    <div className={`heart ${isActive ? 'is-active' : ''}`} onClick={() => {toggleActive();handleLikeClick();}}></div>
                </div>
            </div>
    );
    
}    


export default Likes;