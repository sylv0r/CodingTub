import React, { useState, useRef, useEffect } from 'react';
import VideoWithText from './VideoWithText';
import '../../components/style/editShort.css';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Range, Handle } from 'rc-slider';
import 'rc-slider/assets/index.css';

const VideoEditor = ({ videoURL, videoFile, onUpdateTextData }) => {
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoDuration, setVideoDuration] = useState(null);
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(0);
  const [textData, setTextData] = useState({ x: 0, y: 0, text: "" });
  const videoRef = useRef(null);
  const ffmpeg = createFFmpeg({ log: true });

  useEffect(() => {
    if (videoURL) {
      setVideoPreview(videoURL);
    } else if (videoFile) {
      setVideoPreview(URL.createObjectURL(videoFile));
    }
  }, [videoURL, videoFile]);

  useEffect(() => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoDuration(videoRef.current.duration);
      setTrimEnd(videoRef.current.duration);
    }
  }, [videoPreview]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setTextData({ ...textData, text });
    onUpdateTextData({ ...textData, text });
  };

  const handleTrimStartChange = (value) => {
    setTrimStart(value);
    if (value >= trimEnd) {
      setTrimEnd(value + 0.1);
    }
  };

  const handleTrimEndChange = (value) => {
    setTrimEnd(value);
    if (value <= trimStart) {
      setTrimStart(value - 0.1);
    }
  };

  const applyFilters = async () => {
    if (!videoFile) {
      alert('Veuillez d\'abord uploader un fichier vidéo.');
      return;
    }

    try {
      const file = videoFile;
      await ffmpeg.load();

      ffmpeg.FS('writeFile', file.name, await fetchFile(file));

      await ffmpeg.run('-i', file.name, '-vf', 'boxblur=5:1', 'output.mp4');

      const data = ffmpeg.FS('readFile', 'output.mp4');
      const videoBlob = new Blob([data.buffer], { type: 'video/mp4' });
      setVideoPreview(URL.createObjectURL(videoBlob));
    } catch (error) {
      console.error('Erreur lors de l\'application des filtres:', error);
    }
  };

  const renderSliderHandle = (props) => {
    const { value, dragging, index, ...restProps } = props;

    return (
      <Handle
        key={index}
        value={value}
        offset={0}
        {...restProps}
      >
        <div
          className="video-trimming__handle"
          style={{ left: `${(value / videoDuration) * 100}%` }}
        />
      </Handle>
    );
  };

  return (
    <div className='editShort'>
    {videoPreview && (      <div className="video-preview video-editor__preview">

<VideoWithText
  videoSrc={videoPreview}
  textData={textData}
  setTextData={setTextData}
  videoRef={videoRef}
  className="video-preview__video"
  onMetadataLoaded={(e) => {
      setVideoDuration(e.target.duration);
  setTrimEnd(e.target.duration);
  }}
  onUpdateTextData={onUpdateTextData}
/>
</div>
)}
<div className="video-editor">

<div className="video-editor__container">
  
{videoDuration && (
  <div className="video-trimming video-editor__trimming">
    <h3 className="video-trimming__title">Découpage vidéo</h3>
    <Range
      min={0}
      max={videoDuration}
      value={[trimStart, trimEnd]}
      onChange={(values) => {
        setTrimStart(values[0]);
        setTrimEnd(values[1]);
      }}
      className="video-trimming__slider"
      handle={renderSliderHandle}
      allowCross={false}
      pushable={0.1}
      railStyle={{ backgroundColor: '#C5C5C5' }}
      trackStyle={[{ backgroundColor: '#47B8B8' }]}
      handleStyle={[
        { borderColor: '#47B8B8', backgroundColor: '#fff', width: '14px', height: '14px', marginTop: '-5px' },
        { borderColor: '#47B8B8', backgroundColor: '#fff', width: '14px', height: '14px', marginTop: '-5px' },
      ]}
    />
    <span className="video-trimming__duration">{formatTime(trimStart)} - {formatTime(trimEnd)}</span>
    <p className="video-trimming__info">
      Durée de la vidéo : {formatTime(videoDuration)}
    </p>
  </div>
)}
<div className="video-filters video-editor__filters">

  <input type="text" value={textData.text}  placeholder="Insérez un texte" onChange={handleTextChange} className="video-filters__text-input" />
  <button onClick={() => applyFilters()} className="video-filters__apply-button">Appliquer les filtres</button>
</div>
</div>
</div>
</div>
);
};

export default VideoEditor;

