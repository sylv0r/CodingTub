import { React, useState, useEffect } from 'react';
import './../style/ListPlaylist.scss';
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

<<<<<<< HEAD
        <div className="list-videos">
            <div className="playlist-container">
                <ul className="playlist-list">
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                    <li className="playlist-item">
                        <a href="#">
                        <img src="" alt="" />
                        <div className="playlist-item-info">
                            <h3 className="playlist-video-title">Nom de la vidéo</h3>
                            <p className="playlist-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                            <span className="playlist-item-duration">00:00</span>
                        </div>
                        </a>
                        <div className="playlist-item-icon">
                            <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            {/*<FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff"}} id="threedoticon"/>*/}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
=======
        <div id="videos_right">
        {videos.map((video) => {
            return <SingleVideoRight video={video} />
        })}
    </div>
>>>>>>> origin/pre_main

    )
}