import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">🌱 Smart Farming</div>
          <p className="text-sm text-gray-400">Вашата АИ платформа за паметно земјоделство во Македонија и регионот.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Производ</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><Link to="/overview" className="hover:text-white">Преглед</Link></li>
            <li><Link to="/about" className="hover:text-white">За апликацијата</Link></li>
            <li><Link to="/docs" className="hover:text-white">Документација</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Компанија</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><Link to="/pricing" className="hover:text-white">Ценовник</Link></li>
            <li><Link to="/partnership" className="hover:text-white">Партнерство</Link></li>
            <li><Link to="/contact" className="hover:text-white">Контакт</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Правни</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><Link to="#" className="hover:text-white">Услови</Link></li>
            <li><Link to="#" className="hover:text-white">Приватност</Link></li>
            <li><Link to="#" className="hover:text-white">Колачиња</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-800 flex justify-between text-sm text-gray-500 sm: flex flex-col justify-center align-center text-center">
        <span>© 2026 Smart Farming Assistant.<span className='sm: block'>Сите права задржани.</span></span>
        <span>Made in 🇲🇰 Macedonia</span>
      </div>
    </footer>
  )
}
