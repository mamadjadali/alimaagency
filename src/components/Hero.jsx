import Aword from './Aword'
import BlurIn from "./Text/Blurin"
import NeubrutalismButton from './ui/NeubrutalismButton'

const Hero = () => {
  return (
    <>
    <Aword className='absolute max-w-xs sm:max-w-7xl inset-0 z-0 m-auto blur-lg'/>
    <div className="relative isolate px-6 sm:pt-6 pt-48 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <BlurIn
                word="Supercharge your Business development!"
                className="text-3xl font-bold text-white"
              />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href='#'>
                <NeubrutalismButton label='Get Started' size='lg' font='semibold'/>
              </a>
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default Hero