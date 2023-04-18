import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../style/short.css';
import Like from './Like.png';
import Dislike from './Dislike.png';
import Comment from './Comment.png';
import Other from './Other.png';

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
      
      <div className="player-container">
        <div className="player-small" id="gap">
          <ReactPlayer
            url={videoUrls[0]}
            controls={true}
            height="500px"
            width="250px"
            className="player"
          />
        </div>
        <div className="player-large">
          <ReactPlayer
            url={videoUrls[1]}
            controls={true}
            height="600px"
            width="330px"
            className="player"
          />
          <div class="buttons">
          <div class="gap"> 
            <p class="liking">J'aime</p> 
            <img src={Like} class="like"/> 
          </div> 

          <div class="gap"> 
            <p class="liking">Je n'aime pas</p> 
            <img src={Dislike} class="dislike"/> 
          </div>


          <div class="gap"> 
            <p class="liking">Commentaires</p> 
              <img src={Comment} class="comment"/> 
          </div>

          <div class="gap"> 
            <p class="liking">Autres</p> 
            <img src={Other} class="comment"/> 
          </div>

        </div>
        </div>

        
        <div className="player-small">
          <ReactPlayer
            url={videoUrls[2]}
            controls={true}
            height="500px"
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
