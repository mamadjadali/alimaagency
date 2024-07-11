import React from 'react'

const BentoWeb = () => {
  return (
    <div className='w-full h-auto m-5'>
        <div className='grid grid-cols-2 gap-10'>
            <div className='bg-gradient-to-tr p-6 from-[#70fe90] via-[#19191c] rounded-2xl border border-[#70fe90]'>
                <h2 className="text-4xl mb-5 font-normal text-[#70fe90]">the way you want</h2>
                <p className="text-[#e5eae6] mb-5">We support many language and frameworks making it flexible to your needs.</p>
                <img 
                    src='/code.svg' 
                    className='right-10'
                    style={{
                        maskImage: `linear-gradient(to left, transparent, black 20%)`,
                    }}
                />
            </div>
            <div className='bg-gradient-to-bl p-6 from-[#70fe90] via-[#19191c] rounded-2xl border border-[#70fe90]'>
                <h2 className="text-4xl mb-5 font-normal text-[#70fe90]">You know every step</h2>
                <p className="text-[#e5eae6] mb-5">We support many language and frameworks making it flexible to your needs.</p>
                <img 
                    src='/notfy.svg' 
                    className='right-10'
                    style={{
                        maskImage: `linear-gradient(to left, transparent, black 20%)`,
                    }}
                />
            </div>
            
        </div>
    </div>
  )
}

export default BentoWeb