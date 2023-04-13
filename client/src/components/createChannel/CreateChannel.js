import React, { useState } from 'react'
import ChannelForm from './ChannelForm'
import Alert from 'react-bootstrap/Alert';
import "./CreateChannel.scss"

export default function Channel() {
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState("")
  const [responseType, setResponseType] = useState(null)

  return (
    <div className='main'>
      <ChannelForm state={{setAlert, setMessage, setResponseType}} />
      {alert && <Alert className='alert' variant={responseType}>{message}</Alert>}
    </div>
  )
}
