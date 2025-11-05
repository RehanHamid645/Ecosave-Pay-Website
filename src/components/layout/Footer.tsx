'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Water', href: '/water' },
    { name: 'Waste', href: '/waste' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Energy', href: '/energy' },
    { name: 'Water', href: '/water' },
    { name: 'Waste', href: '/waste' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
/*     { name: 'FAQs', href: '/faqs' }, */
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Partners', href: '/partners' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'TPI Code of Practice', href: '/tpi-code' },
    { name: 'Complaints Procedure', href: '/complaints' },
  ],
}

const social = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ecosavegasandpower',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ecosavegasandpower/',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://uk.linkedin.com/company/ecosave-gas-power-ltd',
    icon: Linkedin,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#151f34]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-3">
            <Link href="/" className="p-2 -m-2">
              <Image
                src="/img/Ecosave_polished_white.png"
                alt="Ecosave Gas and Power"
                width={600}
                height={200}
                className="h-48 w-auto ml-[40px]"
              />
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              The most trusted business energy consultancy in the UK. Our expert team simplifies the process of comparing and switching business utility suppliers to save you time and money.<br/>
              Ecosave Gas and Power Ltd is a company registered in England and Wales.<br/>
              Registered number: 12013715
            </p>
            <div className="mt-5 flex space-x-6">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved by Ecosave Gas and Power.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-xs text-[#151f34]">0330 403 7373</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-xs">info@ecosavegasandpower.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-xs">Lloyds House 18-22, Lloyd Street, Manchester, England, M2 5WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 