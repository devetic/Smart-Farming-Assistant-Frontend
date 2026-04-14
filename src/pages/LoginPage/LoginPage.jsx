import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="container mx-auto px-6">
      <section className="py-24 flex flex-row gap-2 flex-wrap justify-center items-start ">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm shadow-sm self-start">
          <p className="font-medium text-green-800 mb-1">Демо пристап</p>
          <p className="text-green-700">demo@aisfa.mk</p>
          <p className="text-green-700">demoAiF@2026$</p>
        </div>
        <div className="w-full max-w-md bg-white border border-gray-200 rounded p-8 shadow-sm">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-3xl mb-2">🌱</div>
            <h1 className="text-2xl font-bold text-gray-900">Најава</h1>
            <p className="text-sm text-gray-500 mt-1">Добредојдовте назад</p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Електронска адреса</label>
              <input
                type="email"
                placeholder="ime@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Лозинка</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                Ресетирај лозинка
              </Link>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Влези
            </button>

          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Немаш профил?{' '}
            <Link to="/register" className="text-green-600 font-medium hover:underline">
              Креирај нов профил
            </Link>
          </p>
        </div>
        
      </section>
    </div>
  )
}