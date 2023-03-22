import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ChannelForm.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChannelForm() {
  const name = useRef();
  const description = useRef();
  const imageLink = useRef();

  async function handleSubmit(e) {
    e.preventDefault()
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
      console.log(json)
    })
  }

  return (
    <Form className='form'>
      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Titre de la chaîne</Form.Label>
        <Form.Control
          ref={name}
          type="text"
          placeholder="Entrer le titre" 
        />
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
          placeholder="Entrer la description"
        />
        <Form.Text className="text-muted">
          Utilisez uniquement des mots corrects.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-image-link">
        <Form.Label>Miniature de la chaîne</Form.Label>
        <Form.Control
          ref={imageLink}
          type="text" 
          placeholder="Entrer le lien de votre miniature"
        />
        <Form.Text className="text-muted">
          Utilisez uniquement des mots corrects.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Créer la chaîne
      </Button>
    </Form>
  )
}
