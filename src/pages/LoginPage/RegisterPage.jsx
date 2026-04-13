import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', fullName: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-6">
        <section className="py-24 flex flex-col items-center">
          <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Проверете ја вашата пошта</h2>
            <p className="text-sm text-gray-500 mb-4">
              Пратена е верификација на <strong>{form.email}</strong>. Кликнете на линкот за да ја активирате сметката и поставите лозинка.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
              💡 Корисничкото име ќе ви се изгенерира автоматски. Може да го смените во рок од <strong>7 дена</strong>.
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Не сте добиле мејл?{' '}
              <button className="text-green-600 hover:underline" onClick={() => setSubmitted(false)}>
                Обидете се повторно
              </button>
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6">
      <section className="py-24 flex flex-col items-center">

        <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-3xl mb-2">🌱</div>
            <h1 className="text-2xl font-bold text-gray-900">Креирај профил</h1>
            <p className="text-sm text-gray-500 mt-1">Бесплатна регистрација</p>
          </div>

          {/* Info banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-700 mb-6">
            ℹ️ По регистрацијата, на вашата адреса ќе пристигне верификациски мејл за активирање и поставување лозинка.
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Целосно име и презиме</label>
              <input
                type="text"
                name="fullName"
                placeholder="Марко Марковски"
                value={form.fullName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Електронска адреса</label>
              <input
                type="email"
                name="email"
                placeholder="ime@example.com"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Телефонски број</label>
              <input
                type="tel"
                name="phone"
                placeholder="+389 70 000 000"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Auto username note */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-500">
              🔖 Корисничкото име ќе се генерира автоматски. Може да го смените во рок од <strong>7 дена</strong>.
            </div>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors mt-1"
            >
              Регистрирај се
            </button>

          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Веќе имаш профил?{' '}
            <Link to="/login" className="text-green-600 font-medium hover:underline">
              Влези
            </Link>
          </p>

        </div>
      </section>
    </div>
  )
}