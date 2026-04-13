import React from 'react'

const features = [
  { icon: '🌦️', title: 'Временски податоци во реално време', desc: 'Автоматско преземање преку Open-Meteo API за точна локација.' },
  { icon: '🤖', title: 'AI препораки (Mistral-7B)', desc: 'Конкретни агрономски совети за наводнување, ѓубрење и болести.' },
  { icon: '🗺️', title: 'Повеќе фарми', desc: 'Управувај со повеќе фарми и култури — само внеси локација.' },
  { icon: '📊', title: 'Персонализиран Dashboard', desc: 'Графички трендови на температура, влажност и препораки.' },
  { icon: '📁', title: 'CSV Извоз', desc: 'Извези ги сите препораки за понатамошна анализа.' },
  { icon: '🔔', title: 'Предупредувања за ризици', desc: 'Автоматски известувања за суша, болести или екстремно време.' },
]

function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-green-600 font-medium">Функционалности</span>
          <h2 className="text-3xl font-bold mt-1">Сè за паметна фарма</h2>
          <p className="text-gray-500 mt-2">Реални временски податоци + AI анализа + персонализиран Dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-md p-6 border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection