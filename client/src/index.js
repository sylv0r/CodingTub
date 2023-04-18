import AccueilLive from './components/live/accueilLive/accueilLive';
import CreerLive from './components/live/creerLive/creerLive';
import AffichageLive from './components/live/affichageLive/affichageLive';
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
import Profile from './components/Profile/Profile';
import UserProfile from './components/UserProfile/UserProfile';
import Connexion from './components/connexion/Connexion';
import Inscription from './components/Inscription/InscriptionForm.js';
import SideBar from './components/Home/SideBar/SideBar';
import ModifyProfile from './components/modifyProfile/ModifyProfile';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/playlist",
    element: <Playlists />
  },
  {
    path: "/history",
    element: <History />
  },
  {
    path: "/connexion",
    element: <Connexion />
  },
   {
    path: "/Inscription",
    element: <Inscription />
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
    path: "/modifyProfile",
    element: <ModifyProfile />
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
    path: "/accueilLive",
    element: <AccueilLive />,
  },
  {
    path: "/creerLive",
    element: <CreerLive />,
  },
  {
    path: "/affichageLive",
    element: <AffichageLive />,
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  {
    path: "/UserProfile",
    element: <UserProfile />
  }
]);

let url = window.location.href
let connRegiPage = !url.includes('/connexion') && !url.includes('/Inscription')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      connRegiPage ? 
      <>
        <nav className='side'><SideBar /></nav>
        <section id="main-search">
          <BrowserRouter>
          <Search />
          </BrowserRouter>
          <main id="main">
            <RouterProvider router={router} />
          </main>
        </section>
      </>
      :
      <RouterProvider router={router} />
    }
    
  </React.StrictMode>
);
