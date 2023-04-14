import "./hashtag.scss"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


async function getHashtag(setHashtags) {

    const response = await fetch(`http://localhost:3001/hashtag/hashtag`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    setHashtags(data);
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [hashtags, setHashtags] = useState();

  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  



    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div id="hashtag">
    
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>

            </div>
            
        </Carousel.Item>
        <Carousel.Item>
            <div id="hashtag">
    
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>

            </div>
            
        </Carousel.Item>
        <Carousel.Item>
            <div id="hashtag">
    
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>
                <div>
                    <a href={getHashtag(setHashtags)}>{hashtags}</a>
                </div>

            </div>
            
        </Carousel.Item>
    </Carousel>
    );
}
export default ControlledCarousel;