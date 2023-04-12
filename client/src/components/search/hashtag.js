import "./hashtag.scss"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div id="hashtag">
    
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
            </div>
            
        </Carousel.Item>
        <Carousel.Item>
            <div id="hashtag">
    
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
            </div>
            
        </Carousel.Item>
        <Carousel.Item>
            <div id="hashtag">
    
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
                <div>
                    <a href="#hashtag">#hashtag</a>
                </div>
            </div>
            
        </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;