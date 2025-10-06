'use client'

import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback, useState } from 'react'
import Link from 'next/link'


const partners = [
  {
    name: 'British Gas',
    logo: '/img/partners/british-gas.svg',
    description: 'The UK\'s largest energy and home services provider.',
  },
  {
    name: 'EDF Energy',
    logo: '/img/partners/edf.svg',
    description: 'Leading generator of zero carbon electricity in Britain.',
  },
  {
    name: 'E.ON',
    logo: '/img/partners/eon-next.svg',
    description: 'One of Europe\'s largest renewable energy generators.',
  },
  {
    name: 'YGP',
    logo: '/img/partners/YGP-Large.png',
    description: 'A leading business energy provider in the UK in terms of sustainability.',
  },
  {
    name: 'YÜ Energy',
    logo: '/img/partners/yu_logo_720x412.png',
    description: 'Supporting over 50,000 businesses with YÜtility simplicity.',
  },
  {
    name: 'Valda Energy',
    logo: '/img/partners/valda.svg',
    description: 'A leading OFGEM-licensed energy specialist for businesses.',
  },
  {
    name: 'Everflow',
    logo: '/img/partners/Everflow.png',
    description: 'A digital-first energy supplier with flexible, transparent pricing.',
  },
  {
    name: 'Total Energy',
    logo: '/img/partners/totale.png',
    description: 'An integrated provider of competitive energy solutions.',
  },
  {
    name: 'Crown Gas & Power',
    logo: '/img/partners/crown.png',
    description: 'A specialist commercial gas supplier. Energy Supplier of the year 2024. ',
  },
  {
    name: 'UGP',
    logo: '/img/partners/ugp.png',
    description: 'An independent supplier offering tailored utility solutions.',
  },
  {
    name: 'Dyce',
    logo: '/img/partners/dyce.png',
    description: 'A forward-thinking firm focused on innovative energy efficiency.',
  },
  {
    name: 'Smartest energy',
    logo: '/img/partners/smartest.png',
    description: 'A tech-driven provider with smart, sustainable energy options.',
  },
  {
    name: 'PE',
    logo: '/img/partners/pe.png',
    description: 'A reliable partner delivering customer-focused energy services.',
  },
]


export default function PartnerSection() {
  const [isClient, setIsClient] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    duration: 3000
  })

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle carousel scrolling
  useEffect(() => {
    if (!emblaApi || !isClient) return

    const interval = setInterval(scrollNext, 3000)
    return () => clearInterval(interval)
  }, [emblaApi, scrollNext, isClient])

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Trusted Providers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          We work with leading providers to find you the best solution 
          </p>
        </div>

        <div className="relative min-h-[200px]">
          {!isClient ? (
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border-4 border-gray-200"></div>
                <div className="h-16 w-16 rounded-full border-4 border-[#3faa4e] border-t-transparent animate-spin absolute top-0 left-0"></div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex py-6">
                {[...partners, ...partners, ...partners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-[0_0_auto] mx-6 group relative flex justify-center items-center h-40 w-72 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="relative w-56 h-24">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        priority={index < 6}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-all duration-200"
                      />
                    </div>
                    {partner.description && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg p-6">
                        <div className="text-center">
                          <p className="font-semibold text-lg mb-2">{partner.name}</p>
                          <p className="text-sm line-clamp-3">{partner.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Want to become a partner? <Link href="/partners" className="text-[#3faa4e] hover:underline">Learn more →</Link>
          </p>
        </div>
      </div>
    </section>
  )
} 