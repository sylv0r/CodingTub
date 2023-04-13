import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../style/short.css";

const Short = () => {
  const [videos, setVideos] = useState([]);

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: '',
    };
  };
    
  componentDidMount() {
     const searchQuery = 'chat';
     const API_KEY = 'oMZIXIvlIyN7dlfYApReIKBP24KDsi87mM5UULxIEYAwe16hwNgc8AhM'
     axios.get(`https://api.pexels.com/v1/search?query=${searchQuery}`, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then(response => {
        this.setState({ videoUrl: response.data.videoUrl });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div  className='short'>
      
        <video controls>
        <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
