import { React, useState, useEffect } from 'react';
import './../style/ListPlaylist.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function ListPlaylist({ action }){

    //state
    const [videos, setVideos] = useState([])

    //comportement
    const getVideos = async () => {
        await fetch(`http://localhost:3001/videos/${action}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                console.log(json)
                setVideos(json)
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
        getVideos()
    }, []) 

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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
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
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}