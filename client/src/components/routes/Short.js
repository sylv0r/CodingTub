import React from 'react';
import ReactPlayer from 'react-player';
import '../style/short.css';

const videoUrls = [
  'https://www.youtube.com/watch?v=video1',
  'https://www.youtube.com/watch?v=video2',
  'https://www.youtube.com/watch?v=video3',
];

function Short() {
  return (
    <div className="player-container">
      <div className="player-small">
        <ReactPlayer
          url={videoUrls[0]}
          controls={true}
          height="300px"
          width="200px"
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
          height="300px"
          width="200px"
          className="player"
        />
      </div>
    </div>
  );
}

export default Short;