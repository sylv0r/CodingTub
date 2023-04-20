import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import './likes.scss';
import { useSearchParams  } from 'react-router-dom'
import axios from 'axios'

function Likes(props) {
    
    
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send
    let playlist_name = searchParams.get('list')
    

    const video_info = props.video[0].likes;

    const [videos, setVideos] = useState([])

    let vids = []


    async function handleLikeClick() {
  

        await fetch(`http://localhost:3001/videos/likes/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            
                id: id
            })
            
        });
    }

    async function handlePlaylistLLClick(){

        axios.post('http://localhost:3001/users/getUserId', {
        hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
        })
        .then(async (response) => {
            await addVid("LL", response.data, id);
        })
            
        async function addVid(playlist_name, id_user, id_video) {
            await fetch("http://localhost:3001/playlists/addVideo", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    playlist_name : playlist_name,
                    id_user : id_user,
                    id_video : id_video
                })
            })
            .then((response) => {
                return response
            })
        }
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
                    <div className={`heart ${isActive ? 'is-active' : ''}`} onClick={() => {toggleActive();handleLikeClick();handlePlaylistLLClick();}}></div>
                </div>
            </div>
    );
    
}    


export default Likes;