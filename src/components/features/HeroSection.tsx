"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

interface Step1Props {
  onNext: () => void;
  embedded?: boolean;
}
interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  embedded?: boolean;
}
interface Step3Props {
  onBack: () => void;
  onSuccess: () => void;
  embedded?: boolean;
}

const ServiceSelection = dynamic<Step1Props>(
  () => import("@/app/energy-quote/step1/page").then((m) => m.default),
  { ssr: false }
);
const Step2 = dynamic<Step2Props>(
  () => import("@/app/energy-quote/step2/page").then((m) => m.default),
  { ssr: false }
);
const Step3 = dynamic<Step3Props>(
  () => import("@/app/energy-quote/step3/page").then((m) => m.default),
  { ssr: false }
);
/* import TrustpilotWidget from "./TrustpilotWidget"; */

// Note: metadata belongs on pages/layouts (server components). This component is client-side only.


export default function HeroSection() {
  const [inlineStep, setInlineStep] = React.useState<number>(1)
  const router = useRouter()

  // handlers for embedded flow
  const handleNextFromStep1 = () => setInlineStep(2)
  const handleNextFromStep2 = () => setInlineStep(3)
  const handleBackToStep1 = () => setInlineStep(1)
  const handleBackToStep2 = () => setInlineStep(2)
  const handleSuccess = () => {
    router.push('/energy-quote/thank-you')
  }
  return (
    <section className="relative py-16 lg:py-48 ">
      <div className="absolute inset-0 bg-[url(/images/ecosave-green-bg2.jpg)] bg-cover bg-center z-0"></div>
      {/* subtle dark overlay to increase contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-black/40"
        aria-hidden="true"
      />
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
              className="text-lg font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Helping Over <span className="text-[#3faa4e]">50,000 Businesses</span>
              </motion.span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="text-white">Save on</span> <span className="text-white">Energy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-lg text-white"
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
            {/* Service selection card (mid-right) - desktop only; nudged slightly lower so it doesn't touch the quote banner */}
            <div className="hidden md:block absolute right-0 top-[58%] -translate-y-1/2 md:w-[360px] lg:w-[520px]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu scale-95">
                {/* Inline progress bar (from energy-quote layout) */}
                <div className="p-4">
                  <div className="mb-4">
                    {/** Stepper UI integrated with progress bar **/}
                    <div className="relative flex items-center w-full mx-auto" style={{ minHeight: '44px', maxWidth: '340px' }}>
                      <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
                      <div
                        className="absolute top-1/2 left-0 h-2 bg-[#3faa4e] rounded-full -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
                        style={{
                          width: `${((inlineStep - 1) / (3 - 1)) * 100}%`,
                          maxWidth: '100%',
                        }}
                      />

                      {['Energy Type', 'Postcode', 'Contact Details'].map((step, idx) => {
                        const activeIndex = inlineStep - 1;
                        const isActive = idx === activeIndex;
                        const isCompleted = idx < activeIndex;
                        const leftPercent = (idx / (3 - 1)) * 100;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center z-20"
                            style={{
                              position: 'absolute',
                              left: `calc(${leftPercent}% - 40px)`,
                              top: '50%',
                              transform: 'translateY(-25%)',
                              minWidth: '70px',
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
                </div>

                {inlineStep === 1 && <ServiceSelection onNext={handleNextFromStep1} embedded />}
                {inlineStep === 2 && <Step2 onNext={handleNextFromStep2} onBack={handleBackToStep1} embedded />}
                {inlineStep === 3 && <Step3 onBack={handleBackToStep2} onSuccess={handleSuccess} embedded />}
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
