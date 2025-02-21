import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from "./pages/ContactPage";
import ResumePage from './pages/ResumePage';
import NotFoundPage from "./pages/404Page";
import WeatherPage from "./pages/WeatherPage";

import './index.css';
import FrogFight from "./pages/FrogFight";
import Notes from "./pages/Notes";
import LiveChat from "./pages/LiveChat";
import ChatRoom from "./pages/ChatRoom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/projects',
        element: <ProjectPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/resume',
        element: <ResumePage />
    },
    {
        path: '/weather',
        element: <WeatherPage />
    },
    {
        path: '/frogfight',
        element: <FrogFight />
    },
    {
        path:'/notes',
        element: <Notes />
    },
    {
    path:'/chat',
    element:<LiveChat />
    },
    {
        path:'/room/:room',
        element:<ChatRoom />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);