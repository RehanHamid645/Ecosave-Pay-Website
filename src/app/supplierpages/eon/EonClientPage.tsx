// 'use client'

// import { motion } from 'framer-motion'
// import { Shield, Users, Leaf, Trophy, Flame, Droplet,Zap,Trash, Computer, Sheet, CheckCircle } from 'lucide-react'
// import Card from '@/components/shared/Card'
// import Image from 'next/image'
// import Link from 'next/link'
// import EonFAQ from '@/components/Supplier-FAQ/EonFAQ'
// import dynamic from 'next/dynamic'
// import React from 'react'
// import { useRouter } from 'next/navigation'
// import Script from 'next/script'
// interface Step1Props {
//   onNext: () => void;
//   embedded?: boolean;
//   textColorScheme?: 'dark' | 'light';
//   showTitle?: boolean;
// }
// interface Step2Props {
//   onNext: () => void;
//   onBack: () => void;
//   embedded?: boolean;
//   textColorScheme?: 'dark' | 'light';
// }
// interface Step3Props {
//   onBack: () => void;
//   onSuccess: () => void;
//   embedded?: boolean;
//   textColorScheme?: 'dark' | 'light';
// }

// const ServiceSelection = dynamic<Step1Props>(
//   () => import("@/app/energy-quote/step1/page").then((m) => m.default),
//   { ssr: false }
// );
// const Step2 = dynamic<Step2Props>(
//   () => import("@/app/energy-quote/step2/page").then((m) => m.default),
//   { ssr: false }
// );
// const Step3 = dynamic<Step3Props>(
//   () => import("@/app/energy-quote/step3/page").then((m) => m.default),
//   { ssr: false }
// );


//   const EonfaqSchema={

  

//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [
//     {
//       "@type": "Question",
//       "name": "What E.ON Next business tariffs are available?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "E.ON Next offers fixed-rate, flexible, and renewable business energy tariffs designed for SMEs and larger organisations."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "How much does E.ON Next business energy cost?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "E.ON Next prices depend on business size, postcode, usage, and credit rating. The most accurate prices come from a live quote comparison."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "What is the difference between E.ON and E.ON Next?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "E.ON is the parent company, while E.ON Next is their modern UK supply brand. E.ON handles large infrastructure and energy services, whereas E.ON Next manages electricity and gas supply for UK homes and businesses."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Is E.ON Next the same company as E.ON?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "E.ON Next operates under the E.ON Group umbrella. They share the same parent company but provide different services."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next offer 100% renewable business electricity?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. E.ON Next provides renewable-backed electricity sourced from wind, solar and hydro generation."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "When should I renew my E.ON Next business energy contract?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Businesses should typically renew 60–90 days before the contract end date to avoid expensive out-of-contract rates."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next install smart meters for businesses?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes, E.ON Next installs SMETS2 smart meters for SMEs and half-hourly meters for large consumption sites."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "How do I switch my business energy to E.ON Next?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "You’ll need your business details, MPAN/MPRN and usage data. Ecosave Gas & Power can manage the full switching process."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Are there exit fees on E.ON Next business contracts?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Most fixed E.ON Next tariffs have exit fees if cancelled early. During your renewal window, you may switch or renew without charges."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "What happens if my E.ON Next business contract expires?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "You will be placed on deemed or out-of-contract rates, which are significantly more expensive."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "How long does it take to switch business energy to E.ON Next?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Switching takes 2–4 weeks on average, and your supply won’t be interrupted."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next supply business gas?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. E.ON Next supplies both gas and electricity to UK businesses."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "How do I find my MPAN/MPRN for E.ON Next?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Your MPAN/MPRN is shown on your latest bill. Ecosave Gas & Power can retrieve it using ECOES and Xoserve databases."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next offer multi-site business contracts?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. E.ON Next offers portfolio contracts to simplify billing and negotiate lower energy costs for multi-site businesses."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Are E.ON Next deemed rates expensive?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. Deemed rates are intentionally high and switching immediately lowers business energy costs."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next offer online account management?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. Businesses can manage billing, meter reads and usage insights through the E.ON Next online portal."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Can E.ON Next help businesses reduce energy usage?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. Smart meter data and digital insights help identify consumption patterns and efficiency improvements."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Why are E.ON Next business prices different from domestic tariffs?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Business tariffs use different wholesale pricing models, contract structures and standing charges compared to domestic tariffs."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Can I switch to E.ON Next with a low business credit score?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes, although a deposit or alternative tariff may be required depending on the credit check result."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Are smart meters required for E.ON Next business tariffs?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Certain E.ON Next tariffs require smart meters to provide accurate billing and improve data visibility."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next offer tariffs for industrial or high-usage businesses?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. E.ON Next provides bespoke pricing and flexible purchasing agreements for energy-intensive businesses."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Can I switch away from E.ON Next if my business is in debt?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Some suppliers allow switching even if you’re in debt. Ecosave Gas & Power can assess your eligibility."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Does E.ON Next support renewable energy goals for businesses?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. E.ON Next offers green electricity, carbon reduction tools and sustainability-focused plans."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Can Ecosave compare E.ON Next prices with other suppliers?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Yes. Ecosave Gas & Power compares E.ON Next quotes with the full energy market to help businesses secure the lowest tariff."
//       }
//     }
//   ]
// }




