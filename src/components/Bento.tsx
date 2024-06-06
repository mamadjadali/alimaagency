import { Advertising, Analysis, Branding, Content, Marketing, WebDev } from '../assets/BentoIcons'


const FeaturesGrid = () => {
  return (
    <div>
      <div className="mt-8 grid w-full grid-cols-1 p-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-white rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-gray-200 p-2 text-center text-[#0c1e1e] ">
                <WebDev/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
                Web Development
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-400">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-white rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-gray-200 p-2 text-center text-[#0c1e1e] ">
                <Marketing />
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
                Marketing
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-400">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-white rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-gray-200 p-2 text-center text-[#0c1e1e] ">
                <Content/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Content
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-400">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 row-span-2 width-fit bg-white p-4 text-left rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-gray-200 p-2 text-center text-[#0c1e1e] ">
                <Analysis/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Analysis & Report
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-400">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 py-8 width-fit bg-white p-4 text-left rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-gray-200 p-2 text-center text-[#0c1e1e] ">
                <Branding/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Branding
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-400">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 py-8 width-fit p-4 text-left bg-white rounded-lg">
              <div className="mb-2 w-fit rounded-lg bg-gray-200 p-2 text-center text-[#0c1e1e] ">
                <Advertising/>
              </div>
              <div className="text-md mb-3 font-semibold text-[#0c1e1e]">
              Advertising
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-400">
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
      <h1 className="mb-3 max-w-3xl text-center text-2xl font-bold tracking-tighter text-[#0c1e1e] md:text-5xl">
        What we Do ??
      </h1>
      <p className="max-w-sm text-center text-sm text-[#545454]">
        SyntaxUI is a free to use, customizable, and highly customizable UI
        component library.
      </p>
      <FeaturesGrid />
    </div>
  )
}

export default FeaturesWithHeading