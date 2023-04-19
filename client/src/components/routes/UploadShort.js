import React, { useState } from "react";
import axios from "axios";
import "../style/videoUploadForm.css";
import { Link } from "react-router-dom";

const VideoUploadForm = () => {
const [videoDescription, setVideoDescription] = useState("");
const [videoURL, setVideoURL] = useState("");
const [videoFile, setVideoFile] = useState(null);
const [submitStatus, setSubmitStatus] = useState("");
const [messageType, setMessageType] = useState("");
const [isFileUpload, setIsFileUpload] = useState(false);
const [CommentsEnabled, setCommentsEnabled] = useState(true);
const [LikesEnabled, setLikesEnabled] = useState(true);

const handleToggleChange = () => {
setIsFileUpload(!isFileUpload);
};

const handleCommentsToggleChange = () => {
setCommentsEnabled(!CommentsEnabled);
};

const handleLikesToggleChange = () => {
  setLikesEnabled(!LikesEnabled);
};

const handleSubmit = async (e) => {
e.preventDefault();
const videoData = isFileUpload
  ? new FormData()
  : {
      description: videoDescription,
      url: videoURL,
    };

if (isFileUpload) {
  videoData.append("description", videoDescription);
  videoData.append("video", videoFile);
}

if (!CommentsEnabled) {
  videoData.CommentsEnabled = false;
}

if (!LikesEnabled) {
  videoData.LikesEnabled = false;
}

try {
  const response = await axios.post("http://localhost:3001/shorts/video", videoData, {
    headers: isFileUpload ? { "Content-Type": "multipart/form-data" } : {},
  });
  console.log("Video added successfully:", response.data);
  setVideoDescription("");
  setVideoURL("");
  setVideoFile(null);
  setSubmitStatus("Vidéo ajoutée avec succès.");
  setMessageType("success");

  setTimeout(() => {
    setSubmitStatus("");
    setMessageType("");
  }, 5000); // fait disparaître le message-banner après 5 secondes
} catch (error) {
  console.error("Error adding video:", error);
  setSubmitStatus("Erreur lors de l'ajout de la vidéo.");
  setMessageType("error");
  setTimeout(() => {
    setSubmitStatus("");
    setMessageType("");
  }, 5000);
}
};

return (
<div className="upload-container">
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
<label>
<input className="switch"
    type="checkbox"
    checked={CommentsEnabled}
    onChange={handleCommentsToggleChange}
/>
  Commentaires activés

</label>
<br />

<label>
<input className="switch"
    type="checkbox"
    checked={LikesEnabled}
    onChange={handleLikesToggleChange}
/>
  Likes activés
</label>
<br />
<button type="submit">Upload</button>
</form>
</div>
{submitStatus && (
<div className={`message-banner ${messageType}`}>
{submitStatus}
</div>
)}
<Link className="ReturnInShort" to="/Short">Retour à la liste des vidéos</Link>
</div>
);
};

export default VideoUploadForm;
