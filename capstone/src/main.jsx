import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Mainpage } from './Mainpage.jsx';
import App from './App';
import { Financedash } from './Financedash';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/mainpage",
    element: <Mainpage></Mainpage>,
    children: [
      {
        path: 'finance',
        element: <Financedash></Financedash>,
        
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)
