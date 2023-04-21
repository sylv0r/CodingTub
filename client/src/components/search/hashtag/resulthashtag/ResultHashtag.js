/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import SingleVideoHashtag from './SingleVideoHashtag';
import SearchForm from '../../filtre/type';

const ResultHashtag = () => {


    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send

    const [videos, setvideos] = useState([]);



    async function getVideosInfo() {
        const response = await fetch(`http://localhost:3001/searchBar/resulthashtag/${id}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })

        const data = await response.json();
        setvideos(data);
        console.log(data);
    }




    useEffect(() => {
        getVideosInfo();
    }, [])


    console.log(videos)



    //render
    return (
        <div>
            <SearchForm />
            <div id="videos">
                {/*<button onClick={getVideos}>Get Videos</button>*/}
                {videos.map((videos) => (
                    <SingleVideoHashtag video={videos} key={videos.id} />
                ))}
            </div>
        </div>
    )

}

export default ResultHashtag;