// const EonValues = [
//   {
//     title: "Range of Tariff Options",
//     description: "Choose from a variety of tariff plans to suit your business needs.",
//     icon: CheckCircle,
//   },
//   {
//     title: "Renewable Energy ",
//     description: "Access to 100% renewable electricity options for sustainable business practices.",
//     icon: CheckCircle,
//   },
//   {
//     title: "Over 5 Million Customers",
//     description: "E.ON Next serves over 5 million customers",
//     icon: CheckCircle,
//   },
//   {
//     title: "Dedicated Business Support",
//     description: "Access to a dedicated support team for business energy customers.",
//     icon: CheckCircle,
//   },
//   /* 
//     {
//       title: "Heritage",
//       description: "Over 200 years of experience in the energy sector.",
//       icon: CheckCircle,
//     },
//     {
//       title: "Customer Support",
//       description: "Online account tools and energy efficiency advice provided.",
//       icon: CheckCircle,
//     }
//   */
// ]

// const values = [
//   {
//     title: 'Electricity',
//     description: 'Our experts will find you the best deals in Business Electricity ',
//     icon: Zap,
//   },
//   {
//     title: 'Gas',
//     description: 'We will help you save up to 50% on your Gas bills',
//     icon: Flame,
//   },
//   {
//     title: 'Water',
//     description: 'We are keen to help you get lower water bills for a better value for money.',
//     icon: Droplet,
//   },
//   {
//     title: 'Waste',
//     description: 'We will help you find the most cost effective Business Waste solutions',
//     icon: Trash,
//   },
// ]

// export default function EonClientPage() {
//   const JsonLDSchema = (
//     <Script
//       id="eon-faq-jsonld"
//       type="application/ld+json"
//       strategy="afterInteractive"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(EonfaqSchema) }}
//     />
//   );
  

//   const [inlineStep, setInlineStep] = React.useState<number>(1)
//     const router = useRouter()
  
//     // handlers for embedded flow
   
//     const handleNextFromStep1 = () => setInlineStep(2)
//     const handleNextFromStep2 = () => setInlineStep(3)
//     const handleBackToStep1 = () => setInlineStep(1)
//     const handleBackToStep2 = () => setInlineStep(2)
//     const handleSuccess = () => {
//       router.push('/energy-quote/thank-you')
//     }
//   return (
//     <main className="min-h-screen pt-20">
//       <section className="relative bg-[url(/images/supplier-pages/orange-bg.png)] bg-cover bg-left py-24">
//   <div className="w-full pl-8 md:pl-16 lg:pl-24">
//     {/* logo block stays on the left */}
//     <div className="flex justify-start w-full mb-10">
//     </div>

//     {/* text block hard-left aligned */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="text-left max-w-3xl"
//     >
//       <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-7xl">
//         E.ON Next Energy for Business
//       </h1>

//       <p className="mt-6 text-lg text-black leading-relaxed max-w-2xl">
//         Looking to find out whether E.ON Next is the best energy supplier for your business?
//         You’re in the right place. This page breaks down everything you need to know — from tariffs and contract types to pricing,
//          green energy options, and customer support.
//         E.ON Next is one of the UK’s most recognised suppliers, trusted by thousands of businesses for its reliability 
//         and competitive energy solutions.
//       </p>
//       <p className="mt-6 text-2xl text-black leading-relaxed max-w-2xl">
//         24th November 2025<br/> Riya Chowdhury
//       </p>
//     </motion.div>
//   </div>
// </section>

