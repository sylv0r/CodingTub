import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player'
import './video.scss';
import { useSearchParams  } from 'react-router-dom'
function Video() {
    
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send
    


    const [videos, setVideos] = useState([]);



    async function getVideos() {
        const response = await fetch(`http://localhost:3001/videos/showVideo/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
    
        const data = await response.json();
        setVideos(data);
        console.log(data);
    }
    
    


    useEffect(()=>{
        getVideos();
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
                            <span>
                                {videos[0].likes} likes
                            </span>
                            <span>
                                {videos[0].vues} vues
                            </span>
                            <span>
                                {videos[0].published_at}
                            </span>
                        </div>
                            <div className='video-description'>
                                <p>
                                    {videos[0].description}
                                </p>
                            </div>
                        </div>
            }
        </div>
    );
    
}    


export default Video;
