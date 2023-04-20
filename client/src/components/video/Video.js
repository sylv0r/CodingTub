import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import './video.scss';
import './list_right.scss';
import axios from 'axios'

import { json, useSearchParams } from 'react-router-dom'
//import SingleVideoRight from './Home/Video/SingleVideoRight';
import Likes from './likes/Likes';
import Description from './description/Description';
import InfoChanel from './info_channel/InfoChanel';
import ListRight from './ListRight';
function Video() {

    const [videoHistory, setVideoHistory] = useState([localStorage.getItem("videoHistory")]);

    const handleVideoClick = async (video, inHistory) => {

        await fetch(`http://localhost:3001/videos/addHistory/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'authorization': localStorage.getItem('jwt') },
            body: JSON.stringify({
                video: video,
                inHistory: inHistory
            })

        })

    };


    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send




    const [videos, setVideos] = useState([]);

    const [views, setViews] = useState()



    async function getVideosInfo() {
        const response = await fetch(`http://localhost:3001/videos/showVideo/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })

        const data = await response.json();
        setVideos(data);
        setViews(data[0].views)
        console.log(data);
    }
    async function handleLikeClick() {


        await fetch(`http://localhost:3001/videos/likes/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id_video: id
            })

        });
    }


    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    const url = process.env.REACT_APP_NGINX_LINK;

    function waitForElement() {
        return new Promise(function (resolve, reject) {
            var element = document.getElementById('video-play');
            if (element) {
                resolve(element);
            } else {
                var interval = setInterval(function () {
                    var element = document.getElementById('video-play');
                    if (element) {
                        clearInterval(interval);
                        resolve(element);
                    }
                }, 100);
            }
        });
    }

    waitForElement().then(function (element) {

        if (element) {
            if (!element.firstChild.playEventListenerAdded) {
                element.firstChild.addEventListener("play", async function () {
                    console.log("Video started playing");

                    await fetch(`http://localhost:3001/videos/videoInHistory/`, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json', 'authorization': localStorage.getItem('jwt') },
                        body: JSON.stringify({
                            video: id
                        })
                    })
                        .then((response) => response.json())
                        .then((json) => {
                            if (json == "") {
                                handleVideoClick(id, false)
                            }
                            else {
                                handleVideoClick(id, true)
                            }
                        })

                    await fetch(`http://localhost:3001/videos/addViews`, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: id
                        })
                    })
                });



                element.firstChild.playEventListenerAdded = true;
            }
        }


    });




    useEffect(() => {
        getVideosInfo();
        //console.log(id)
        //handleVideoClick(id)
    }, [])



    return (

        <div id='player-wrapper'>
            {videos.length > 0 &&
                <div id='video_lecteur'>
                    <ReactPlayer
                        url={url + videos[0].video_link}
                        controls
                        className='player'
                        id="video-play"
                        width='50%'
                        height='50%'
                    // playing
                    //muted


                    />
                </div>
            }
            {videos.length > 0 &&

                <div id='video_info'>
                    <h2 id='title_video'>
                        {videos[0].title}
                    </h2>
                    <div id='div_infochannel_videostats'>
                        <InfoChanel video={videos} />
                        <div id='video_stats'>
                            <Likes video={videos} />
                            <span id='vues'>
                                {videos[0].vues} vues
                            </span>
                        </div>
                    </div>
                    <Description video={videos} />

                </div>
            }

            <ListRight action="getVideos" />




        </div>





    );



}


export default Video;
