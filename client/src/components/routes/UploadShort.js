import React, { useState } from "react";
import axios from "axios";
import "../style/videoUploadForm.css";

const VideoUploadForm = () => {
  const [videoDescription, setVideoDescription] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videoData = {
      description: videoDescription,
      url: videoURL,
    };

    try {
      const response = await axios.post("http://localhost:3001/shorts/video", videoData);

      console.log("Video added successfully:", response.data);
      setVideoDescription("");
      setVideoURL("");
      setSubmitStatus("Vidéo ajoutée avec succès.");

    } catch (error) {
      console.error("Error adding video:", error);
      setSubmitStatus("Erreur lors de l'ajout de la vidéo.");
    }
  };

  return (
    <div className="container">
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

          <input

            type="text"
            placeholder="URL de la vidéo"
            id="videoURL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <br />
          <button type="submit">Upload</button>
        </form>
        {submitStatus && <p>{submitStatus}</p>}
      </div>
      <div class="block2">
        <input type="checkbox" id="toggle" class="toggle"></input>
        <label for="toggle" class="label"></label>
        <br/>
      </div>
      <input type="checkbox" id="toggle2" class="toggle"></input>
      <label for="toggle2" class="label"></label>
    </div>
  );



};

export default VideoUploadForm;
