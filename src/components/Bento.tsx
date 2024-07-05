import { Advertising, Analysis, Branding, Content, Marketing, WebDev } from '../assets/BentoIcons'


const FeaturesGrid = () => {
  return (
    <div>
      <div className="mt-8 grid w-full grid-cols-1 p-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-[#dedbcc] backdrop-blur-2xl rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-[#f3f5f4] p-2 text-center text-[#0c1e1e] ">
                <WebDev/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
                Web Development
              </div>
              <div className="font-regular max-w-sm text-xs text-[#426859]">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-[#dedbcc] backdrop-blur-2xl rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-[#f3f5f4] p-2 text-center text-[#0c1e1e] ">
                <Marketing />
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
                Marketing
              </div>
              <div className="font-regular max-w-sm text-xs text-[#426859]">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-[#dedbcc] backdrop-blur-2xl rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-[#f3f5f4] p-2 text-center text-[#0c1e1e] ">
                <Content/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Content
              </div>
              <div className="font-regular max-w-sm text-xs text-[#426859]">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 h-96 md:h-auto sm:col-span-1 py-8 row-span-2 width-fit bg-[#dedbcc] backdrop-blur-2xl p-4 text-left rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-[#f3f5f4] p-2 text-center text-[#0c1e1e] ">
                <Analysis/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Analysis & Report
              </div>
              <div className="font-regular max-w-sm text-xs text-[#426859]">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
              <div className='mt-6  rounded-md bg-[#0c1e1e] w-full h-48 md:h-[60%]'>
              <img
                src='/chart.svg'
                className='object-contain h-full'
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2 md:h-auto flex py-8 width-fit bg-[#dedbcc] backdrop-blur-2xl p-4 text-left rounded-lg">
              <div>
              <div className="mb-2 w-fit rounded-lg bg-[#f3f5f4] p-2 text-center text-[#0c1e1e] ">
                <Branding/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Branding
              </div>
              <div className="font-regular max-w-sm text-xs text-[#426859]">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
              </div>
              <div className='rounded-md bg-[#0c1e1e] w-72 lg:w-72 h-48 lg:h-auto overflow-hidden'>
                <img
                src='/hi.svg'
                className='object-fill h-full'
                />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-[#dedbcc] backdrop-blur-2xl rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-[#f3f5f4] p-2 text-center text-[#0c1e1e] ">
                <Advertising/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Advertising
              </div>
              <div className="font-regular max-w-sm text-xs text-[#426859]">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
      </div>
    </div>
  )
}

const FeaturesWithHeading = () => {
  return (
    <div className="my-20 pt-32 flex w-full flex-col items-center justify-center">
      <h1 className="mb-3 max-w-3xl text-center text-2xl font-bold tracking-tighter text-[#f3f5f4] md:text-5xl">
        What we Do ??
      </h1>
      <p className="max-w-sm text-center text-sm text-[#dedbcc]">
        SyntaxUI is a free to use, customizable, and highly customizable UI
        component library.
      </p>
      <FeaturesGrid />
    </div>
  )
}

export default FeaturesWithHeading