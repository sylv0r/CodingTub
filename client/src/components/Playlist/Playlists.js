import React, { useEffect, useState } from 'react';
import './../style/Playlist.scss';
import PreviewPlaylist from './PreviewPlaylist';
import ListPlaylist from './ListPlaylist';
import ListRight from '../video/ListRight';
import DeleteVidPlay from './DeleteVidPlay';
import axios from 'axios';

import { useSearchParams } from 'react-router-dom';

export default function Playlists(){

    const [user, setUser] = useState()

    let username

    const getUser = async () => {
        
    }

    let [searchParams, setSearchParams] = useSearchParams();
    const playlist_name = searchParams.get('list'); // send

    useEffect(() => {
        async function getUser() {
            await axios.post('http://localhost:3001/users/getUserId', {
            hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
            })
            .then(async (response) => {
                username = response.data
                setUser(response.data)
                let container = document.getElementsByClassName('container')[0]
                let list = "<ListRight action={`getPlaylistsVideos/${playlist_name}/${username}`}/>"
                container.insertAdjacentHTML('beforeend', list)
            })
        }
    }, [])

    return(

        <div className="container">

            <PreviewPlaylist />
            <ListPlaylist />
            {/*<ListRight action={`getPlaylistsVideos/${playlist_name}/${username}`}/>*/}
            
        </div>   
    );


}