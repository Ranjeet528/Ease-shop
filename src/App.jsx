import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DynamicPage from './pages/DynamicPage'
import Cart from './pages/Cart'
import About from './pages/About'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/store/:slug?",
          element:<Store/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path: "*",
          element:<NotFound/>
        },
        {
          path:"/overview/:id",
          element:<DynamicPage/>
        },
        {
          path:"/Cart",
          element:<Cart/>
        },
        {
          path:"/About",
          element:<About/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routers} />
  )
}