// <section className="py-16 bg-gray-50">
//   <div className="w-full pl-8 md:pl-16 lg:pl-24">
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="space-y-6 max-w-4xl text-left"
//     >
//       <Image
//         src="/images/supplier-pages/eon-logo.png"
//         alt=""
//         width={200}
//         height={150}
//         className="object-contain mb-6"
//       />

//       <h1 className="text-6xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
//         E.ON Next Business Energy
//       </h1>

//       <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//         About E.ON Next Energy
//       </h2>
//       <p className="text-xl text-gray-600 leading-relaxed">
//         E.ON Next is one of the UK’s leading renewable-focused business energy suppliers, offering fixed tariffs, 
//         green electricity, smart meters, and digital account tools for SMEs and large organisations. As part of the E.ON Group, 
//         E.ON Next provides sustainable business energy solutions backed by stable pricing, strong customer support, and a commitment 
//         to helping businesses reduce carbon emissions.
//       </p>

//       <h3 className="text-2xl font-bold tracking-tight text-gray-900">
//         Company History
//       </h3>
//       <p className="text-xl text-gray-600 leading-relaxed">
//         E.ON Next is part of the global E.ON Group, one of Europe’s largest energy companies. 
//         Founded in 2000, E.ON has grown into a major international 
//         provider of electricity, gas, and energy services. In 2020, E.ON Group launched E.ON Next to deliver 
//         a dedicated digital-first supply service for UK homes and businesses. E.ON Next focuses on renewable electricity, 
//         smart technology, and modern customer service, while benefiting from E.ON Group’s financial stability and decades of energy industry expertise.
//       </p>
//     </motion.div>
//   </div>
// </section>

//  {/* EON features */}
//       <section className="py-16 bg-[#FF5C00] h-[570px]">
//   {/*<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">*/}

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-center"
//     >
//       <h1 className="text-6xl font-bold tracking-tight text-white">
//         Why choose E.ON?
//       </h1>
//     </motion.div>

//     <div className=" p-8 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {EonValues.map((value) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-[300px] p-6 flex flex-col items-center text-center">
//                   <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
//                     <value.icon className="h-9 w-9 text-[#3faa4e]" />
//                   </div>
//                   <h3 className="text-3xl font-semibold text-gray-900 mb-2">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 text-xl">
//                     {value.description}
//                   </p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//           <div/>
// </section>

// <section className="py-16 bg-gray-80">
//   <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl shadow-sm w-[95%] mx-auto">
//     <div className="w-full pl-8 md:pl-16 lg:pl-90">
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         className="space-y-6 max-w-none text-left"
//       >
//         <Image
//           src="/images/supplier-pages/eon-logo.png"
//           alt=""
//           width={200}
//           height={150}
//           className="object-contain mb-6"
//         />

//         <h1 className="text-6xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
//           When should you renew your E.ON energy contract?
//         </h1>

//         <p className="text-2xl text-black leading-relaxed">
//           If your E.ON business energy contract is coming to an end, you'll recieve a renewal letter
//           around three months before your contract expires.
//           <br/><br/>
//           This is the ideal time to speak with the energy experts at Ecosave Gas & Power. Our team can help you compare E.ON Next business
//           quotes, negotiate better renewal rates, and even secure early contract renewals to avoid costly rollover rates.
//           <br/>
//         </p>

//         <p className="text-2xl text-black leading-relaxed font-bold">
//           Let Ecosave Gas & Power guide you to the best E.ON business energy deal and help you save money on your next contract.
//         </p>

//         <br/><br/>

//         <h1 className="text-5xl font-bold tracking-tight text-black">
//           Don't want to deal with the stress of switching? <br/>
//           Let <span className="text-[#3faa4e]">Ecosave Gas & Power</span> handle it for you!
//         </h1>

//         <p className="text-2xl text-black leading-relaxed">
//           Think switching/renewing suppliers is too much hassle? 
//           <br/>
//           <br/>
//           Think again!
//           <br/><br/>
//           At Ecosave Gas & Power, we make switching your business energy supplier simple, seamless, and completely stress free.
//           <br/><br/>
//           Our dedicated team of energy experts will handle everything else, from setup to supplier communication. If anything goes wrong during the switch, our team will be there every step of the way to 
//           make sure your energy switch runs smoothly.
//           <br/>
//           So why wait? Save time, avoid the headaches, and 
//           <a href="https://ecosavegasandpower.co.uk/contact" className="text-[#3faa4e] underline"> contact Ecosave Gas & Power </a> 
//              for the best business gas and electricity deals today!
//         </p>
        
