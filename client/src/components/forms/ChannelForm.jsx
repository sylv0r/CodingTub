import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ChannelForm.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChannelForm({state}) {
  const name = useRef();
  const description = useRef();
  const imageLink = useRef();

  async function handleSubmit(e) {
    e.preventDefault()

    if (name.current.value.length < 4 || description.current.value.length < 10) {
      state.setAlert(true)
      state.setResponseType("danger")
      state.setMessage("Vos champs doivent tous être remplis")
    } else {
      fetch("http://localhost:3001/channels/createChannel", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.current.value,
        description: description.current.value,
        image_link: imageLink.current.value,
        user_id: 1
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      if (!json.error) {
        state.setResponseType("success")
        state.setMessage('Votre chaîne a été créée avec succès !')
        name.current.value = ""
        description.current.value = ""
        imageLink.current.value = ""
      } else {
        state.setResponseType("danger")
        state.setMessage("Ce nom de chaîne existe déjà")
      }
      state.setAlert(true)
    })
    }
  }

  return (
    <Form className='form'>
      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Titre de la chaîne</Form.Label>
        <InputGroup>
          <Form.Control
            ref={name}
            type="text"
            placeholder="Entrer le titre"
          />
          <InputGroup.Text onClick={() => name.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>  
        <Form.Text className="text-muted">
          Utilisez uniquement des mots corrects.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Description de la chaîne</Form.Label>
        <Form.Control
          ref={description}
          as="textarea"
          className="form-description"
          placeholder="Entrer la description (min 4)"
        />
        <Form.Text className="text-muted">
          Utilisez uniquement des mots corrects.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-image-link">
        <Form.Label>Miniature de la chaîne</Form.Label>
        <InputGroup>
          <Form.Control
            ref={imageLink}
            type="file" 
            accept="image/png, image/jpeg, image/jpg"
            placeholder="Entrer le lien de votre miniature (min 10)"
            onChange={(e) => {
              console.log(e.target.files[0])
              //imageLink.current.value = e.target.files[0]
            }}
          />
          <InputGroup.Text onClick={() => imageLink.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
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
