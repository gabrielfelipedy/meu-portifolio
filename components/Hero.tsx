import React from 'react'
import Image from 'next/image'

import model from '/public/assets/img/model.jpg'
import gaby from '/public/assets/img/gabysite.png'
import amparo from '/public/assets/img/instituto-amparo.png'
import camila from '/public/assets/img/camila-neiva.png'
import calculadora_ebtt from '/public/assets/img/calculadora-ebtt.png'

const Hero = () => {
  return (
    <div className='global-padding-x global-padding-y'>
      <div className='max-container'>
        <h1 className='font-title mb-10'>Meu portifólio</h1>

        <p className='text-slate-500 text-2xl md:text-3xl lg:w-1/2'>Aqui você encontrará projetos que já fiz para diversos públicos e clientes</p>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-40 gap-10'>
          <div className='rounded-lg p-4'>
            <div className='relative w-full h-[376px]'>
              <Image 
                src={gaby}
                alt="instagram"
                layout='fill'
                className='object-contain object-center rounded-lg'
              />
            </div>
            <p className="font-section mt-10">Gabrielle Franzotti Site</p>
            <p className='font-small text-gray-600'>Landing page</p>
          </div>

          <div className='rounded-lg p-4'>
            <div className='relative w-full h-[376px]'>
              <Image 
                src={calculadora_ebtt}
                alt="instagram"
                layout='fill'
                className='object-contain object-center rounded-lg'
              />
            </div>

            <p className="font-section mt-10">Calculadora EBTT</p>
            <p className='font-small text-gray-600'>Sistema web</p>
          </div>

          <div className='rounded-lg p-4'>
            <div className='relative w-full h-[376px]'>
              <Image 
                src={amparo}
                alt="instagram"
                layout='fill'
                className='object-contain object-center rounded-lg'
              />
            </div>

            <p className="font-section mt-10">Instituto Amparo</p>
            <p className='font-small text-gray-600'>Landing page</p>
          </div>

          <div className='rounded-lg p-4'>
            <div className='relative w-full h-[376px]'>
              <Image 
                src={camila}
                alt="instagram"
                layout='fill'
                className='object-contain object-center rounded-lg'
              />
            </div>

            <p  className="font-section mt-10">Dra. Camila Neiva</p>
            <p className='font-small text-gray-600'>Landing page</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero