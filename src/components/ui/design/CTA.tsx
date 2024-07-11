import React from 'react'
import NeubrutalismButton from '../NeubrutalismButton'

interface Props {
    title: string,
    sub: string,
};


const CTA: React.FC<Props> = ({ title ,sub}) => {
  return (
    // <!-- Hero -->
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 mb-32">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* <!-- Title --> */}
        <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-[#f3f5f4] text-4xl md:text-5xl lg:text-6xl">
            {title}
        </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-400">{sub}</p>
        </div>

        {/* <!-- Buttons --> */}
        <div className="mt-8 gap-3 flex justify-center">
        <a href="/contact">
            <NeubrutalismButton label='Get Started' size='lg' font='semibold'/>
        </a>
        </div>
        {/* <!-- End Buttons --> */}
    </div>
    </div>
// <!-- End Hero -->
  )
}

export default CTA