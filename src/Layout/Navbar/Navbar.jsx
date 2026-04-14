  import React, { useState } from 'react'
  import { NavLink } from 'react-router-dom'

  function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const cls = ({ isActive }) =>
      `hover:text-green-600 ${isActive ? 'text-green-700 text-base pt-3 pb-2' : 'text-gray-700 text-base pt-3 pb-2'}`

    return (
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="font-bold text-green-700 text-base pt-3 pb-2">🌱 Smart Farming</NavLink>

          {/* Nav links - center */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={cls}>Почетна</NavLink>
            <NavLink to="/docs" className={cls}>Документација</NavLink>
            {/* <NavLink to="/pricing" className={cls}>Ценовник</NavLink>
            <NavLink to="/contact" className={cls}>Контакт</NavLink> */}
          </div>

          {/* Login - right */}
          <NavLink to="/login" className="hidden bg-green-700 text-white rounded px-4 pt-3 pb-2 text-base sm:block">
              Кон профил
          </NavLink>

          {/* Hamburger */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-2 px-6 py-4">
            <NavLink to="/" className={cls} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/docs" className={cls} onClick={() => setIsOpen(false)}>Docs</NavLink>
            <hr/>
            {/* <NavLink to="/pricing" className={cls} onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <NavLink to="/contact" className={cls} onClick={() => setIsOpen(false)}>Contact</NavLink> */}
            <NavLink to="/login" className="bg-green-600 text-white px-4 py-1.5 rounded-md text-center" onClick={() => setIsOpen(false)}>Кон профил</NavLink>
          </div>
        )}
      </nav>
    )
  }

  export default Navbar