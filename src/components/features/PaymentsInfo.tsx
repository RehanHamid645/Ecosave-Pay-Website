'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckBadgeIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

export default function PaymentsInfo() {
  return (
    <section className="relative bg-white py-20 lg:py-32 text-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side - Highlights List */}
        <div className="space-y-10 pt-6 lg:pt-28">
          <HighlightItem
            icon={CpuChipIcon}
            title="Modern, Reliable Technology"
            description="Experience the confidence of fast, dependable transactions. Our payment terminals process transactions in as little as three seconds and maintain 99.9% uptime — ensuring your business keeps running smoothly, even during peak trading hours."
          />
          <HighlightItem
            icon={UserGroupIcon}
            title="Dedicated Account Management"
            description="At Ecosave Pay, every client benefits from a personal account manager — a direct point of contact who understands your business and provides prompt, professional support. No ticket queues or offshore call centres, just real assistance when you need it."
          />
          <HighlightItem
            icon={CheckBadgeIcon}
            title="Transparent Pricing with No Hidden Costs"
            description="We’re transparent from the start — you’ll know exactly what you pay upfront, with no hidden increases or unexpected charges later."
          />
          <HighlightItem
            icon={CalendarDaysIcon}
            title="Next-Day Settlement"
            description="While others delay your money for days, EcoSave Pay gets funds into your account within 24 hours of processing."
          />
        </div>

        {/* Right Side - Headline, Text */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#4ac88f] mt-8 sm:mt-0 lg:-mt-28">
            Payment Solutions Designed Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            At Ecosave Pay, we go beyond simply processing transactions. We understand what truly matters to UK businesses — transparent pricing, quick access to your funds, reliable technology, and dedicated support that puts you first. Accept payments effortlessly with solutions built to keep your business moving.
          </p>
        </div>
      </div>

      {/* Positioned Image at Bottom Right */}
      <div className="hidden lg:block absolute bottom-16 right-0 w-[450px] max-w-[80%] lg:w-[550px] xl:w-[650px]">
        <Image
          src="/images/ecosave-pay-home-page/card-read-with-trust-pilot.png"
          alt="Ecosave Pay Device and Trustpilot Rating"
          width={650}
          height={400}
          className="object-contain"
        />
      </div>

      {/* CTA Section at Bottom */}
      <div className="relative z-10 mt-32 text-center px-4">
        <h3 className="text-xl font-semibold text-[#4ac88f] mb-2">
          GET A TAILORED QUOTE FOR YOUR BUSINESS
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Every business operates differently — and so should its payment solution. Our specialists work with you to develop a customised plan that optimises costs, improves efficiency, and delivers a seamless payment experience for your customers.
        </p>
        
        <Link href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          START SAVING TODAY
        </Link>
        
      </div>
    </section>
  )
}

// --- Reusable Highlight Item Component ---
function HighlightItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}) {
  return (
    <div className="flex items-start space-x-4">
      <Icon className="h-8 w-8 text-[#4ac88f] flex-shrink-0 mt-1" />
      <div>
        <h4 className="text-lg font-bold text-black">{title}</h4>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
      </div>
    </div>
  )
}
