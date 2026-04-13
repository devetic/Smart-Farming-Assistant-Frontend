import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const cls = ({ isActive }) =>
    `hover:text-green-600 ${isActive ? 'text-green-700' : 'text-gray-700'}`

  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="font-bold text-green-700">🌱 Smart Farming</NavLink>

        {/* Nav links - center */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={cls}>Почетна</NavLink>
          <NavLink to="/docs" className={cls}>Документација</NavLink>
          {/* <NavLink to="/pricing" className={cls}>Ценовник</NavLink>
          <NavLink to="/contact" className={cls}>Контакт</NavLink> */}
        </div>

        {/* Login - right */}
        <NavLink to="/login" className="bg-green-700 text-white rounded px-4 py-2 text-sm leading-6">
            Кон профил
        </NavLink>

        {/* Hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-6 py-4  text-sm">
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