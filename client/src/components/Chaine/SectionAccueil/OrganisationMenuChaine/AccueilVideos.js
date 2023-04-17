import React from 'react'
import VideoList from '../../../Home/VideoList/VideoList'

export default function AccueilVideos() {

    //state
    var currentUrl = window.location.href

    var split = currentUrl.split('/')
    var name = split[split.length-1]
    console.log(name)
    //comportement

    //render
    return (
        <div>
            <VideoList action={`getChannelVideosAccueil/${name}`} />
        </div>
    )
}