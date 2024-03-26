import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import MainLayout from '../layouts/MainLayout'
import SecondLayout from '../layouts/SecondLayout'
// import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <NotFound />,
    errorElement: <h1>Buenas tardes not found</h1>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about/:id',
        element: <About />,
      },
    ],
  },
  {
    path: '/aside',
    element: <SecondLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])
