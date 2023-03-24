import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './components/search/Searchs';

import {
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/searchPage",
    element: <SearchPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);