//       </motion.div>
//     </div>
//   </div>
// </section>


//       {/* FAQ Section */}
//        <section className="py-16 bg-gray-50">
//   <div className="w-full pl-8 md:pl-16 lg:pl-90">
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="space-y-6 max-w-none text-left"
//     >
//       <Image
//         src="/images/supplier-pages/eon-logo.png"
//         alt=""
//         width={200}
//         height={150}
//         className="object-contain mb-6"
//       />

//       <h1 className="text-5xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
//         Commonly Asked E.ON  Business Questions
//       </h1>
//       <EonFAQ/>

//     </motion.div>
//   </div>
// </section>

//       {/* Get a free quote section *
//       <section className="py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get a free quote to compare energy prices</h2>
//           </motion.div>
//           <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {values.map((value) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full p-6 flex flex-col items-center text-center">
//                   <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
//                     <value.icon className="h-6 w-6 text-[#3faa4e]" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {value.description}
//                   </p>
//                   <br />
//                   <Link
//                     href="/energy-quote/step1"
//                     className=" shadow-xl inline-flex items-center justify-center rounded-md font-semibold shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#30a17e] focus:ring-[#3faa4e] px-3 text-sm py-1.5 bg-[#3faa4e] text-white"
//                   >
//                       Get a quote
//                      </Link>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>}
//         <
        
//          {/* Dedicated service selection section at the bottom of the page */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-4xl mt-0 text-center font-bold tracking-tight text-gray-900">Get a free quote to compare energy prices</h2>
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-center">
//               <div className="bg-black rounded-xl shadow-lg overflow-hidden transform-gpu scale-95 p-8 md:p-10 w-full max-w-3xl">
//                 {/* Card title moved inside the card so title appears above the progress bar */}
//                 <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-4">
//                   Pick a service below to
//                   <br />
//                   <span className="text-[#3faa4e]">get a free quote</span>
//                 </h2>
//                 {/* Inline progress bar (from energy-quote layout) */}
//                 <div className="p-4">
//                   <div className="mb-4">
//                     {/** Stepper UI integrated with progress bar **/}
//                     <div className="relative flex items-center w-full mx-auto" style={{ minHeight: '80px', maxWidth: '550px' }}>
//                       <div className="absolute top-1/2 left-0 w-full h-4 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
//                       <div
//                         className="absolute top-1/2 left-0 h-4 bg-[#3faa4e] rounded-full -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
//                         style={{
//                           width: `${((inlineStep - 1) / (3 - 1)) * 100}%`,
//                           maxWidth: '100%',
//                         }}
//                       />

//                       {['Energy Type', 'Postcode', 'Contact Details'].map((step, idx) => {
//                         const activeIndex = inlineStep - 1;
//                         const isActive = idx === activeIndex;
//                         const isCompleted = idx < activeIndex;
//                         const leftPercent = (idx / (3 - 1)) * 100;
//                         return (
//                           <div
//                             key={idx}
//                             className="flex flex-col items-center z-20"
//                             style={{
//                               position: 'absolute',
//                               left: `calc(${leftPercent}% - 60px)`,
//                               top: '50%',
//                               transform: 'translateY(-35%)',
//                               minWidth: '100px',
//                             }}
//                           >
//                             <div
//                               className={`w-12 h-12 flex items-center justify-center rounded-full border-2 mb-2
//                                 ${isCompleted ? 'bg-green-500 border-green-500 text-white' : isActive ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-300 text-gray-400'}`}
//                             >
//                               {isCompleted ? '✓' : idx + 1}
//                             </div>
//                             <div className="text-base font-3xl text-center whitespace-nowrap text-white">{step}</div>
//                           </div>
//                         )
//                       })}
//                     </div>
//                   </div>
//                 </div>

//                 {inlineStep === 1 && <ServiceSelection onNext={handleNextFromStep1} embedded textColorScheme="light" showTitle={false} />}
//                 {inlineStep === 2 && <Step2 onNext={handleNextFromStep2} onBack={handleBackToStep1} embedded textColorScheme="light" />}
//                 {inlineStep === 3 && <Step3 onBack={handleBackToStep2} onSuccess={handleSuccess} embedded textColorScheme="light" />}
//               </div>
//             </div>
//         </div>
//       </section>
 
//     </main>
//   )
// } 