import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './App.css';
import App from './App'; */

import Affichage from './components/usersManagement/Affichage/Affichage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Affichage />
  </React.StrictMode>
);