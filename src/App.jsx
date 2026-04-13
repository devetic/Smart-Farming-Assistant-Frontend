import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Base from './Layout/Base/Base'
import { HomePage } from './pages/HomePage/HomePage'

const router=createBrowserRouter([
    {
      path:"/",
      element:<Base/>,
      children:[
        {
          index:true,
          element:<HomePage/>
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
