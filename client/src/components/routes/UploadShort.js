import React, { useState } from "react";
import axios from "axios";

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
      // Remplacez "your-api-url" par l'URL de votre API
      await axios.post("http://localhost:3001/shorts/video", videoData);
      setSubmitStatus("La vidéo a été ajoutée avec succès !");
    } catch (error) {
      setSubmitStatus("Une erreur s'est produite lors de l'ajout de la vidéo.");
    }
  };

  return (
    <div>
      <h2>Formulaire d'upload de vidéo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="videoDescription">Description de la vidéo :</label>
        <input
          type="text"
          id="videoDescription"
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
        />
        <br />
        <label htmlFor="videoURL">URL de la vidéo :</label>
        <input
          type="text"
          id="videoURL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <br />
        <button type="submit">Envoyer</button>
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
};

export default VideoUploadForm;
