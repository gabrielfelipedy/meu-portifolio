import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import facebook from "/public/assets/icons/facebook.svg"
import github from "/public/assets/icons/github.svg"
import instagram from "/public/assets/icons/instagram.svg"
import linkedin from "/public/assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <footer className='global-padding-x global-padding-y mt-36'>
      <div className='max-container flex justify-between'>

        <div className='flex flex-col justify-between'>
          <p className='font-section text-gray-600'>Gabriel Felipe Assunção de Souza</p>

          <div className='flex gap-x-8'>
          
              <span className='relative w-[25px] h-[25px]'>
                <Link href={"http://facebook.com/gabrielfelipedy"} target='_blank'>
                  <Image 
                    src={facebook}
                    alt="facebook"
                    layout='fill'
                    className='object-cover object-center opacity-50'
                  />
                </Link>
              </span>
            
            <span className='relative w-[25px] h-[25px]'>
              <Link href={"http://instagram.com/gabrielfelipedy"} target='_blank'>
                <Image 
                  src={instagram}
                  alt="instagram"
                  layout='fill'
                  className='object-cover object-center opacity-50'
                />
              </Link>
            </span>
            <span className='relative w-[25px] h-[25px]'>
            <Link href={"http://github.com/gabrielfelipedy"} target='_blank'>
                <Image 
                  src={github}
                  alt="github"
                  layout='fill'
                  className='object-cover object-center opacity-50'
                />
              </Link>
            </span>
            <span className='relative w-[25px] h-[25px]'>
              <Link href={"http://linkedin.com/in/gabrielfelipedy"} target='_blank'>
                <Image 
                  src={linkedin}
                  alt="linkedin"
                  layout='fill'
                  className='object-cover object-center opacity-50'
                />
              </Link>
            </span>
          </div>
          
          
        </div>

        <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
          <p>Topic</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer