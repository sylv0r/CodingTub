import React, { useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ProfileForm.scss"

export default function ProfileForm({state}) {
  const lastname = useRef();
  const firstname = useRef();
  const pseudo = useRef();
  const formerPassword = useRef();
  const newPassword = useRef();
  const confirmPassword = useRef();

  useEffect(() => {
    fetch(`http://localhost:3001/users/getProfile/${localStorage.getItem("user_id")}`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      if (json.user) {
        lastname.current.value = json.user[0].nom
        firstname.current.value = json.user[0].prenom
        pseudo.current.value = json.user[0].pseudo
      }
      console.log(json)
    })
  }, [])

  async function handleSubmit(e) {
    console.log("click")
    e.preventDefault()
    state.setAlert(false)
    if (localStorage.getItem("user_id")) {
      console.log("connected")
      try {
        const response = await fetch('http://localhost:3001/users/modifyProfile', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: localStorage.getItem("user_id"),
            lastname: lastname.current.value,
            firstname: firstname.current.value,
            pseudo: pseudo.current.value,
          }),
        });
    
        const json = await response.json();
        console.log(json)
        if (json.error) {
          state.setResponseType("danger")
          if (typeof json.error === "string") {
            state.setMessage(json.error)
          } else {
            state.setMessage("Erreur du serveur, veuillez réésayer plus tard")
          }
          state.setAlert(true)
        } else {
          state.setResponseType("success")
          state.setMessage(json.message)
          state.setAlert(true)
        }
      } catch (error) {
        console.error("error");
      }
    } else {
      state.setResponseType("danger")
      state.setMessage("Vous devez être connecté à un compte pour vous créer une chaîne")
      state.setAlert(true)
    }
  }

  return (
    <Form className='form' method='put'>
      <h3>Modification du profile CodingTub</h3>
      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Nom :</Form.Label>
        <InputGroup>
          <Form.Control
            ref={lastname}
            type="text"
            placeholder="Entre 3 et 30 charactères"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => lastname.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Prénom :</Form.Label>
        <InputGroup>
          <Form.Control
            ref={firstname}
            type="text"
            placeholder="Entre 3 et 30 charactères"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => firstname.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Pseudo :</Form.Label>
        <InputGroup>
          <Form.Control
            ref={pseudo}
            type="text"
            placeholder="Entre 3 et 30 charactères"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => pseudo.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Ancien mot de passe :</Form.Label>
        <InputGroup>
          <Form.Control
            ref={formerPassword}
            type="text"
            placeholder="Au moins 8 charactères"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => formerPassword.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
        <Form.Text className="text-muted">
          1 majuscule, 1 nombre et 1 charactère spécial
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Nouveau mot de passe :</Form.Label>
        <InputGroup>
          <Form.Control
            ref={newPassword}
            type="password"
            placeholder="Entrer le titre (min 4 caractères)"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => newPassword.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
        <Form.Text className="text-muted">
          1 majuscule, 1 nombre et 1 charactère spécial
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form-title">
        <Form.Label>Confirmation mot de passe :</Form.Label>
        <InputGroup>
          <Form.Control
            ref={confirmPassword}
            type="password"
            placeholder="Entrer le titre (min 4 caractères)"
            style={{ marginRight: "0px" }}
          />
          <InputGroup.Text onClick={() => confirmPassword.current.value=""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </InputGroup.Text>
        </InputGroup>
        <Form.Text className="text-muted">
          1 majuscule, 1 nombre et 1 charactère spécial
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Modifier l'utilisateur
      </Button>
    </Form>
  )
}
