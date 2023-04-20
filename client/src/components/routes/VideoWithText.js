import React, { useState, useRef, useEffect } from 'react';
import '../style/videoWithText.css';
import Draggable from 'react-draggable';

const VideoWithText = ({
  videoSrc,
  textData,
  setTextData,
  videoRef,
  className,
  onMetadataLoaded,
  onUpdateTextData,
}) => {
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
  const videoOverlayRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      setVideoDimensions({
        width: videoRef.current.clientWidth,
        height: videoRef.current.clientHeight,
      });
    }
  }, [videoRef]);

  const handleDrag = (e, data) => {
    if (!videoOverlayRef.current) {
      return;
    }

    const parentWidth = videoOverlayRef.current.clientWidth;
    const parentHeight = videoOverlayRef.current.clientHeight;

    const newX = Math.max(0, Math.min(data.x, parentWidth - e.target.clientWidth));
    const newY = Math.max(0, Math.min(data.y, parentHeight - e.target.clientHeight));

    const newTextData = { ...textData, x: newX, y: newY };
    setTextData(newTextData);
    onUpdateTextData(newTextData);
  };

  return (
    <div className={`video-with-text-container ${className}`}>
      <div className="video-container">
        <video
          className='video-edited'
          ref={videoRef}
          src={videoSrc}
          onLoadedMetadata={(e) => onMetadataLoaded(e)}
        />
        {videoDimensions.width > 0 && videoDimensions.height > 0 && (
          <div className="video-overlay" ref={videoOverlayRef} style={{ position: 'absolute', width: videoDimensions.width, height: videoDimensions.height }}>
            <Draggable bounds="parent" onStop={handleDrag}>
              <div
                className="overlay-text"
                style={{ position: "absolute", top: textData.y, left: textData.x }}
              >
                {textData.text}
              </div>
            </Draggable>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoWithText;
