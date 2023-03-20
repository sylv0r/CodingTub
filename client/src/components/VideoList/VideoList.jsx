import { useState } from 'react'
import './videolist.scss'

import SingleVideo from './SingleVideo'

export default function VideoList() {

    //state
     const [list, setList] = useState([
        {id: 1, title: "Video 1", views: 1000},
        {id: 2, title: "Video 2", views: 2000},
        {id: 3, title: "Video 3", views: 3000},
        {id: 4, title: "Video 4", views: 4000},
        {id: 5, title: "Video 5", views: 5000},
     ])

    //comportement

    //render
    return (

        <div id="video-list">
            <h3>Videos</h3>

            <div id="videos">
                {list.map((vid) => (
                    <SingleVideo video={vid} />
                ))}
            </div>
        </div>

    )

}