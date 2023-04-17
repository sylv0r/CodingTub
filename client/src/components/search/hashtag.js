import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./hashtag.scss";

const Hashtag = () => {
    // Declare state variables
    const [names, setNames] = useState([]);
    const [index, setIndex] = useState(0);

    // Fetch data from the server when component mounts
    useEffect(() => {
        fetch(`http://localhost:3001/search/hashtag`)
            .then(response => response.json())
            .then(data => {
                setNames(data.map(item => item.nom)); // set the names state with an array of names
            })
            .catch(error => console.log(error));
    }, []);

    // Handle carousel item selection
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <div className="hashtag-list" id='hashtag'>
                    {names.map((name, i) => (
                        <div key={i}>
                            <a href={'/search-result?query=' + name}>{name}
                            </a>
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Hashtag;
