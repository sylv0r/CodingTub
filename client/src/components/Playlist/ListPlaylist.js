import React from 'react';
import './../style/ListPlaylist.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function ListPlaylist(){

    return(

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
                        <div class="playlist-item-icon">
                            <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>
                        </div>
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
                        <div class="playlist-item-icon">
                            <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}