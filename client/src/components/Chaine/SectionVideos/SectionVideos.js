import React from 'react'
import VideoList from '../../Home/VideoList/VideoList'

export default function SectionVideos({ name }) {

    //state

    //comportement

    //render
    return (
        <div>
            <VideoList action={`getChannelVideos/${name}`} />
        </div>
    );
}