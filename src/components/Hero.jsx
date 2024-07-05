import Aword from './Aword'
import NeubrutalismButton from './ui/NeubrutalismButton'

const Hero = () => {
  return (
    <>
    <Aword className='absolute max-w-xs sm:max-w-7xl inset-0 z-0 m-auto blur-lg'/>
    <div className="relative isolate px-6 sm:pt-6 pt-48 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#f3f5f4] sm:text-6xl">
                Supercharge your Business development!
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-[#42ba5e]">
            Empowering Your Digital Presence with Innovative Design and Robust Solutions.
            </p> */}
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