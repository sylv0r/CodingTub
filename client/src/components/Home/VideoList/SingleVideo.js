import { useState, useEffect } from 'react'

export default function SingleVideo({video}) {

    //state
    let currentdate = new Date(); 
    let publicationDate = new Date(video.published_at);

    let difference = (currentdate.getTime() - publicationDate.getTime()) / 1000

    if (difference < 60) {
        difference = Math.round(difference)
        difference == 1 ? difference += " seconde" : difference += " secondes"
    }
    else if (difference < 3600) {
        difference = Math.round(difference / 60)
        difference == 1 ? difference += " minute" : difference += " minutes"
    }
    else if (difference < 86400) {
        difference = Math.round(difference / 60 / 60)
        difference == 1 ? difference += " heure" : difference += " heures"
    }
    else if (difference < 604800) {
        difference = Math.round(difference / 60 / 60 / 24)
        difference == 1 ? difference += " jour" : difference += " jours"
    }
    else if (difference < 2592000) {
        difference = Math.round(difference / 60 / 60 / 24 / 7)
        difference == 1 ? difference += " semaine" : difference += " semaines"
    }
    else if (difference < 31104000) {
        difference = Math.round(difference / 60 / 60 / 24 / 30) + " mois"
    }
    else {
        difference = Math.round(difference / 60 / 60 / 24 / 30 / 12)
        difference == 1 ? difference += " an" : difference += " ans"
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

    //render
    return (
        <div className="singleVid">
            <div className="thumbnail">
                <a href={`/video?id=${video.id}`}><img src={video.miniature}/*"https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?height=200p&trim=2,2,2,2&crop=16:9"*/ alt="" /></a> <br />
                <h6 className="video-duration">{video.duree}</h6>
            </div>

            <div className="informations" onMouseOver={handleHover} onMouseLeave={handleEndHover}>
                <a href={`/channel/${video.name}`}><img className="channel-img" src={video.image_link} alt="" /></a>

                <div className="video-data">
                    <span className="video-title">{video.title}</span><br />

                    <a href={`/channel/${video.name}`} className="channel-name">{video.name}</a><br /> 
                
                    {views} vues | Il y a {difference}

                    <div className="dotsCircle" style={{visibility:visibility}} onClick={handleClick}>
                        <i className="fa-solid fa-ellipsis-vertical threeDots"></i>
                        <ul className="options" style={{visibility:optionsVisibility}}>
                            <li><i className="fa-solid fa-clock"></i> A regarder plus tard</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            
         </div>
    )

}
