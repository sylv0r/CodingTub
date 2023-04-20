import React, { useState } from "react";
import axios from "axios";
import "../style/videoUploadForm.css";
import { Link } from "react-router-dom";
import VideoEditor from "./EditShort";


  const VideoUploadForm = () => {
    const [videoDescription, setVideoDescription] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [submitStatus, setSubmitStatus] = useState("");
    const [messageType, setMessageType] = useState("");
    const [isFileUpload, setIsFileUpload] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [textData, setTextData] = useState({ x: 0, y: 0, text: "" });
    const updateTextData = (newTextData) => {
      setTextData(newTextData);
    };
  
    const handleToggleChange = () => {
      setIsFileUpload(!isFileUpload);
    };
  
    const toggleEditing = () => {
      setIsEditing(!isEditing);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const videoData = new FormData();
      videoData.append("description", videoDescription);
  
      if (isFileUpload && videoFile) {
        videoData.append('video', videoFile);
        videoData.append('textData', JSON.stringify(textData));
      } else {
        videoData.append("url", videoURL);
        videoData.append('textData', JSON.stringify(textData));
      }
      console.log("Video description:", videoDescription);
          console.log("Video URL:", videoURL);
          console.log("Video file:", videoFile);
          console.log("Text data:", JSON.stringify(textData));
  
      try {
        const response = await axios.post("http://localhost:3001/shorts/video", videoData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("Video added successfully:", response.data);
        setVideoDescription("");
        setVideoURL("");
        setVideoFile(null);
        setSubmitStatus("Vidéo ajoutée avec succès.");
        setMessageType("success");
  
     
      } catch (error) {
        console.log("l'erreur est la ");
        console.error("Error adding video:", error.response ? error.response.data : error);
        setSubmitStatus("Erreur lors de l'ajout de la vidéo.");
        setMessageType("error");
        setTimeout(() => {
          setSubmitStatus("");
          setMessageType("");
        }, 5000);
      }
    };
    setTimeout(() => {
      setSubmitStatus("");
      setMessageType("");
    }, 5000);
    
  
  

  
  return (
    <div className="upload-container">
      <div class="form-container">
      <div className="form-wrapper">
        <h2>Formulaire d'upload de vidéo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Description de la vidéo"
            id="videoDescription"
            value={videoDescription}
            onChange={(e) => setVideoDescription(e.target.value)}
          />
          <br />
          <label className="switch">
            <input
              type="checkbox"
              checked={isFileUpload}
              onChange={handleToggleChange}
            />
            <span className="slider round"></span>
          </label>
          <br />
          {isFileUpload ? (
            <input
              type="file"
              accept="video/mp4"
              id="videoFile"
              onChange={(e) => setVideoFile(e.target.files[0])}
            />
          ) : (
            <input
              type="text"
              placeholder="URL de la vidéo"
              id="videoURL"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
            />
          )}
          <br />
          <button type="submit">Upload</button>
          <Link to="/Short">
            <button type="button">Cancel</button>
          </Link>
          
          <button type="button" onClick={toggleEditing}>
            {isEditing ? "Arrêter l'édition" : "Éditer la vidéo"}
          </button>
          
          
        </form>
      </div>
      {submitStatus && (
        <div className={`message-banner ${messageType === "error" ? "message-error" : "message-success"}`}>
          {submitStatus}
        </div>
      )}
      <br />
     
      </div>
    
      {isEditing && (
        <VideoEditor  videoURL={videoURL} videoFile={videoFile} onUpdateTextData={updateTextData} />
      )}
    </div>
    
  );
};

export default VideoUploadForm;