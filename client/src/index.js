import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateChannel from './components/CreateChannel';
import UploadForm from './components/chaine_upload/UploadForm';
import Video from './components/show_video/ShowVideo.js';

const router = createBrowserRouter([
  {
    path: "/createChannel",
    element: <CreateChannel />,
  },
  {
    path: "/uploadVideo",
    element: <UploadForm />
  },
  {
    path: "/video",
    element: <Video />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
