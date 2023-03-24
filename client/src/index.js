import Live from './components/affichageLive/affichageLive';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


/*import CreateChannel from './components/CreateChannel';
import UploadForm from './components/chaine_upload/UploadForm';
import Video from './components/show_video/ShowVideo.js';
import MenuChaine from './components/Chaine/MenuChaine/MenuChaine';
import Short from './components/routes/Short';
import UploadShort from './components/routes/UploadShort';
import Search from './components/search/Searchs';*/

const router = createBrowserRouter([
  /*{
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
  },
  {
    path: "/search",
    element: <Search />,
  },*/
  {
    path: "/live",
    element: <Live />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);