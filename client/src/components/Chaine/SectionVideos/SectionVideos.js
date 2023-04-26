import React, { useState } from 'react'
import VideoList from '../../Home/VideoList/VideoList'

export default function SectionVideos({ infos_video }) {
    //state

    //comportement

    //render
    return (
        <div>
            <VideoList action={`getChannelVideos/${infos_video.name}`} />
        </div>
    );
}