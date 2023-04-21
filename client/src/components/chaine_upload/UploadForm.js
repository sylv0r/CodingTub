import React, { useState, useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import SelectTagsUpload from './SelectTagsUpload';
import "./UploadForm.scss"


const UploadForm = ({ id_chaine }) => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedMiniature, setSelectedMiniature] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [message, setMessage] = useState("")
    const [responseType, setResponseType] = useState(null)
    const [alert, setAlert] = useState(false)


    const videoRef = useRef();
    const miniatureRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();




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


    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (event) => {
        setAlert(false);

        const baseURL = "http://localhost:3001/channels/uploadVideo";


        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Création d'un objet FormData pour envoyer les données du formulaire en tant que multipart/form-data
        const formData = new FormData();
        formData.append('video', selectedVideo);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tags', tags);
        formData.append('miniature', selectedMiniature);
        formData.append('selectedTags', selectedTags);
        formData.append('chaineId', id_chaine);

        // Envoi des données du formulaire au serveur
        try {
            axios.post(baseURL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                if (response.data.error) {
                    setResponseType('danger');
                    if (typeof response.data.error === 'string') {
                        setMessage(response.data.error);
                    } else {
                        setMessage('Erreur du serveur, veuillez réessayer plus tard');
                    }
                    setAlert(true);

                } else {
                    setResponseType('success');
                    setMessage('Vous avez upload la vidéo avec succès');
                    setAlert(true);
                    videoRef.current.value = '';
                    miniatureRef.current.value = '';
                    titleRef.current.value = '';
                    descriptionRef.current.value = '';
                }
            }).catch((error) => {
                setResponseType('danger');
                setMessage('Erreur du serveur, veuillez réessayer plus tard');
                setAlert(true);
            });

        } catch (error) {
            setResponseType('danger');
            setMessage('Erreur du serveur, veuillez réessayer plus tard');
            setAlert(true);
        }
    };

    return (
        <div className='main'>

            <Form className="form">
                <h3>Uploader une video</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Video à upload</Form.Label>
                    <InputGroup>
                        <Form.Control
                            ref={videoRef}
                            onChange={handleVideoInputChange}
                            type="file" id="fileVideo"
                            accept="video/mp4"
                            placeholder='Entrez le lien de la video'
                        />
                        <InputGroup.Text onClick={() => videoRef.current.value = ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Extensions .mp4
                    </Form.Text>
                </Form.Group>
                <Form.Group className="formInfosUpload mb-3">
                    <InputGroup className='mb-3'>
                        <Form.Control
                            ref={titleRef}
                            type="text"
                            id="titleVideo"
                            placeholder='titre'
                            required onChange={handleTitleInputChange}
                        />
                        <InputGroup.Text onClick={() => titleRef.current.value = ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                    <InputGroup>
                        <Form.Control
                            ref={descriptionRef}
                            type="text"
                            id="descriptionVideo"
                            placeholder='description'
                            required onChange={handleDescriptionInputChange}
                        />
                        <InputGroup.Text onClick={() => descriptionRef.current.value = ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Utilisez uniquement des mots corrects.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3">
                    <SelectTagsUpload tags={tags} setTags={setTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Miniature de la vidéo</Form.Label>
                    <InputGroup>
                        <Form.Control
                            ref={miniatureRef}
                            onChange={handleMiniatureInputChange}
                            type="file"
                            id="fileMiniature"
                            accept="image/png, image/jpeg, image/jpg"
                            placeholder='Entrez le lien de la miniature'
                        />
                        <InputGroup.Text onClick={() => miniatureRef.current.value = ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Extensions .png, .jpeg, .jpg
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                    Upload la video
                </Button>
            </Form>
            {alert && <Alert className='alert' variant={responseType}>{message}</Alert>}
        </div>
    );
};

export default UploadForm;