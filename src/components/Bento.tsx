import { Sparkles, Code, Palette, Clock, Command, Feather } from 'lucide-react'
import {Advertising, Analysis, Branding, Content, Marketing, WebDev} from '../assets/BentoIcons'
// interface Feature {
//   id: number
//   name: string
//   description: string
//   icon: JSX.Element
// }

const iconSize = 18

// const FeaturesData: Feature[] = [
//   {
//     id: 1,
//     name: 'Web Development',
//     description:
//       'SyntaxUI components are designed to be intuitive and easy to use, even for beginners.',
//     icon: <Sparkles size={iconSize} />,
//   },
//   {
//     id: 2,
//     name: 'Marketing',
//     description:
//       'Customize the look and feel of SyntaxUI components to match your brand and design.',
//     icon: <Palette size={iconSize} />,
//   },
//   {
//     id: 3,
//     name: 'Content',
//     description:
//       'SyntaxUI is built with developers in mind, providing a clean and consistent API.',
//     icon: <Code size={iconSize} />,
//   },
//   {
//     id: 4,
//     name: 'Analysis & Report',
//     description:
//       'SyntaxUI components are designed to be responsive and work seamlessly across devices.',
//     icon: <Feather size={iconSize} />,
//   },
//   {
//     id: 5,
//     name: 'Branding',
//     description:
//       'SyntaxUI prioritizes accessibility, ensuring that your components are usable by everyone.',
//     icon: <Command size={iconSize} />,
//   },
//   {
//     id: 6,
//     name: 'Advertising',
//     description:
//       'SyntaxUI is actively maintained and regularly updated with new features and improvements.',
//     icon: <Clock size={iconSize} />,
//   },
// ]

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
    <div className="my-20 py-32 flex w-full flex-col items-center justify-center">
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