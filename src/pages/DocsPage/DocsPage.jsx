import React from 'react'

export const DocsPage = () => {
  return (
    <div className='container mx-auto px-6'>
      <section className='py-16 flex flex-col gap-2 w-1/2'>
        <span className='text-green-900 text-sm leading-8'>Документација</span>
        <hr />
        <h2 className='text-2xl fw-bold text-black leading-6'>Основни концепти</h2>
        <p className='text-sm text-gray-500 leading-6'>Smart Farming Assistant е веб апликација која користи вештачка интелигенција за реални временски податоци, помага во донесување на подобри агрономски препораки прилагодени за секоја фарма и земјоделска култура.</p>
        <table class="border-collapse border border-green-900 text-sm">
          <thead>
            <tr>
              <th class="border border-green-900 text-start px-2 py-2">Концепт</th>
              <th class="border border-green-900 text-start px-2 py-2">Објаснување</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-green-900 px-2 py-2">Фарма</td>
              <td class="border border-green-900 px-2 py-2">Локација со GPS или град</td>
            </tr>
            <tr>
              <td class="border border-green-900 px-2 py-2">Култура</td>
              <td class="border border-green-900 px-2 py-2">Земјоделски производ</td>
            </tr>
            <tr>
              <td class="border border-green-900 px-2 py-2">Препорака</td>
              <td class="border border-green-900 px-2 py-2">АИ-Генериран совет</td>
            </tr>
            <tr>
              <td class="border border-green-900 px-2 py-2">Dashboard</td>
              <td class="border border-green-900 px-2 py-2">Персонализиран преглед</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h2 className='text-2xl fw-bold text-black leading-6'>Креирање на профил</h2>
        <p className='text-sm text-gray-500 leading-6'>За креирање на нов профил пристапете до страница за <a href="/register" className='text-green-900'>регистрација</a>. При регисрација ќе треба да внесете ваша лична електронска адреса, целосно име и презиме, телефонски број. Откако ќе се најавите, проверете ја вашата електронска адреса на која би требало да ви стигне верификација за активирање и поставување на лозинка. Корисничко име автоматски ќе ви се изгенерира при што исто ќе може да си го смените во рок од 7 дена.</p>
      </section>
    </div>
  )
}
