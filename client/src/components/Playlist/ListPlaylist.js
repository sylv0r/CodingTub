import { React, useState, useEffect } from 'react';
import './../style/ListPlaylist.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function ListPlaylist({ video, action }){
    
        const getPlaylistsVideos = async () => {
            await fetch(`http://localhost:3001/playlist?list=WL/${action}`, {method: "GET", headers: { "Content-Type": "application/json"}})
                .then(response => {
                    return response.json()
                })
                .then((json) => {
                    console.log(json)
                    setPlaylistsVideos(json)
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
    
    //state
    const [videos, setPlaylistsVideos] = useState([])
    
    let currentdate = new Date(); 
    let publicationDate = new Date(video.published_at);

    let difference = (currentdate.getTime() - publicationDate.getTime()) / 1000

    if (difference < 60) {
        difference = Math.round(difference)
        difference === 1 ? difference += " seconde" : difference += " secondes"
    }
    else if (difference < 3600) {
        difference = Math.round(difference / 60)
        difference === 1 ? difference += " minute" : difference += " minutes"
    }
    else if (difference < 86400) {
        difference = Math.round(difference / 60 / 60)
        difference === 1 ? difference += " heure" : difference += " heures"
    }
    else if (difference < 604800) {
        difference = Math.round(difference / 60 / 60 / 24)
        difference === 1 ? difference += " jour" : difference += " jours"
    }
    else if (difference < 2592000) {
        difference = Math.round(difference / 60 / 60 / 24 / 7)
        difference === 1 ? difference += " semaine" : difference += " semaines"
    }
    else if (difference < 31104000) {
        difference = Math.round(difference / 60 / 60 / 24 / 30) + " mois"
    }
    else {
        difference = Math.round(difference / 60 / 60 / 24 / 30 / 12)
        difference === 1 ? difference += " an" : difference += " ans"
    }

    let views = video.vues

    if (views < 1000) {
        views = views // --> 100 vues
    }
    // vues inférieures à dix mille
    else if (views < 10000) {
        views = (views / 1000).toFixed(1) + " k" // --> 3.4 k vues
    }
    // cent mille ou 1 million
    else if (views < 1000000) {
        views = Math.round(views / 1000) + " k" // --> 124 k vues
    }
    // 1 million
    else if (views < 10000000) {
        views = (views / 1000000).toFixed(1) + " M" // --> 1.4 M vues
    }
    // 10 millions ou 100 millions
    else if (views < 1000000000) {
        views = Math.round(views / 1000000) + " M" // --> 32 M vues
    }
    // 1 milliard
    else if (views < 10000000000) {
        views = (views / 1000000000).toFixed(1) + " Md" // --> 5.2 Md vues
    }
    // au dessus de 10 milliards
    else {
        views = Math.round(views / 1000000000) + " Md" // 10 Md vues
    }

    //comportement

    const url = process.env.REACT_APP_NGINX_LINK;



    //render
    return(

        <div className="list-videos">
            <div class="playlist-container">
                <ul class="playlist-list">
                    {videos.map((vid) => (
                        <li class="playlist-item" video={vid} key={vid.id}>
                            <a href={`/video?id=${video.id}`}>
                                <img src={url + video.miniature} alt="" />
                                <div class="playlist-item-info">
                                    <h3 class="playlist-video-title">{video.title}</h3>
                                    <p class="playlist-item-infos"><a href='#'>channel.name</a> {views} - il y a {difference} </p>
                                    <span class="playlist-item-duration">{video.duree}</span>
                                </div>
                            </a>
                            <div class="playlist-item-icon">
                                <i className="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}} id="threedoticon"></i>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}