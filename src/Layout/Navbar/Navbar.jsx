import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const cls = ({ isActive }) =>
    `hover:text-green-600 ${isActive ? 'text-green-600' : 'text-gray-700'}`

  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="font-bold text-green-700">🌱 Smart Farming</NavLink>

        {/* Nav links - center */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={cls}>Home</NavLink>
          <NavLink to="/docs" className={cls}>Docs</NavLink>
          <NavLink to="/pricing" className={cls}>Pricing</NavLink>
          <NavLink to="/contact" className={cls}>Contact</NavLink>
        </div>

        {/* Login - right */}
        <NavLink to="/login" className="hidden md:block py-2 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
          Login
        </NavLink>

        {/* Hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 pt-4 text-sm">
          <NavLink to="/" className={cls} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/docs" className={cls} onClick={() => setIsOpen(false)}>Docs</NavLink>
          <NavLink to="/pricing" className={cls} onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <NavLink to="/contact" className={cls} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/login" className="bg-green-600 text-white px-4 py-1.5 rounded-md text-center" onClick={() => setIsOpen(false)}>Login</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar