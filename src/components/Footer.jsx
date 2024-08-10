import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const navigation = {
    connect: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Our Work',
        href: '/portfolio',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
      { name: 'Book Meeting', href: '/contact' },
    ],
    company: [
      { name: 'Blog', href: '/' },
      { name: 'Career', href: '/career' },
      { name: 'FAQs', href: '/#faq' },
      { name: 'Privacy Policy', href: '/privacypolicy' },
      { name: 'Sitemap', href: '/' },
    ],
    services: [
      { name: 'All Services', href: '/' },
      { name: 'Web Design', href: '/web' },
      { name: 'Marketing', href: '/marketing' },
      { name: 'Content', href: '/content' },
      { name: 'Visual Branding', href: '/branding' },
    ],
  }

const Footer = () => {
  return (
    <div className='max-w-6xl mx-auto w-full rounded-2xl bg-[#e5eae6] sm:mb-20 p-10 drop-shadow-2xl shadow-2xl shadow-[#70fe90]'>
        <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full max-w-5xl"
    >
      <h2 id="footer-heading" className="sr-only">
        Alima
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <img
              priority={true}
              unoptimized={true}
              width={100}
              height={40}
              src="/Logo-dark.svg"
              alt="logo"
              className="h-7 w-auto"
            />
            <p className="text-md max-w-xs leading-6 text-gray-700">
              Not your average component library - build faster, launch sooner.
            </p>
            <div className="flex space-x-9 md:space-x-4 items-center text-sm text-gray-700">
              <a href="https://instagram.com/alima.agency" target="_blank"><RiInstagramFill className="w-7 h-7 duration-300 hover:-translate-y-1"/></a>
              <a href="https://t.me/alima_agency" target="_blank"><BsTelegram className="w-6 h-6 duration-300 hover:-translate-y-1"/></a>
              <a href="" target="_blank"><IoLogoWhatsapp className="w-6 h-6 duration-300 hover:-translate-y-1"/></a>
              <a href="https://x.com/alima_agency/" target="_blank"><FaXTwitter className="w-6 h-6 duration-300 hover:-translate-y-1"/></a>
              <a href="" target="_blank"><FaLinkedinIn className="w-6 h-6 duration-300 hover:-translate-y-1"/></a>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-3 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
              Quick Links
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900  duration-150"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  Services
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/30 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-600">
            &copy; 2024 Alima Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer