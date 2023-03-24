import React, { useState } from 'react';
//import axios
import axios from 'axios';

const UploadForm = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedMiniature, setSelectedMiniature] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');



    const handleVideoInputChange = (event) => {
        setSelectedVideo(event.target.files[0]);
    };

    const handleMiniatureInputChange = (event) => {
        setSelectedMiniature(event.target.files[0]);
    };

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionInputChange = (event) => {
        setDescription(event.target.value);
    };

    const handleTagsInputChange = (event) => {
        setTags(event.target.value);
    };
    // Gestionnaire de soumission du formulaire
    const handleSubmit = (event) => {
        const baseURL = "http://localhost:3001/channels/uploadVideo";

        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Envoi des données du formulaire au serveur
        try {
            axios.post(baseURL, {
                "video": selectedVideo,
                "title": title,
                "description": description,
                "tags": tags,
                "miniature": selectedMiniature
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response);
            });


        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='upload_container'>
            <form onSubmit={handleSubmit} className="formUpload">
                <div className="videoUpload">
                    <input onChange={handleVideoInputChange} type="file" id="fileVideo" accept="video/*" placeholder='video' />
                </div>
                <div className="formInfosUpload">
                    <input type="text" id="titleVideo" placeholder='titre' required onChange={handleTitleInputChange} />
                    <input type="text" id="descriptionVideo" placeholder='description' required onChange={handleDescriptionInputChange} />
                    <input type="text" id="tagsVideo" placeholder='tags' required onChange={handleTagsInputChange} />
                </div>
                <div className="miniatureUpload">
                    <input onChange={handleMiniatureInputChange} type="file" id="fileMiniature" accept="image/*" placeholder='minia' />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default UploadForm;