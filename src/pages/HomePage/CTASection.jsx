import React from 'react'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-20 text-center bg-gray-50">
      <div className="container mx-auto flex flex-col gap-8">
        <h2 className="text-3xl text-green-900 font-bold leading-5 ">Стани модерен фармер?</h2>
        <p className="text-lg text-black leading-6">Биди и ти еден од модерни фармери кои веќе користат AI за паметно земјоделство.</p>
        <div className="flex justify-center gap-2">
          <Link to="/register" className="bg-green-600 text-white leading-6 px-4 py-2 rounded-md hover:bg-green-700 sm: text-sm">
            Регистрација
          </Link>
          <Link to="/pricing" className="border border-green-900 text-green-900 leading-6 px-4 py-2 rounded-md hover:bg-green-900 hover:text-white sm:text-sm">
            Ценовник
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection