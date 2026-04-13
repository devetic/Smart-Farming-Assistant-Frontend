import React from 'react'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3">Готови да започнете?</h2>
        <p className="text-gray-500 mb-8">Приклучи се на 500+ фармери кои веќе користат AI за паметно земјоделство.</p>
        <div className="flex justify-center gap-4">
          <Link to="/register" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Започни бесплатно →
          </Link>
          <Link to="/pricing" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
            Погледај ценовник
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection