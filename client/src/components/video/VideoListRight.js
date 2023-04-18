import { useState, useEffect } from 'react'
import './ListRight.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import SingleVideo from '../Home/VideoList/SingleVideo'

export default function VideoListRight({ action }) {

    //state
     const [videos, setVideos] = useState([])

    //comportement
    const getVideos = async () => {
        await fetch(`http://localhost:3001/videos/${action}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                //console.log(json)
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
        <div className="list-right-videos">
        <div class="list-right-container">
            <ul class="playlist-right-list">
            {/*<button onClick={getVideos}>Get Videos</button>*/}
            {videos.map((vid) => (
                <SingleVideo video={vid} key={vid.id}/>
            ))}
            </ul>
        </div>
        </div>
    )

}