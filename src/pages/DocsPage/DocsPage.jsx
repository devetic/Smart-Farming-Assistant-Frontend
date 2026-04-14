import React from 'react'
import { Link } from 'react-router-dom'

export const DocsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-white p-6 sticky top-0 h-screen">
        <h2 className="text-lg font-semibold mb-6">📚 Документација</h2>

        <nav className="flex flex-col gap-2 text-sm">
          <a href="#concepts" className="text-green-600 font-medium">
            Основни концепти
          </a>
          <a href="#profile" className="text-gray-600 hover:text-black transition">
            Креирање профил
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-6 py-16 max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-green-700 text-sm font-medium">
            Документација
          </span>
          <h1 className="text-4xl font-semibold tracking-tight mt-2">
            Smart Farming Assistant
          </h1>
          <p className="text-gray-600 mt-3 leading-7">
            Комплетен водич за користење на системот и неговите функции.
          </p>
        </div>

        {/* SECTION 1 */}
        <section id="concepts" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Основни концепти
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Smart Farming Assistant е веб апликација која користи вештачка
            интелигенција за анализа на податоци во реално време и дава
            персонализирани агрономски препораки.
          </p>

          {/* TABLE */}
          <div className="overflow-hidden border border-gray-200 rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="text-left px-4 py-3">Концепт</th>
                  <th className="text-left px-4 py-3">Објаснување</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Фарма</td>
                  <td className="px-4 py-3 text-gray-600">
                    Локација дефинирана со GPS или град
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Култура</td>
                  <td className="px-4 py-3 text-gray-600">
                    Земјоделски производ (пченица, пченка...)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Препорака</td>
                  <td className="px-4 py-3 text-gray-600">
                    AI генериран совет
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Dashboard</td>
                  <td className="px-4 py-3 text-gray-600">
                    Персонализиран преглед
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CALLOUT */}
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="font-medium text-green-800">💡 Совет</p>
            <p className="text-green-700 text-sm mt-1">
              Секогаш внесувај точни податоци за фарма за подобри препораки.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="profile" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Креирање на профил
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            За креирање на нов профил, оди на{" "}
            <Link
              to="/register"
              className="text-green-600 font-medium hover:underline"
            >
              регистрација
            </Link>
            .
          </p>

          <ul className="list-disc pl-6 text-gray-600 text-sm leading-7 space-y-1">
            <li>Внеси email адреса</li>
            <li>Име и презиме</li>
            <li>Телефонски број</li>
          </ul>

          <p className="text-gray-600 text-sm leading-7 mt-4">
            По регистрација, ќе добиеш email за верификација и поставување лозинка.
          </p>

          {/* WARNING BOX */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="font-medium text-yellow-800">⚠️ Важно</p>
            <p className="text-yellow-700 text-sm mt-1">
              Провери ја email адресата за активација на профилот.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}