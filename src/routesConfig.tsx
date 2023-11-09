import App from './App';
import { HomePage } from './09-useContext/HomePage';
import { LoginPage } from './09-useContext/LoginPage';
import { AboutPage } from './09-useContext/AboutPage';
import { Navigate } from 'react-router-dom';

export const routesConfig = [
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
];