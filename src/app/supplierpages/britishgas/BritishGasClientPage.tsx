'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Leaf, Trophy, Flame, Droplet,Zap,Trash, Computer, Sheet,CheckCircle} from 'lucide-react'
import Card from '@/components/shared/Card'
import Image from 'next/image'
import Link from 'next/link'
import BritishGasFAQ from '@/components/Supplier-FAQ/BritishGasFAQ'
import dynamic from 'next/dynamic'
import React from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
interface Step1Props {
  onNext: () => void;
  embedded?: boolean;
  textColorScheme?: 'dark' | 'light';
  showTitle?: boolean;
}
interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  embedded?: boolean;
  textColorScheme?: 'dark' | 'light';
}
interface Step3Props {
  onBack: () => void;
  onSuccess: () => void;
  embedded?: boolean;
  textColorScheme?: 'dark' | 'light';
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


  const faqSchema={

  
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What British Gas business tariffs are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "British Gas offers fixed-rate, variable, flexible, and green energy tariffs for businesses. Fixed tariffs suit SMEs looking for price security, while flexible tariffs allow larger businesses to take advantage of wholesale market changes."
      }
    },
    {
      "@type": "Question",
      "name": "How much does British Gas business energy cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "British Gas business prices vary depending on usage, meter type, business size, postcode, and credit rating. The most accurate way to view current pricing is through a quote which provides a live comparison."
      }
    },
    {
      "@type": "Question",
      "name": "When should I renew my British Gas business energy contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should renew your business energy contract during the renewal window, typically 60–90 days before your contract end date. This is the ideal time to speak with the energy experts at Ecosave Gas & Power. Our team can help you compare British Gas business quotes, negotiate better renewal rates, and even secure early contract renewals to avoid costly rollover rates."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my British Gas business contract expires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your British Gas contract expires and you don't renew or switch, your business will move onto deemed or out-of-contract rates, which are more expensive. You can switch away from deemed rates at any time without penalty."
      }
    },
    {
      "@type": "Question",
      "name": "Does British Gas install smart meters for businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, British Gas installs SMETS2 smart meters for SMEs and half-hourly meters for high-usage businesses. Smart meters allow accurate billing and detailed usage tracking."
      }
    },
    {
      "@type": "Question",
      "name": "Does British Gas offer renewable or green business energy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. British Gas provides renewable-backed electricity and carbon-offset gas options, and zero-carbon business tariffs to help companies reduce their environmental impact."
      }
    },
    {
      "@type": "Question",
      "name": "How do I switch my business energy to British Gas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To switch, you'll need your MPAN/MPRN numbers, recent meter reading, and business details. The switch typically takes 2–4 weeks with no supply interruption. Most business owners we have worked with have found it easier for Ecosave Gas & Power to manage the entire switching process for them."
      }
    },
    {
      "@type": "Question",
      "name": "Are there exit fees on British Gas business contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most fixed British Gas business tariffs include exit fees if you leave early. However, after entering your renewal window, you can switch or renew without penalty."
      }
    },
    {
      "@type": "Question",
      "name": "Can existing British Gas business customers negotiate cheaper renewal rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. British Gas renewal quotes can often be negotiated, especially when comapred with market rates. At Ecosave Gas & Power, we can help you negotiate better rates by providing a live comparison of current market options."
      }
    },
    {
      "@type": "Question",
      "name": "Why are British Gas deemed or out-of-contract rates higher?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deemed rates are higher because no contract is in place. They are designed to encourage businesses to renew or switch to a fixed tariff quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find my business MPAN or MPRN for British Gas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your MPAN and MPRN are shown on your business energy bill. If you do not have a bill, Ecosave Gas & Power can retrieve the information through national databases to help guide you through the process."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to switch business energy to British Gas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical business energy switch takes 2–4 weeks depending on meter type and supplier objections. You will not lose supply at any point during the switch."
      }
    },
    {
      "@type": "Question",
      "name": "Does British Gas offer business energy for multiple sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. British Gas offers multi-site contracts that allow businesses to combine meters, streamline billing, and negotiate better prices across multiple locations."
      }
    },
    {
      "@type": "Question",
      "name": "What information do I need for a British Gas business energy quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will need your business address, MPAN/MPRN numbers, annual consumption, and contract end date. If you do not have these details, Ecosave Gas & Power can obtain them on your behalf."
      }
    },
    {
      "@type": "Question",
      "name": "Why are business rates different from domestic British prices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial rates differ due to wholesale pricing, standing charges, metering setup, contract lengths, and regulatory requirements. Business tariffs are also tailored to usage patterns, which vary significantly from households."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch my British Gas business energy contract if my company has bad credit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, although British Gas may require a deposit or offer alternative tariffs. Ecosave Gas & Power specialises in finding suppliers who accept low-credit or newly formed businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch away from British Gas if my account is in debt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes. Commercial switching rules differ from domestic, meaning switching in debt may be allowed depending on the circumstances. Our team can check eligibility for you."
      }
    },
    {
      "@type": "Question",
      "name": "Are smart meters mandatory for British Gas business customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "British Gas may require a smart meter installation for certain tariffs or meter types. Smart meters ensure accurate billing and help business manage usage."
      }
    },
    {
      "@type": "Question",
      "name": "Does British Gas offer half-hourly meters for larger businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Businesses with high peak demand typically require half-hourly meters. British Gas provides HH meters installations and specialised tariffs for larger organisations."
      }
    },
    {
      "@type": "Question",
      "name": "Can British Gas help my business reduce energy usage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "British Gas offers smart meter insights and energy efficiency tools, and renewable-backed plans. Our team at Ecosave Gas & Power can help you to understand and reduce consumption by recommending the best tariff for your business."
      }
    }
  ]
}



