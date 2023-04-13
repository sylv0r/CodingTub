import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import './video.scss';
import { useSearchParams  } from 'react-router-dom'
function Video() {
    
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send
    



    const [videos, setVideos] = useState([]);



    async function getVideosInfo() {
        const response = await fetch(`http://localhost:3001/videos/showVideo/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
    
        const data = await response.json();
        setVideos(data);
        console.log(data);
    }
    async function handleLikeClick() {
  

        await fetch(`http://localhost:3001/videos/likes/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            
                id_video: id
            })
            
        });
    }


    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
      setIsActive(!isActive);
    }

    


    useEffect(()=>{
        getVideosInfo();
    }, []) 


    
    return (
                 
        <div id='player-wrapper'>
            {videos.length > 0 &&
            <div className='video'>
                <ReactPlayer 
                    url={videos[0].video_link} 
                    controls
                    className='player'
                    width='50%'
                    height='50%'
                    />
                    </div>
            }
            {videos.length > 0 &&
                    
                <div id='video_info'>
                    <h2 id='title_video'>
                        {videos[0].title}
                    </h2>
                        <div id='video_stats'>
                            <span id='likes'>
                                {videos[0].likes} 
                            </span>
                            <button id='button_like' onClick={handleLikeClick}>Like</button>
                            <div className="placement">
                                <div className={`heart ${isActive ? 'is-active' : ''}`} onClick={() => {toggleActive();handleLikeClick();}}></div>
                            </div>
                            <span id='vues'>
                            {videos[0].vues} vues
                            </span>
                        </div>

                        <div id='video-description'>
                            <p>
                                description :
                            </p>
                            <p id='description'>
                                {videos[0].description}
                            </p>
                        </div>
                        <div id='published'>
                            <span>
                                {videos[0].published_at}
                            </span>
                        </div>
                        </div>
            }
        </div>
    );
    
}    


export default Video;
