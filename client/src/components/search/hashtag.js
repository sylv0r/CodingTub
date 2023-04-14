<<<<<<< HEAD
=======
/*import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
>>>>>>> rechercche_matheo2
import "./hashtag.scss"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


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

        </div>
            
        </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;


/*export default class Hashtag extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}*/