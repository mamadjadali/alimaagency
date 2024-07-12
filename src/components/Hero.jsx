import Aword from './Aword'
import { AnimatedModalDemo } from './ui/Modal'

const Hero = () => {
  return (
    <>
    <Aword className='absolute max-w-xs sm:max-w-7xl inset-0 z-0 m-auto blur-md'/>
    <div className="relative isolate px-6 pt-32 md:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
                className="text-6xl font-bold text-white"
            >Supercharge your Business development!</h1>
            <AnimatedModalDemo />
            <div className="mt-10 flex items-center justify-center gap-x-6">
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default Hero