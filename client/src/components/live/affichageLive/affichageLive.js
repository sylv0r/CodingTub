import React, { useState, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import io from 'socket.io-client';

const AffichageLive = () => {
  const [stream, setStreamData] = useState(null);
  const videoRef = React.createRef();

  useEffect(() => {
    const socket = io.connect('http://localhost:3005');

    socket.on('stream', (data) => {
      console.log('received stream:', data);
      setStreamData(data);
    });

    socket.emit('join', 'stream');

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (stream) {
      const player = videojs(videoRef.current, {
        controls: true,
        autoplay: true,
        fluid: true,
        sources: [{
          src: stream.streamUrl,
          type: 'application/x-mpegURL'
        }]
      });
      return () => {
        player.dispose();
      };
    }
  }, [stream]);

  return (
    <div>
      {stream ? (
        <div data-vjs-player>
          <video ref={videoRef} autoPlay playsInline id="creer_live" style={{ width: "100%", height: "100%" }} className="video-js"></video>
        </div>
      ) : (
        <div>Chargement</div>
      )}
    </div>
  );
};

export default AffichageLive;