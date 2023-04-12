//import './Hashtag.scss';
import React, {Fragment, useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./hashtag.scss"
import axios from 'axios';
 
function Hashtag() {

    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(

            );
            setData
        }  
    })

  return (

    <Carousel>
    {datas.map((hashtag) => (
        <div key={hashtag.id}>
            <div className="hashtag">
                <a href="">{hashtag.id}</a>
            </div>
        </div>
    ))}
    </Carousel>
  );
}

export default Hashtag;