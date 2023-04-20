import React from 'react';
import './PreviewPlaylist.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function PreviewPlaylist(){

    const [searchParams, setSearchParams] = useSearchParams()
    let playlist_name = searchParams.get('list')

    //state
    const [videos, setVideos] = useState([])
    const [minia, setMiniature] = useState("")

    let vids = []
    
    const getPlaylistsVideos = async () => {

        await fetch(`http://localhost:3001/playlists/getVids`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "authorization" : localStorage.getItem('jwt')},
        body: JSON.stringify({
            playlist_name: playlist_name,
            })
        })
        .then(response => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            setVideos(json)
            setMiniature(json[0].miniature)
            console.log(videos)
            vids = json
            console.log(vids)
        })
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error :', error.message);
            }
        })
        
        
    }

    let miniature

    useEffect(()=>{
        getPlaylistsVideos()
    }, []) 

    console.log(videos)

    const url = process.env.REACT_APP_NGINX_LINK;
    let namePlaylist

    if(playlist_name == 'WL') {
        namePlaylist = "A regarder plus tard"
    }
    else if (playlist_name == 'LL') {
        namePlaylist = 'Vidéos j\'aime'
    }
    else {
        namePlaylist = playlist_name
    }

    return(

        <div className='container2'>
            <div className='preview-videos'>
                <div className='display-videos'>
                    {videos && <img src={minia} alt="" />}
                </div>
                <div className='display-text'>
                    <h2>{namePlaylist}</h2>
                    <p>{videos.length} vidéos</p>
                </div>
                {/*<div className='display-buttons'>
                    <input type="button" value="Play" className='display-button' id='button-play'></input>
                    <input type="button" value="Aléatoire" className='display-button' id='button-random'></input>
                </div>*/}
            </div>
        </div>

    )

    


}