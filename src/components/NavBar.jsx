import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  CheckBadgeIcon,
  Bars3Icon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RectangleGroupIcon,
  PencilIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import NeubrutalismButton from './ui/NeubrutalismButton'

const products = [
  { name: 'Web Development', description: 'Get a better understanding of your traffic', href: '/web', icon: CommandLineIcon },
  { name: 'Marketing', description: 'Speak directly to your customers', href: '/marketing', icon: CursorArrowRaysIcon },
  { name: 'Content', description: 'Your customers’ data will be safe and secure', href: '/content', icon: 	RectangleGroupIcon },
  { name: 'Branding', description: 'Connect with third-party tools', href: '/branding', icon: 	PencilIcon },
  { name: 'Advertising', description: 'Build strategic funnels that will convert', href: '/advertising', icon: CheckBadgeIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Alima</span>
            <img className="hidden md:block h-8 w-auto" src="/Logo-dark-green.svg" alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-[#f3f5f4]" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold leading-6 outline-none text-[#f3f5f4]">
              Service
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#f3f5f4] shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 duration-300 hover:bg-[#426859]"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#f5f8ff] group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-500" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-[#0c1e1e] duration-300 hover:text-[#f3f5f4]">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600 duration-300 hover:text-[#f3f5f4]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href="#" className="text-base font-semibold leading-6 text-[#f3f5f4] duration-150 hover:-translate-y-1">
            Features
          </a>
          <a href="#" className="text-base font-semibold leading-6 text-[#f3f5f4] duration-150 hover:-translate-y-1">
            How it Work's
          </a>
          <a href="#" className="text-base font-semibold leading-6 text-[#f3f5f4] duration-150 hover:-translate-y-1">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <button className="group/button rounded-lg bg-[#f3f5f4] text-[#0c1e1e]">
            <span className="block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-[#70fe90] px-4 py-1 text-sm font-bold tracking-tight transition-all group-hover/button:-translate-x-2 group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0">
                Talk to us
            </span>
         </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f3f5f4] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Alima</span>
              <img
                className="h-7 w-auto"
                src="/Logo-dark-green.svg"
                alt="Alima Agency"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 duration-300 text-gray-900 hover:text-[#f3f5f4] hover:bg-[#426859]">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 duration-300 text-gray-900 hover:text-[#f3f5f4] hover:bg-[#426859]"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 duration-300 text-gray-900 hover:text-[#f3f5f4] hover:bg-[#426859]"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 duration-300 text-gray-900 hover:text-[#f3f5f4] hover:bg-[#426859]"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 duration-300 text-gray-900 hover:text-[#f3f5f4] hover:bg-[#426859]"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <NeubrutalismButton label='Talk to us' />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
