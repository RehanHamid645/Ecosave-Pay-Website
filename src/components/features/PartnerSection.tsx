'use client'

import React from 'react'
import Link from 'next/link'
import {
  CreditCardIcon,
  ShoppingCartIcon,
  DocumentDuplicateIcon,
  UsersIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline'

// --- Data for the Payment Solution Cards ---
// Each object contains the icon, title, description, and an optional link/URL.
const paymentSolutions = [
  {
    icon: CreditCardIcon,
    title: 'Face to Face payments',
    description:
      'Accept contactless and mobile payments with portable terminals.',
    url: '/payments/face-to-face', // Example URL
  },
  {
    icon: ShoppingCartIcon,
    title: 'Online Gateway',
    description:
      'Website integration with mobile checkout and advanced security.',
    url: '/payments/online-gateway', // Example URL
  },
  {
    icon: DocumentDuplicateIcon,
    title: 'Virtual Payments',
    description: 'Send secure payment links via email/SMS and process telephone payments.',
    url: '/payments/virtual-terminal', // Example URL
  },
  {
    icon: UsersIcon,
    title: 'EPOS Solutions',
    description: 'All in one business management systems with built-in payments.',
    url: '/payments/epos-systems', // Example URL
  },
]

// --- Reusable Card Component ---
const PaymentSolutionCard = ({ icon: Icon, title, description, url }: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  url?: string;
}) => {
  const CardContent = (
    <div className="flex flex-col h-full min-h-[320px] p-10 sm:p-12 bg-gradient-to-br from-[#7dd3c0] to-[#6bc4b0] rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl relative">
      {/* Icon Container at top with larger size */}
      <div className="flex justify-center mb-8">
        <div className="flex-shrink-0">
          <Icon className="h-20 w-20 sm:h-24 sm:w-24 text-white" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>

      {/* Arrow Icon in bottom right corner */}
      <div className="absolute bottom-8 right-8 bg-black rounded-full p-2">
        <ArrowUpRightIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45" />
      </div>

      {/* Text Content */}
      <div className="text-left mt-auto">
        <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
        <p className="text-base text-black/80 leading-relaxed">{description}</p>
      </div>
    </div>
  )

  if (url) {
    return (
      <Link href={url} className="block h-full group">
        {CardContent}
      </Link>
    )
  }

  return <div className="h-full">{CardContent}</div>
}

// --- Main Section Component ---
export default function PaymentSolutionsSection() {
  return (
    // Background retained as requested (using the black-green-bg image)
    <section className="bg-[url(/images/green-black-bg.png)] bg-cover py-20 lg:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            Payment Solutions Designed Around Your Business
          </h1>
        </div>

        {/* Supporting Text */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="text-base sm:text-lg text-gray-300">
            At Ecosave Pay, we go beyond simply processing transactions. We understand what truly matters to UK businesses—transparent pricing, quick access to your funds, reliable technology, and dedicated support that puts you first. Accept payments effortlessly with solutions built to keep your business moving.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {paymentSolutions.map((solution, index) => (
            <PaymentSolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  )
}
