import { React, useState, useEffect } from 'react';
import './ListPlaylist.scss';
import { useSearchParams } from 'react-router-dom';
import SingleVideoRight from '../Home/VideoList/singleVideoRight'
import axios from 'axios'
import DeleteVidPlay from './DeleteVidPlay';

export default function ListPlaylist(){

    const [searchParams, setSearchParams] = useSearchParams()
    let playlist_name = searchParams.get('list')

    //state
    const [videos, setVideos] = useState([])

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

    useEffect(()=>{
        getPlaylistsVideos()
    }, []) 

    //comportement

    const url = process.env.REACT_APP_NGINX_LINK;

    //render
    return(

        <div id="videos_right">
        {videos.map((video) => {
            return ( 
            <>
                <SingleVideoRight video={video} />
                <DeleteVidPlay id_video={video.id} playlist_name={playlist_name} />
            </>
            )
        })}
    </div>

    )
}