import Live from './components/affichageLive/affichageLive';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './components/Home/Home';
import Playlists from './components/Playlist/Playlists';
import History from './components/History/History';
import Abonnements from './components/Abonnements/Abonnements';
import CreateChannel from './components/createChannel/CreateChannel';
import UploadForm from './components/chaine_upload/UploadForm';
import Video from './components/show_video/ShowVideo.js';
import MenuChaine from './components/Chaine/MenuChaine/MenuChaine';
import Short from './components/routes/Short';
import UploadShort from './components/routes/UploadShort';
import Search from './components/search/Searchs';
import Connexion from './components/usersManagement/Connexion/Connexion';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  /*{
    path: "/playlist",
    element: <Playlists />
  },
  {
    path: "/history",
    element: <History />
  },*/
  {
    path: "/connexion",
    element: <Connexion />
  },
  {
    path: "/subscriptions",
    element: <Abonnements />
  },
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
  {
    path: "/channel/:name",
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
  },
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
