import About from '../pages/About'
import  Home from './../pages/Home'
import  Login from './../pages/Login'
import { createBrowserRouter, redirect } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
     {
        path: '/about',
        element: <About />,
        loader: () => {
             if (!localStorage.getItem("token")) {
                return redirect("/login")  //If the user isn't logged in, we redirect to the login page.
            } else {
                return null;
            }
        }
    }
])