"use client"

import React from "react";
import { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ServiceSelection = dynamic(
  () => import("@/app/energy-quote/step1/page").then((m) => m.default),

);
const Step2 = dynamic(
  () => import("@/app/energy-quote/step2/page").then((m) => m.default),
  
);
const Step3 = dynamic(
  () => import("@/app/energy-quote/step3/page").then((m) => m.default),
  
);
/* import TrustpilotWidget from "./TrustpilotWidget"; */

export const metadata: Metadata= {
  title: 'Compare Business Gas & Electricity | Save Up to 45% on Energy Bills | Ecosave Gas and Power',
  description:
    'Save up to 45% on your business gas and electricity bills with Ecosave Gas and Power. Compare trusted UK energy suppliers like British Gas, E.ON Next, EDF Energy and get the best commercial energy rates today.',
  keywords: [
    'business energy comparison',
    'compare business gas and electricity',
    'business energy quotes UK',
    'commercial energy suppliers',
    'business electricity rates',
    'business gas rates',
    'business energy switching',
    'Ecosave Gas and Power',
    'business utilities comparison',
    'UK business energy deals',
    'save on business energy bills',
    'cheap business electricity suppliers',
    'energy cost reduction for businesses',
    'British Gas business deals',
    'E.ON Next business energy',
    'EDF Energy commercial rates',
    'npower business energy',
    'eco-friendly energy suppliers UK',
    'renewable business energy options',
    'compare commercial energy prices',
  ],
  openGraph: {
    title: 'Compare Business Gas & Electricity | Save Up to 45% | Ecosave Gas & Power',
    description:
      'Switch to cheaper business energy today. Ecosave Gas & Power helps UK businesses save up to 45% by comparing top suppliers like British Gas, E.ON, and EDF.',
    url: 'https://www.ecosavegasandpower.com',
    siteName: 'Ecosave Gas & Power',
    images: [
      {
        url: '/images/Ecosave_polished.png', // replace with your actual hero image path
        width: 1200,
        height: 630,
        alt: 'Ecosave Gas & Power - Compare Business Energy and Save',
      },
    ],
    type: 'website',
  },
  robots:{
    index:true,
    follow:true,
  },

};


export default function HeroSection() {
  const [inlineStep, setInlineStep] = React.useState<number>(1)
  const router = require('next/navigation').useRouter ? require('next/navigation').useRouter() : null

  // handlers for embedded flow
  const handleNextFromStep1 = () => setInlineStep(2)
  const handleNextFromStep2 = () => setInlineStep(3)
  const handleBackToStep1 = () => setInlineStep(1)
  const handleBackToStep2 = () => setInlineStep(2)
  const handleSuccess = () => {
    // default to navigating to thank-you page
    try {
      const { push } = require('next/navigation')
      if (push) push('/energy-quote/thank-you')
    } catch (e) {
      // fallback: location change
      window.location.href = '/energy-quote/thank-you'
    }
  }
  const steps = ["Energy Type", "Postcode", "Contact Details"]
  const activeIndex = inlineStep - 1
  return (
    <section className="relative py-16 lg:py-48 ">
      <div className="absolute inset-0 bg-[url(/images/ecosave-light-green-bg.png)] bg-cover bg-center z-0"></div>
      <div className="absolute inset-0   z-10"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 relative z-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg font-bold tracking-tight text-[#151f34] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Helping Over <span className="text-[#73c06a]">50,000 Businesses</span>
              </motion.span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight text-[#151f34] sm:text-5xl md:text-6xl"
            >
              <span className="text-[#">Save on</span> <span className="text-[#73c06a]" >Energy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-lg text-[#151f34]"
            >
              The most trusted business energy consultancy in the UK. Our expert
              team simplifies the process of comparing and switching business
              utility suppliers to save you time and money.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.45 }}
              className="mt-6 self-start"
            >
              <Link href="/energy-quote/step1">
                <Button
                  size="lg"
                  className="px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-[#4fc76a] to-[#1fa25a] hover:from-[#6bd07f] hover:to-[#30a17e] shadow-lg hover:shadow-2xl transform transition duration-200 focus-visible:ring-4 focus-visible:ring-[#3faa4e]/30"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Compare Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Service selection card (mid-right) - desktop only */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[380px] lg:w-[480px]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Inline progress bar (from energy-quote layout) */}
                <div className="p-4 border-b">
                  <div className="relative flex items-center w-full" style={{ minHeight: '44px' }}>
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
                    <div
                      className="absolute top-1/2 left-0 h-2 bg-[#3faa4e] rounded-full -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
                      style={{
                        width: steps.length === 1 ? '100%' : `${(activeIndex / (steps.length - 1)) * 100}%`,
                        maxWidth: '100%'
                      }}
                    ></div>
                    {steps.map((step, idx) => {
                      const isActive = idx === activeIndex
                      const isCompleted = idx < activeIndex
                      const leftPercent = (idx / (steps.length - 1)) * 100
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center z-20"
                          style={{
                            position: 'absolute',
                            left: `calc(${leftPercent}% - 36px)`,
                            top: '50%',
                            transform: 'translateY(-20%)',
                            minWidth: '60px'
                          }}
                        >
                          <div
                            className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mb-2
                              ${isCompleted ? 'bg-green-500 border-green-500 text-white' : isActive ? 'bg-white border-blue-500 text-blue-500' : 'bg-white border-gray-300 text-gray-400'}`}
                          >
                            {isCompleted ? '✓' : idx + 1}
                          </div>
                          <div className="text-xs text-center whitespace-nowrap">{step}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  {inlineStep === 1 && <ServiceSelection onNext={handleNextFromStep1} />}
                  {inlineStep === 2 && <Step2 onNext={handleNextFromStep2} onBack={handleBackToStep1} />}
                  {inlineStep === 3 && <Step3 onBack={handleBackToStep2} onSuccess={handleSuccess} />}
                </div>
                <a
                href="https://uk.trustpilot.com/review/www.ecosavegasandpower.com"
                target="_blank"
                rel="noopener"
                className="block py-3 text-[#00b67a] font-medium hover:underline w-full text-center border-t border-gray-100 text-lg"
              >
                See all reviews →
              </a>
              </div>
            </div>
{/*             <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/images/pexels-pixabay-46169.jpg"
                alt="Business Energy Solutions"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-xl"
                priority
              />
            </motion.div> */}
{/*             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 rounded-lg shadow-lg"
            >
              <TrustpilotWidget />
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
