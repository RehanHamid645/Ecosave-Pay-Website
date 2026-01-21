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
    url: '/FaceToFace', 
  },
  {
    icon: ShoppingCartIcon,
    title: 'Online Gateway',
    description:
      'Website integration with mobile checkout and advanced security.',
    url: '/OnlinePayments', 
  },
  {
    icon: DocumentDuplicateIcon,
    title: 'Virtual Payments',
    description: 'Send secure payment links via email/SMS and process telephone payments.',
    url: '/VirtualPayments', 
  },
  {
    icon: UsersIcon,
    title: 'EPOS Solutions',
    description: 'All in one business management systems with built-in payments.',
    url: '/EposSystems', 
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
    <div className="flex flex-col h-full min-h-[340px] rounded-[2.5rem] shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl overflow-hidden relative border border-black/10">
      {/* Top Green Half */}
      <div className="bg-[#70fab1] flex flex-col items-center justify-center pt-10 pb-6 px-8" style={{ borderTopLeftRadius: '2.5rem', borderTopRightRadius: '2.5rem' }}>
        <Icon className="h-20 w-20 sm:h-24 sm:w-24 text-white mb-2" strokeWidth={1.5} aria-hidden="true" />
      </div>
      {/* Bottom White Half */}
      <div className="bg-white flex-1 flex flex-col justify-between px-8 pt-6 pb-8 text-left" style={{ borderBottomLeftRadius: '2.5rem', borderBottomRightRadius: '2.5rem' }}>
        <div>
          <h3 className="text-2xl font-extrabold text-black mb-2 leading-tight">{title}</h3>
          <p className="text-base text-black/80 leading-relaxed">{description}</p>
        </div>
        <div className="flex justify-end mt-6">
          <span className="bg-black rounded-full p-2">
            <ArrowUpRightIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
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
    <section className="bg-[url(/images/black-green-bg.png)] bg-cover py-20 lg:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
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