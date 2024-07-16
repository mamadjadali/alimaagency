import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
]

export default function Intro() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#70fe90]">Captivate Your Audience</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#f3f5f4] sm:text-4xl">Unleash the Power of Content</p>
              <p className="mt-6 text-lg leading-8 text-[#dedbcc]">
              In the digital age, content is king. we specialize in creating compelling content that captures attention, educates, and inspires action. From captivating blogs and engaging videos to insightful infographics and persuasive copy, we bring your brand’s story to life. Discover how our content creation services can help you connect with your audience and achieve your business goals.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-[#dedbcc] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[#70fe90]">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-[#dedbcc]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            style={{
                maskImage: `linear-gradient(to left, transparent, black 20%)`,
            }} 
          />
        </div>
      </div>
    </div>
  )
}
