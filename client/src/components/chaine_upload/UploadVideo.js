import React, { useState } from 'react'
import UploadForm from './UploadForm'
import Alert from 'react-bootstrap/Alert';
import "./UploadVideo.scss"

export default function Channel() {
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState("")
  const [responseType, setResponseType] = useState(null)

  return (
    <div className='main'>
      <UploadForm state={{ setAlert, setMessage, setResponseType }} />
      {alert && <Alert className='alert' variant={responseType}>{message}</Alert>}
    </div>
  )
}
