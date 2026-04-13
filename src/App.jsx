import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Base from './Layout/Base/Base'
import { HomePage } from './pages/HomePage/HomePage'
import { DocsPage } from './pages/DocsPage/DocsPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { PricingPage } from './pages/PricingPage/PricingPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { PartnershipPage } from './pages/PartnershipPage/PartnershipPage'

const router=createBrowserRouter([
    {
      path:"/",
      element:<Base/>,
      children:[
        {
          path:"/",
          index:true,
          element:<HomePage/>
        },
        {
          path:"/docs",
          index:true,
          element:<DocsPage/>
        },
        {
          path:"/about",
          index:true,
          element:<AboutPage/>
        },
        {
          path:"/pricing",
          index:true,
          element:<PricingPage/>
        },
        {
          path:"/contact",
          index:true,
          element:<ContactPage/>
        },{
          path:"/partnership",
          index:true,
          element:<PartnershipPage/>
        },
        {
          path:"/login",
          index:true,
          element:<LoginPage/>
        }
      ]
    }
  ])

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
