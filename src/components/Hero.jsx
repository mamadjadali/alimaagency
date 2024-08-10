import { AnimatedModalDemo } from './ui/Modal';

const Hero = ({title}) => {
  return (
    <>
    {/* <Aword className='absolute max-w-xs sm:max-w-7xl inset-0 z-0 m-auto blur-md'/> */}
    <img
    src='/Alima.svg'
    width={700}
    height={700}
    className='absolute sm:max-w-7xl inset-0 z-0 m-auto'
    />
    <div className="relative isolate px-6 pt-28 md:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
          <div className="text-center">
            <h1
                className="text-[3rem] md:text-[4rem] font-bold text-white"
            >{title}</h1>
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