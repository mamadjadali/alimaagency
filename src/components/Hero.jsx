import React from 'react'
import NeubrutalismButton from './ui/NeubrutalismButton'
import Aword from './Aword'


const Hero = () => {
  return (
    <>
    <Aword className='absolute max-w-xs sm:max-w-7xl inset-0 z-0 m-auto blur-xl'/>
    <div className="relative isolate px-6 sm:pt-14 pt-48 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0c1e1e_0%,#70fe90_50%,#0c1e1e_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium bg-[#F5F8FF] text-[#0c1e1e] backdrop-blur-3xl">
                Announcing our next round of funding.
            </span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0c1e1e] sm:text-6xl">
                Supercharge your Business development!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering Your Digital Presence with Innovative Design and Robust Solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href='#'>
                <NeubrutalismButton label='Get Started'/>
              </a>
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default Hero