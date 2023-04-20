import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import './videolistRight.scss'

export default function SingleVideoRight({video}) {

    //console.log("I AM A VIDEO")

    //state
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

    const [visibility, setVisibility] = useState(['hidden'])
    const [optionsVisibility, setOptionsVisibility] = useState(['hidden'])
    //comportement
    const handleHover = () => {
        setVisibility('visible')
    }

    const handleEndHover = () => {
        setVisibility('hidden')
        setOptionsVisibility('hidden')
    }

    const handleClick = () => {
        setOptionsVisibility('visible')
    }

    const handleThumbnailError = (e) => {
        //console.error('error')
        //console.log(e.target)
        e.onError=null
        e.target.src='https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?height=200p&trim=2,2,2,2&crop=16:9'
    }

    const handlePfpError = (e) => {
        //console.error('error')
        //console.log(e.target)
        e.onError=null
        e.target.src = "data:image/png;base64,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"
    }

    const url = process.env.REACT_APP_NGINX_LINK;

    const location = useLocation();
    //console.log(location.pathname);

    const channelPage = !location.pathname.includes('/channel/')

    const [duration, setDuration] = useState("00 : 00")

    useEffect(() => {
        const vid = document.getElementById(`video-${video.id}`);
        vid.addEventListener('loadedmetadata', function() {
        //setDuration(Math.round(vid.duration));
        //console.log(vid.duration)
        //setDuration(vid.duration)
        //console.log(duration)
        const duree = Math.floor(vid.duration)
        const minutes = Math.floor(duree / 60);
        const seconds = duree - minutes * 60;
        function str_pad_left(string,pad,length){
            return (new Array(length+1).join(pad)+string).slice(-length);   
        }      
        var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
        setDuration(finalTime)
        })
    }, [])

    //render
    return (
        <div className="singleVidR">
            <a href={`/video?id=${video.id}`}>
            <div className="thumbnail">
                <img src={url + video.miniature} alt="" onError={(e) => handleThumbnailError(e)} /> <br />
                <h6 className="video-duration">{duration}</h6>
            </div>
            </a>

            <div className="informations" onMouseOver={handleHover} onMouseLeave={handleEndHover}>

                {channelPage && <a href={`/channel/${video.name}`}><img className="channel-img" src={url + video.image_link} alt="pfp" onError={(e) => handlePfpError(e)} /></a>}

                <div className="video-data">

                    <span className="video-title">{video.title}</span><br />

                    {channelPage && <><a href={`/channel/${video.name}`} className="channel-name">{video.name}</a><br /></>} 
                
                    {views} vues | Il y a {difference}

                    <div className="dotsCircle" style={{visibility:visibility}} onClick={handleClick}>
                        <i className="fa-solid fa-ellipsis-vertical threeDots"></i>
                        <ul className="options" style={{visibility:optionsVisibility}}>
                            <li><i className="fa-solid fa-clock"></i> A regarder plus tard</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>

            <div id={`video-div-${video.id}`}>
                <video id={`video-${video.id}`} height="0" width="0" style={{"display": "none"}} src={url + video.video_link}>
                </video>
            </div>
            
         </div>
    )

}
