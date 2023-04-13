import React from 'react';
import './../style/Playlist.scss';

export default function Playlists(){

    

    return(

        <div className="container">


            <div className='container2'>
                <div className='preview-videos'>
                    <div className='display-videos'></div>
                    <div className='display-text'>
                        <h2>Vidéos</h2>
                        <p>User</p>
                        <p>x vidéos - Mise à jour aujourd'hui</p>
                    </div>
                    <div className='display-buttons'>
                        <input type="button" value="Play" className='display-button' id='button-play'></input>
                        <input type="button" value="Aléatoire" className='display-button' id='button-random'></input>
                    </div>
                </div>
                <div className="list-videos">
                    <div class="playlist-container">
                        <ul class="playlist-list">
                            <li class="playlist-item">
                                <a href="#">
                                <img src="" alt="" />
                                <div class="playlist-item-info">
                                    <h3 class="playlist-video-title">Nom de la vidéo</h3>
                                    <p class="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                                    <span class="playlist-item-duration">00:00</span>
                                </div>
                                </a>
                            </li>
                            <li class="playlist-item">
                                <a href="#">
                                <img src="" alt="" />
                                <div class="playlist-item-info">
                                    <h3 class="playlist-video-title">Nom de la vidéo</h3>
                                    <p class="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                                    <span class="playlist-item-duration">00:00</span>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );


}