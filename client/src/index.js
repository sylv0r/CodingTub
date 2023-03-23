import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Playlists from './components/Playlists';
import History from './components/History';
import Abonnements from './components/Abonnements';

import {
  createBrowserRouter,
  RouterProvider
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
    path: "/subscriptions",
    element: <Abonnements />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);