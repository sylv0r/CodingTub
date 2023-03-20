import React, { useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ChannelForm.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChannelForm() {
  const title = useRef();
  const descritpion = useRef();
  const imageLink = useRef();

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("alert : ",descritpion.current.value)
  }

  return (
    <Form className='form'>
      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Titre de la chaîne</Form.Label>
        <Form.Control
          ref={title}
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
          ref={descritpion}
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
