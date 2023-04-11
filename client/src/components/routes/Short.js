import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../style/short.css';

import axios from 'axios';

const videoUrls = [
  'https://www.youtube.com/watch?v=sySgyi7KDSE&ab_channel=Swiptype%E2%80%A2',
  'https://www.youtube.com/watch?v=cFBKinVCjVA&ab_channel=Leboncot%C3%A9deschauves',
  'https://www.youtube.com/watch?v=70y_OWTol9U&ab_channel=wlistlinks',
];

function Short() {
  const [text, setText] = useState('');

  const addItem = async (e) => {
    e.preventDefault();
    console.log(text)
    try {
      const response = await axios.post('http://localhost:3001/shorts/video', {
        text: text,
      });

      console.log('Text added successfully:', response.data);
      setText('');
    } catch (error) {
      console.error('Error adding text:', error);
    }
  };

 

  return (
    <>
      <div className="form-container" >
        
        <form className="form-short" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Text content"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add Text</button>
          <button id="likeButton">J'aime</button>
        </form>
      </div>
      <div className="player-container">
        <div className="player-small">
          <ReactPlayer
            url={videoUrls[0]}
            controls={true}
            height="600px"
            width="250px"
            className="player"
          />
        </div>
        <div className="player-large">
          <ReactPlayer
            url={videoUrls[1]}
            controls={true}
            height="750px"
            width="380px"
            className="player"
          />
        </div>
        <div className="player-small">
          <ReactPlayer
            url={videoUrls[2]}
            controls={true}
            height="600px"
            width="250px"
            className="player"
          />
        </div>
        <div>
          <button> Suivant </button>
        </div>
      </div>
    </>
  );
}

export default Short;