const britishgasValues = [
  {
    title: "Tariff Options",
    description: "Choose from a variety of tariff plans to suit your business needs.",
    icon: CheckCircle,
  },
  {
    title: "Flexible Contracts",
    description: "Ideal for businesses wanting market-linked pricing options.",
    icon:CheckCircle,
  },
  {
    title: "Green Energy Plans",
    description: "Cleaner electricity plans sourced from renewable supply.",
    icon: CheckCircle,
  },
  {
    title: "Heritage",
    description: "Over 200 years of experience in the energy sector.",
    icon: CheckCircle,
  },
]

const values = [
  {
    title: 'Electricity',
    description: 'Our experts will find you the best deals in Business Electricity ',
    icon: Zap,
  },
  {
    title: 'Gas',
    description: 'We will help you save up to 50% on your Gas bills',
    icon: Flame,
  },
  {
    title: 'Water',
    description: 'We are keen to help you get lower water bills for a better value for money.',
    icon: Droplet,
  },
  {
    title: 'Waste',
    description: 'We will help you find the most cost effective Business Waste solutions',
    icon: Trash,
  },
]

export default function BritishGasClientPage() {
  const JsonLDSchema = (
    <Script
      id="britishgas-faq-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
  

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
    <main className="min-h-screen pt-20">
      <section className="relative bg-[url(/images/supplier-pages/blue-bg2.png)] bg-cover bg-left py-24">
  <div className="w-full pl-8 md:pl-16 lg:pl-24">
    {/* logo block stays on the left */}
    <div className="flex justify-start w-full mb-10">
    </div>

    {/* text block hard-left aligned */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-left max-w-3xl"
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-7xl">
        British Gas for Business
      </h1>

      <p className="mt-6 text-lg text-white leading-relaxed max-w-2xl">
        Looking to learn if British Gas is the right fit for your business? 
        Look no further as we have set up the perfect guide for you to decide.
        British Gas is a popular energy provider and is known as trustworthy and 
        reliable by their customers.
      </p>
      <p className="mt-6 text-2xl text-white leading-relaxed max-w-2xl">
        13th November 2025<br/> Riya Chowdhury
      </p>
    </motion.div>
  </div>
</section>

<section className="py-16 bg-gray-50">
  <div className="w-full pl-8 md:pl-16 lg:pl-24">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6 max-w-4xl text-left"
    >
      <Image
        src="/images/supplier-pages/bg_logo2.png"
        alt=""
        width={200}
        height={150}
        className="object-contain mb-6"
      />

      <h1 className="text-6xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
        British  Gas  for  Business
      </h1>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        About British Gas
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed">
        British Gas (trading name of British Gas Trading Limited and subsidiaries)
        is a major energy and home services provider in the UK.
      </p>

      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
        Parent Company & History
      </h3>
      <p className="text-xl text-gray-600 leading-relaxed">
        British Gas is a part of Centrica plc. Its origins go back over 200 years —
        in 1815 it began as the first utility company. Over time, it has evolved
        through various reorganisations (area gas boards, British Gas Corporation,
        privatisation, etc.).
      </p>
    </motion.div>
  </div>
</section>

 {/* british gas features */}
      <section className="py-16 bg-[#90D5FF]">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold tracking-tight text-gray-900">
        Why choose British Gas?
      </h1>
    </motion.div>

    <div className=" p-8 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {britishgasValues.map((value) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-[300px] p-6 flex flex-col items-center text-center">
                      <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                        <value.icon className="h-9 w-9 text-[#3faa4e]" />
                      </div>
                      <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-xl">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div/>
</section>

<section className="py-16 bg-gray-80">
  <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-sm w-[95%] mx-auto">
    <div className="w-full pl-8 md:pl-16 lg:pl-90">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 max-w-none text-left"
      >
        <Image
          src="/images/supplier-pages/bg_logo2.png"
          alt=""
          width={200}
          height={150}
          className="object-contain mb-6"
        />

        <h1 className="text-6xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
          When should you renew your British Gas contract?
        </h1>

        <p className="text-2xl text-black leading-relaxed">
          If your British Gas business energy contract is coming to an end, this is the ideal time to speak with the energy experts at Ecosave Gas & Power. Our team can help you compare British Gas business
          quotes, negotiate better renewal rates, and even secure early contract renewals to avoid costly rollover rates.
          <br/>
        </p>

        <p className="text-2xl text-black leading-relaxed font-bold">
          Let Ecosave Gas & Power guide you to the best British Gas business energy deal and help you save money on your next contract.
        </p>

        <br/><br/>

        <h1 className="text-5xl font-bold tracking-tight text-black">
          Don't want to deal with the stress of switching? <br/>
          Let <span className="text-[#3faa4e]">Ecosave Gas & Power</span> handle it for you!
        </h1>

        <p className="text-2xl text-black leading-relaxed">
          Think switching/renewing suppliers is too much hassle? 
          <br/>
          <br/>
          Think again!
          <br/><br/>
          At Ecosave Gas & Power, we make switching your business energy supplier simple, seamless, and completely stress free.
          <br/><br/>
          Our dedicated team of energy experts will handle everything else, from setup to supplier communication. If anything goes wrong during the switch, our team will be there every step of the way to 
          make sure your energy switch runs smoothly.
          <br/>
          So why wait? Save time, avoid the headaches, and 
          <a href="https://ecosavegasandpower.co.uk/contact" className="text-[#3faa4e] underline"> contact Ecosave Gas & Power </a> 
             for the best business gas and electricity deals today!
        </p>
        
      </motion.div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
       <section className="py-16 bg-gray-50">
  <div className="w-full pl-8 md:pl-16 lg:pl-90">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6 max-w-none text-left"
    >
      <Image
        src="/images/supplier-pages/bg_logo2.png"
        alt=""
        width={200}
        height={150}
        className="object-contain mb-6"
      />

      <h1 className="text-5xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
        Commonly Asked British Gas Business Questions
      </h1>
      <BritishGasFAQ/>

    </motion.div>
  </div>
</section>

      {/* Get a free quote section *
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get a free quote to compare energy prices</h2>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                    <value.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                  <br />
                  <Link
                    href="/energy-quote/step1"
                    className=" shadow-xl inline-flex items-center justify-center rounded-md font-semibold shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#30a17e] focus:ring-[#3faa4e] px-3 text-sm py-1.5 bg-[#3faa4e] text-white"
                  >
                      Get a quote
                     </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>}
        <
        
        

      {/* Dedicated service selection section at the bottom of the page */}
      <section className="py-16 bg-gray-50">
      <h2 className="text-4xl mt-0 text-center font-bold tracking-tight text-gray-900">Get a free quote to compare energy prices</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="bg-black rounded-xl shadow-lg overflow-hidden transform-gpu scale-95 p-8 md:p-10 w-full max-w-3xl">
                {/* Card title moved inside the card so title appears above the progress bar */}
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
                  Pick a service below to
                  <br />
                  <span className="text-[#3faa4e]">get a free quote</span>
                </h2>
                {/* Inline progress bar (from energy-quote layout) */}
                <div className="p-4">
                  <div className="mb-4">
                    {/** Stepper UI integrated with progress bar **/}
                    <div className="relative flex items-center w-full mx-auto" style={{ minHeight: '80px', maxWidth: '550px' }}>
                      <div className="absolute top-1/2 left-0 w-full h-4 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
                      <div
                        className="absolute top-1/2 left-0 h-4 bg-[#3faa4e] rounded-full -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
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
                              left: `calc(${leftPercent}% - 60px)`,
                              top: '50%',
                              transform: 'translateY(-35%)',
                              minWidth: '100px',
                            }}
                          >
                            <div
                              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 mb-2
                                ${isCompleted ? 'bg-green-500 border-green-500 text-white' : isActive ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-300 text-gray-400'}`}
                            >
                              {isCompleted ? '✓' : idx + 1}
                            </div>
                            <div className="text-base font-3xl text-center whitespace-nowrap text-white">{step}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {inlineStep === 1 && <ServiceSelection onNext={handleNextFromStep1} embedded textColorScheme="light" showTitle={false} />}
                {inlineStep === 2 && <Step2 onNext={handleNextFromStep2} onBack={handleBackToStep1} embedded textColorScheme="light" />}
                {inlineStep === 3 && <Step3 onBack={handleBackToStep2} onSuccess={handleSuccess} embedded textColorScheme="light" />}
              </div>
            </div>
        </div>
      </section>

    </main>
  )
} 