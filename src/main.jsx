import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Component/Root.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import Home from './Component/Home.jsx';
import Medicine from './Component/Medicine.jsx';
import Consultation from './Component/Consultation.jsx';
import Sos from './Component/Sos.jsx';
import Profile from './Component/Profile.jsx';
import Help from './Component/Help.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element:<Login></Login>
  },
  {
    path: "/register",
    element:<Register></Register>
  },
  {
    path: "/medicine",
    element:<Medicine></Medicine>
  },
  {
    path: "/consultation",
    element:<Consultation></Consultation>
  },
  {
    path: "/sos",	
    element:<Sos></Sos>
  },
  {
    path: "/profile",	
    element:<Profile></Profile>
  },
  {
    path: "/help",	
    element:<Help></Help>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
