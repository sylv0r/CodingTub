import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Affichage from './components/usersManagement/Affichage/Affichage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Affichage />
  </React.StrictMode>
);