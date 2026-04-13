import React from 'react'
import { Link } from 'react-router-dom'
export const HeroSection = () => {
  return (
      <section className="container px-6 py-20 mx-auto flex flex-col md:flex-row gap-12 items-center">
      
      {/* Left */}
      <div className="flex-1 flex flex-col gap-6">
        <span className="inline-flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1 rounded-full w-fit">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          AI-напојувано земјоделство
        </span>

        <h1 className="text-4xl font-bold leading-tight">
          Паметно земјоделство со <em className="text-green-600 not-italic">вештачка интелигенција</em>
        </h1>

        <p className="text-gray-600">
          Автоматски анализи на временски услови, паметни препораки за наводнување и ѓубрење — сè прилагодено за секоја фарма.
        </p>

        <div className="flex gap-3">
          <Link to="/register" className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700">
            Започни бесплатно →
          </Link>
          <Link to="/overview" className="border border-gray-300 px-5 py-2.5 rounded-lg hover:bg-gray-50">
            Погледај преглед
          </Link>
        </div>

        <div className="flex gap-8 pt-2">
          <div><div className="text-2xl font-bold">500+</div><div className="text-sm text-gray-500">Активни фарми</div></div>
          <div><div className="text-2xl font-bold">98%</div><div className="text-sm text-gray-500">Задоволство</div></div>
          <div><div className="text-2xl font-bold">3 API</div><div className="text-sm text-gray-500">Интеграции</div></div>
        </div>
      </div>

      {/* Right - Dashboard mock */}
      <div className="flex-1 bg-gray-900 rounded-xl p-4 text-white text-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2 text-gray-400 text-xs">Smart Farming Dashboard</span>
        </div>
        <div className="flex gap-3 mb-4">
          <div className="bg-gray-800 rounded-lg p-3 flex-1 text-center">
            <div className="text-xs text-gray-400">🌡️ Temp</div>
            <div className="text-xl font-bold">24°C</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 flex-1 text-center">
            <div className="text-xs text-gray-400">💧 Humid</div>
            <div className="text-xl font-bold">62%</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 flex-1 text-center">
            <div className="text-xs text-gray-400">🌧️ Rain</div>
            <div className="text-xl font-bold">2mm</div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 flex gap-3 items-start">
          <span className="text-xl">🤖</span>
          <p className="text-xs text-gray-300">
            <strong className="text-white">Препорака:</strong> Наводнете ги посевите утрото. Влажноста е под оптималното ниво.
          </p>
        </div>
      </div>

    </section>
  )
}
