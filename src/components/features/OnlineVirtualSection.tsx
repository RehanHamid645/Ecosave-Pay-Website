'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OnlineVirtualSection() {
  const features = [
    {
      title: 'Online Checkout',
      desc: 'Effortless e-commerce integration. Deliver quick, mobile-optimized checkouts...',
      bg: 'border border-black',
    },
    {
      title: 'Payment Links',
      desc: 'Quickly and securely request payments via email, SMS, QR code...',
      bg: 'border border-black',
    },
    {
      title: 'Virtual Payments',
      desc: 'Accept card payments easily by phone or email using our secure virtual terminal...',
      bg: 'border border-black',
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Link href="/VirtualPayments">
            <button className="mb-6 bg-black text-white font-semibold px-6 py-2 rounded-full">
              → ONLINE & VIRTUAL PAYMENTS
            </button>
          </Link>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get Paid Remotely Anytime, Anywhere
          </h2>

          <div className="space-y-4">
            {features.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl ${item.bg}`}
              >
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-90 rounded-xl overflow-hidden border-4 border-[#4ac88f]">
          <Image
            src="/images/ecosave-pay-home-page/woman-on-laptop.png"
            alt="Online Payment Laptop"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
