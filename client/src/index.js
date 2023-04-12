import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MenuChaine from './components/Chaine/MenuChaine/MenuChaine';
import Short from './components/routes/Short';
import UploadShort from './components/routes/UploadShort';

const router = createBrowserRouter([
  {
    path: "/MenuChaine",
    element: <MenuChaine />,
  },
  
  {
    path: "/Short",
    element: <Short />,
  },
  
  {
    path: "/UploadShort",
    element: <UploadShort />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
