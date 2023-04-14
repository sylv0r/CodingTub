import React from 'react';
import './../style/Playlist.scss';
import PreviewPlaylist from './PreviewPlaylist';
import ListPlaylist from './ListPlaylist';

export default function Playlists(){

    return(

        <div className="container">

            <PreviewPlaylist/>
            <ListPlaylist/>

        </div>
    );


}