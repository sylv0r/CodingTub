import React, { useEffect, useState } from 'react';
import './Playlist.scss';
import PreviewPlaylist from './PreviewPlaylist';
import ListPlaylist from './ListPlaylist';

export default function Playlists(){

    return(

        <div className="playlists-container">
            <PreviewPlaylist />
            <div className='playlists-container2'>
                <ListPlaylist />
            </div>            
        </div>  

    );


}