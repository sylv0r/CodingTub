import React, { useEffect, useState } from 'react'
import "./ModifyProfile.scss"
import ProfileForm from './ProfileForm'
import Alert from 'react-bootstrap/Alert';
import checkConnection from '../../methods/checkConnection';

export default function ModifyProfile() {
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState("")
  const [responseType, setResponseType] = useState(null)

  useEffect(() => {
    checkConnection()
  }, [])

  return (
    <div className='main'>
      <ProfileForm state={{setAlert, setMessage, setResponseType}} />
      {alert && <Alert className='alert' variant={responseType}>{message}</Alert>}
    </div>
  )
}
