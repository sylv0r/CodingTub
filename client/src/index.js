import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './App.css';
import App from './App'; */

import './usersManagement/Inscription.css';
import Inscription from './usersManagement/Inscription';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inscription />
  </React.StrictMode>
);