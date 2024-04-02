import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <LoginForm/>
    }
])