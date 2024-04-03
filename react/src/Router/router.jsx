import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import All from "../Pages/All/All";
import One from "../Pages/One/One";
 

export const router= createBrowserRouter([

    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Landing/>,
                // loader: ()=>{
                //     if(!localStorage.getItem('token')){
                //         return null
                //     }else{
                //         // return redirect('/home')
                //     }

                // }
            },{
                path:'signup',
                element:<SignUp/>
            },{
                path:'login',
                element:<Login/>
            },{
                path:'home',
                element:<Home/>
            }
            ,{
                path:'all',
                element:<All/>
            }
            ,{
                path:'one',
                element:<One/>
            }
        ]

    },
      

])