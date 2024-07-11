
const BentoWeb = () => {
  return (
    <div className='h-auto m-5 mt-32'>
        <div className='grid md:grid-cols-2 gap-10'>
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
        <div className='grid md:grid-cols-3 gap-10 mt-[2.5rem]'>
            <div className='bg-transparent p-6 rounded-2xl border border-[#70fe90]'>
                <h2 className="text-4xl mb-5 font-normal text-[#70fe90]">We Scale for you</h2>
                <p className="text-[#e5eae6] mb-5">We support many language and frameworks making it flexible to your needs.</p>
                <img 
                    src='/scale.png' 
                    className='right-10'
                    style={{
                        maskImage: `linear-gradient(to left, transparent, black 20%)`,
                    }}
                />
            </div>
            <div className='p-6 rounded-2xl border border-[#70fe90]'>
                <h2 className="text-4xl mb-5 font-normal text-[#70fe90]">Integrigate with every thing</h2>
                <p className="text-[#e5eae6] mb-5">We support many language and frameworks making it flexible to your needs.</p>
                <img 
                    src='/integ.svg' 
                    className='mx-auto'
                />
            </div>
            <div className='p-6 rounded-2xl border border-[#70fe90] items-center justify-center'>
                <h2 className="text-4xl mb-5 font-normal text-[#70fe90]">You know every step</h2>
                <p className="text-[#e5eae6] mb-5">We support many language and frameworks making it flexible to your needs.</p>
                <img 
                    src='/cms.svg'
                    className='mx-auto'
                />
            </div>
        </div>
    </div>
  )
}

export default BentoWeb