import { useState, useEffect } from 'react'
import './videolist.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import SingleVideo from './SingleVideo'

export default function VideoList() {

    //state
     const [videos, setVideos] = useState([
        {id: 1, title: "Video 1", views: 1000, date: "28 minutes", channelName: "User 1", duree: "18:34"},
        {id: 2, title: "Video 2", views: 2000, date: "3 heures", channelName: "User 2", duree: "8:53"},
        {id: 3, title: "Video 3", views: 3000, date: "5 jours", channelName: "User 3", duree: "4:16:45"},
        {id: 4, title: "Video 4", views: 4000, date: "8 mois", channelName: "User 4", duree: "0:10"},
        {id: 5, title: "Video 5", views: 5000, date: "2 ans", channelName: "User 5", duree: "10:00:00"},
     ])

    //comportement
    const getVideos = async () => {
        await fetch('http://localhost:3001/getVideos', {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                //setVideos(response.data)
                //console.log(response.data)
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

    //render
    return (
        <div id="videos">
            {/*<button onClick={getVideos}>Get Videos</button>*/}
            {videos.map((vid) => (
                <SingleVideo video={vid} key={vid.id}/>
            ))}
        </div>
    )

}