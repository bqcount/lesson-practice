import './App.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
// import { Link } from "react-router-dom";


function App() {

  return (
    <>
      {/* <a href="/">Home</a>
      <br/>
      <a href="/about">About</a>
      <br/>
      <a href="/aside">Aside</a>
      <br/>
      <a href="/aside/about">Aside About</a> */}
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
