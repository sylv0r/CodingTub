import { React, useState, useEffect } from 'react';
import './ListPlaylist.scss';
import { useSearchParams } from 'react-router-dom';
import SingleVideoRight from '../Home/VideoList/singleVideoRight'
import axios from 'axios'

export default function ListPlaylist(){

    const [searchParams, setSearchParams] = useSearchParams()
    let playlist_name = searchParams.get('list')

    //state
    const [videos, setVideos] = useState([])

    let vids = []
    
    const getPlaylistsVideos = async () => {
        axios.post('http://localhost:3001/users/getUserId', {
          hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
        })
        .then(async (response) => {

            await fetch(`http://localhost:3001/playlists/getVids`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                playlist_name: playlist_name,
                id_user: response.data
                })
            })
            .then(response => {
                return response.json()
            })
            .then((json) => {
                //console.log(json)
                setVideos(json)
                vids = json
                //console.log(vids)
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

        })
        .catch(error => {
          console.log('error', error.response.data)
        });
        
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
            return <SingleVideoRight video={video} />
        })}
    </div>

    )
}