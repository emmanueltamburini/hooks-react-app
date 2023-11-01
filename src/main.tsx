import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { LoginPage } from './09-useContext/LoginPage.tsx';
import { AboutPage } from './09-useContext/AboutPage.tsx';
import { HomePage } from './09-useContext/HomePage.tsx';
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "login",
            element: <LoginPage />,
        },
        {
            path: "about",
            element: <AboutPage />,
        },
        {
            path: "/*",
            element: <Navigate to="/about"/>,  
        },
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
