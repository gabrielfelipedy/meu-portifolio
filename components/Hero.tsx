import React from 'react'

const Hero = () => {
  return (
    <div className='global-padding-x global-padding-y'>
      <div className='max-container'>
        <h1 className='font-title mb-10'>Meu portifólio</h1>

        <p className='text-slate-500 text-2xl md:text-3xl lg:w-1/2'>Aqui você encontrará projetos que já fiz para diversos públicos e clientes</p>

        <div className='grid grid-cols-2 mt-10 gap-10'>
          <div>
            <p>Gabrielle Franzotti</p>
            <p>Descrição</p>
          </div>

          <div>
            <p>Gabrielle Franzotti</p>
            <p>Descrição</p>
          </div>

          <div>
            <p>Gabrielle Franzotti</p>
            <p>Descrição</p>
          </div>

          <div>
            <p>Gabrielle Franzotti</p>
            <p>Descrição</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero