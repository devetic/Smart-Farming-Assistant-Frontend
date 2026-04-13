import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

function Base() {
  return (
    <>
        <Navbar/>
        <main className='px-0 py-0'>
            <Outlet></Outlet>
        </main>
        <Footer/>
    </>
  )
}

export default Base