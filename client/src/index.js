import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

  const express = require('express')
  const app = express()
  const bodyParser = require('body-parser')
  const port = 3001
  const cors = require('cors')
  const channelsMiddleware = require('./channel/route')

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cors({ origin: "http://localhost:3000" }));

  //utilise le middleware des channels lorsque la requête commence par /channels
  app.use("/channels", channelsMiddleware.routes)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
