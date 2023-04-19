import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import './video.scss';
import './list_right.scss';
import axios from 'axios'

import { json, useSearchParams  } from 'react-router-dom'
//import SingleVideoRight from './Home/Video/SingleVideoRight';
import Likes from './likes/Likes';
import ListRight from './ListRight';
function Video() {

        const [videoHistory, setVideoHistory] = useState([localStorage.getItem("videoHistory")]);

    const handleVideoClick = async (video, inHistory) => {
        
        console.log(video)

        axios.post('http://localhost:3001/users/getUserId', {
          hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
        })
        .then(async (response) => {
            await fetch(`http://localhost:3001/videos/addHistory/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user : response.data,
                video : id,
                inHistory : inHistory
            })
            
        });
        })

    };

    
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

    const url = process.env.REACT_APP_NGINX_LINK;

    /*window.addEventListener('load', function() {
        let player = document.getElementById('video-play')
        console.log(player)
        player.firstChild.addEventListener("play", function() {
        handleVideoClick(id)
        })
    })*/

    function waitForElement() {
        return new Promise(function(resolve, reject) {
          var element = document.getElementById('video-play');
          if (element) {
            resolve(element);
          } else {
            var interval = setInterval(function() {
              var element = document.getElementById('video-play');
              if (element) {
                clearInterval(interval);
                resolve(element);
              }
            }, 100);
          }
        });
      }
      
      waitForElement().then(function(element) {
        
        if (!element.firstChild.playEventListenerAdded) {
            element.firstChild.addEventListener("play", async function() {
                console.log("Video started playing");
                axios.post('http://localhost:3001/users/getUserId', {
                    hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
                    })
                    .then(async (response) => {
                        await fetch(`http://localhost:3001/videos/videoInHistory/`, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            user : response.data,
                            video : id
                        })
                    })
                    .then((response) => response.json())
                    .then((json) => {
                        if(json == "") {
                            handleVideoClick(id, false)
                        }
                        else {
                            handleVideoClick(id, true)
                        }
                    })
                });
                })
                
            element.firstChild.playEventListenerAdded = true;
            }
        
        
        });
    
    


    useEffect(()=>{
        getVideosInfo();
        //console.log(id)
        //handleVideoClick(id)
    }, []) 


    
    return (
                 
        <div id='player-wrapper'>
            {videos.length > 0 &&
            <div className='video'>
                <ReactPlayer 
                    url={url + videos[0].video_link}
                    controls
                    className='player'
                    id="video-play"
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
                            <Likes video={videos} />
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

            <ListRight action="getVideos" />


                
            
        </div>

       
        

             
    );
  
        
    
}    


export default Video;
