import { useState } from 'react'
import './videolist.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import SingleVideo from './SingleVideo'

export default function VideoList() {

    //state
     const [list, setList] = useState([
        {id: 1, title: "Video 1", views: 1000, date: "28 minutes", channelName: "User 1", duree: "18:34"},
        {id: 2, title: "Video 2", views: 2000, date: "3 heures", channelName: "User 2", duree: "8:53"},
        {id: 3, title: "Video 3", views: 3000, date: "5 jours", channelName: "User 3", duree: "4:16:45"},
        {id: 4, title: "Video 4", views: 4000, date: "8 mois", channelName: "User 4", duree: "0:10"},
        {id: 5, title: "Video 5", views: 5000, date: "2 ans", channelName: "User 5", duree: "10:00:00"},
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