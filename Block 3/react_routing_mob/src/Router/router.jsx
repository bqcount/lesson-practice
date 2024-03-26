import { createBrowserRouter } from 'react-router-dom'

import Users from '../pages/Users/Users.jsx'
import Posts from '../pages/Posts/Posts.jsx'
import RootLayout from '../layouts/RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/posts/:userId',
        element: <Posts />,
      },
    ],
  },
])

export default router
