import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

const ResultHashtag = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // send

    const [videos, setvideos] = useState([]);



    async function getVideosInfo() {
        const response = await fetch(`http://localhost:3001/search/resulthashtag/${id}`, {
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

    return (
        <div>

        </div>
    )
}

export default ResultHashtag;