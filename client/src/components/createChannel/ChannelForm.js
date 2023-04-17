import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ChannelForm.scss"

export default function ChannelForm({state}) {
  const name = useRef();
  const description = useRef();
  const image = useRef();

  async function handleSubmit(e) {
    state.setAlert(false)
    e.preventDefault()
    if (localStorage.getItem("user_id")) {
      const formData = new FormData();
      formData.append('description', description.current.value);
      formData.append('user_id', localStorage.getItem("user_id"));
      formData.append('name', name.current.value);
      formData.append('image', image.current.files[0]);
    
      try {
        const response = await fetch('http://localhost:3001/channels/createChannel', {
          method: 'POST',
          body: formData,
        });
    
        const json = await response.json();
        if (json.error) {
          state.setResponseType("danger")
          state.setMessage(json.error)
          state.setAlert(true)
        } else {
          state.setResponseType("success")
          state.setMessage(json.message)
          state.setAlert(true)
          name.current.value = ""
          description.current.value = ""
          image.current.value = ""
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      state.setResponseType("danger")
      state.setMessage("Vous devez être connecté à un compte pour vous créer une chaîne")
      state.setAlert(true)
    }
  }

  return (
    <Form className='form'>
      <h3>Création de chaîne CodingTub</h3>
      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Titre de la chaîne</Form.Label>
        <InputGroup>
          <Form.Control
            ref={name}
            type="text"
            placeholder="Entrer le titre (min 4 caractères)"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => name.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>  
        <Form.Text className="text-muted">
          Utilisez uniquement des mots corrects.
        </Form.Text>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="form-description">
        <Form.Label>Description de la chaîne</Form.Label>
        <Form.Control
          ref={description}
          as="textarea"
          className="form-description"
          placeholder="Entrer la description (min 10 caractères)"
          style={{ width: "100%" }}
        />
        <Form.Text className="text-muted">
          Utilisez uniquement des mots corrects.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-image-link">
        <Form.Label>Miniature de la chaîne</Form.Label>
        <InputGroup>
          <Form.Control
            ref={image}
            type="file" 
            accept="image/png, image/jpeg, image/jpg"
            placeholder="Entrer le lien de votre miniature (min 10)"
          />
          <InputGroup.Text onClick={() => image.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
        <Form.Text className="text-muted">
          Extensions .png, .jpeg, .jpg
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Créer la chaîne
      </Button>
    </Form>
  )
}
