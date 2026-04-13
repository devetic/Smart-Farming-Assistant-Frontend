import React from 'react'
import { Link } from 'react-router-dom'
export const HeroSection = () => {
  return (
      <section className="bg-cover bg-center bg-no-repeat bg-[url('./assets/images/sf-01.jpg')] bg-dark bg-blend-multiply bg-fixed">
        <div className="container mx-auto flex flex-col gap-8 py-24 px-6 h-1/2 justify-center align-center items-center lg:py-56 lg:px-24">
          <span className="leading-6 text-sm text-green-900 bg-green-50 px-4 py-2 rounded-full w-fit">
            АИ Асистент за подобро земјоделство.
          </span>

          <h1 className="lg:text-4xl sm:text-lg sm:leading-6 font-bold leading-4 text-base text-center">
            Паметно земјоделство со <em className="text-white italic">вештачка интелигенција</em>
          </h1>

          <p className="lg:text-lg lg:leading-6 sm:text-sm text-center text-sm text-white ">
            Автоматски анализи на временски услови, паметни препораки за наводнување и ѓубрење прилагодливо за секоја фарма.
          </p>

          <div className="flex gap-4 text-sm">
            <Link to="/register" className="bg-green-600 text-white rounded px-4 py-2 text-sm leading-6">
              Регистрација
            </Link>
            <Link to="/overview" className="border border-white text-white rounded px-4 py-2 text-sm leading-6">
              Демо
            </Link>
          </div>
          <div className="flex gap-4 text-green-900 text-sm">
            <div><div className="text-2xl font-bold">500+</div><div className="text-sm text-white">Активни фарми</div></div>
            <div><div className="text-2xl font-bold">98%</div><div className="text-sm text-white">Задоволство</div></div>
            <div><div className="text-2xl font-bold">3 API</div><div className="text-sm text-white">Интеграции</div></div>
          </div>
        </div>
    </section>
  )
}
