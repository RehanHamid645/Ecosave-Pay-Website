'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/contexts/QuoteContext';
import { ArrowUpRight, Zap, Network, Smartphone, CreditCard,LinkIcon,QrCode,Calendar} from 'lucide-react';
import FAQSection from '@/components/features/FaqSection';
import { useState } from 'react';
import PaymentTeamSection from '@/components/features/PaymentTeamSection';
import PaymentSolutionsSection from '@/components/features/FeaturesSection';
// --- Shared Components ---

// const WhitePillLogo = ({ src = '', alt = '', width = 120, height = 40 }) => (
//   <div className="bg-white rounded-full flex items-center justify-center shadow-sm px-6 h-10 min-w-[100px]">
//     {src ? (
//       <Image src={src} alt={alt} width={width} height={height} className="object-contain" />
//     ) : (
//       <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Logo</span>
//     )}
//   </div>
// );

// --- Sections ---

/**
 * Section 1: Online Payments Hero
 * Matches the style of your EPOS hero with the green glow and background image.
 */
const OnlinePaymentsHero = () => {
  const { openQuoteModal } = useQuote();
  
  return (
  <section className="bg-black text-white py-12 md:py-24 px-6 overflow-hidden relative min-h-[70vh] md:min-h-screen flex items-center">
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
      <Image
        src="/images/green-black-bg.png"
        alt="Background Gradient"
        fill
        className="object-cove z-0"
        priority
      />
    </div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5ece6d] blur-[120px] rounded-full -mr-40 -mt-40 opacity-20 z-10" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20">
      <div>
        <span className="inline-block bg-[#5ece6d]/20 text-[#5ece6d] border border-[#5ece6d]/30 px-4 py-1 rounded-full text-xs font-bold mb-4 md:mb-6 tracking-widest uppercase">
          Online Payments
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight md:leading-[1.05] mb-4 md:mb-8">
          Sell Anywhere With <br /> Seamless Payment <br /> Tech
        </h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-xl leading-relaxed font-medium">
          Send payment links, create QR codes, or embed full checkout—powered by Ecosave Pays smart online solution.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <Link href="/contact">
          <button className="bg-[#6ec99c] text-black font-bold px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 text-sm md:text-base">
            GET A QUOTE
          </button>
          </Link>
          <Link href="/SERVICES">
            <button className="border-2 border-[#6ec99c] text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-[#6ec99c]/10 transition-all text-sm md:text-base">
              OUR SERVICES
            </button>
          </Link>
        </div>
        
        {/* <div className="mt-20">
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-6">Accept all types of payment</p>
          <div className="flex gap-3 items-center flex-wrap">
            <WhitePillLogo alt="Apple Pay" />
            <WhitePillLogo alt="Google Pay" />
            <WhitePillLogo alt="Diners Club" />
            <WhitePillLogo alt="Alipay" />
            <WhitePillLogo alt="Visa" />
            <WhitePillLogo alt="Samsung Pay" />
          </div>
        </div> */}
      </div>

      <div className="relative hidden lg:flex justify-center items-center">
        <div className="w-full aspect-square relative">
            <Image 
                src="/images/ecosave-pay-home-page/online-payments-hero.png" 
                alt="Payment Interface Mockup" 
                fill 
                className="object-contain"
            />
        </div>
      </div>
    </div>
  </section>
  );
};

/**
 * Section 2: Why Choose Our Payment Gateway
 * Grid of 4 feature cards with black icons.
 */
const WhyChooseGateway = () => (
  <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-radial-gradient from-[#5ece6d]/10 to-transparent opacity-50" />
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <p className="text-[#5ece6d] text-xs font-bold tracking-[0.2em] uppercase mb-6">Why Choose Our Payment Gateway</p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8 max-w-4xl mx-auto">
        Designed for UK businesses that demand dependable payment processing
      </h2>
      <p className="text-gray-400 text-lg font-medium mb-16 max-w-2xl mx-auto">
        Whether you need simple payment links or seamless store integration, our gateway delivers speed, security, and growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Quick to set up",
            desc: "Get started in minutes with our intuitive setup and robust developer resources—built to support fast, seamless integration.",
            icon: Network,
            cite: ""
          },
          {
            title: "Flexible ways to collect payments",
            desc: "Flexible payment options: send links, use QR codes, embed buttons, or integrate checkout.",
            icon: Zap,
            highlight: false,
            cite: ""
          },
          {
            title: "Mobile-optimised",
            desc: "Your payment pages are fully responsive, automatically adjusting to any screen size. Whether it's a phone, tablet, or desktop, ensuring smooth, secure transactions for every customer.",
            icon: Smartphone,
            cite: ""
          },
          
            {
            title: "Get paid in seconds",
            desc: "No more chasing payments, customers pay instantly with one click.",
            icon: CreditCard,
            cite: ""
          }
        ].map((card, idx) => (
          <div 
            key={idx} 
            className={`p-12 rounded-[2.5rem] text-left flex flex-col justify-between min-h-[400px] ${
              card.highlight ? 'bg-white text-black' : 'bg-white text-black'
            }`}
          >
            <div>
              <h3 className="text-3xl font-black tracking-tighter mb-6">{card.title} {card.cite}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{card.desc} {card.cite}</p>
            </div>
            <div className="flex justify-end">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                {card.icon && <card.icon className="text-white" size={24} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/**
 * Section 3: Instant Payments Made Simple
 * Split layout with overlapping mobile mockups.
 */
const InstantPaymentsSimple = () => (
  <section className="bg-gray-50 py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#6ec99c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Power Your Business Payments</p>
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">Instant payments made simple</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] w-full">
           {/* Placeholder for the 3 overlapping iPhone mockups */}
           <div className="absolute inset-0 bg-zinc-200 rounded-[3rem] animate-pulse" />
           <Image 
                src="/images/ecosave-pay-home-page/phone-mockup.png"
                alt="Mobile Payment Mockups"
                fill
                className="object-contain"
            />
        </div>

        <div className="space-y-10">
          <p className="text-gray-600 text-xl font-medium leading-relaxed">
            Our all-in-one payment gateway covers everything for professional payment collection. 
            Send instant links, generate QR codes, or integrate advanced checkout into your online store seamlessly.
          </p>
          
          <ul className="space-y-6">
            {[
              "Share secure payment links in seconds",
              "Connect seamlessly with your current eCommerce platform",
              "Simplify subscriptions and repeat billing with ease",
              "Support global customers with multi-currency payments"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="text-black group-hover:text-[#6ec99c]" size={24} />
                </div>
                <span className="text-lg font-black text-black tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
// --- Sections ---

/**
 * Section: Instant Payments (Tabbed Interface)
 * Handles the logic for "Send Payment Links", "Create QR", and "Consistent Payments"
 */
const InstantPaymentsTabbed = () => {
  const [activeTab, setActiveTab] = useState('links');

  const tabs = [
    {
      id: 'links',
      label: 'SEND PAYMENT LINKS',
      icon: <LinkIcon size={18} />,
      title: 'Instant Payment Links',
      description: 'Send secure, trackable payment links through your preferred channels, each one directs customers to a protected payment page.',
      image: '/images/ecosave-pay-home-page/card-and-laptop.png', 
      bullets: [
        'Share via WhatsApp for instant messaging',
        'Post on Facebook for social commerce',
        'Send through Messenger for customer service',
        'Text via SMS for fast payment requests'
      ]
    },
    {
      id: 'qr',
      label: 'CREATE QR',
      icon: <QrCode size={18} />,
      title: 'Instant QR Code Payments',
      description: 'Bridge the gap between physical and digital transactions with fast, scannable QR codes.',
      image: '/images/ecosave-pay-home-page/qr-code-scanning.jpg', 
      bullets: [
        'Unique QR codes for every transaction',
        'Display on screens, receipts, or digital platforms',
        'Customers scan and pay instantly with their phone',
        'Ideal for in-person payments, pop-ups, and events'
      ]
    },
    {
      id: 'consistent',
      label: 'CONSISTENT PAYMENTS',
      icon: <Calendar size={18} />,
      title: 'Automate your billing',
      description: 'Automate your billing with customizable payment links—set the frequency, amount, and duration, and let the system do the rest.',
      image: '/images/ecosave-pay-home-page/woman-on-laptop2.png', 
      bullets: [
        'Set up automatic recurring payments via secure links',
        'Ideal for subscriptions, memberships, and ongoing services',
        'One-time customer authorization, seamless repeat collection',
        'Easily manage billing cycles from your dashboard'
      ]
    }
  ];

  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#eefaf3] text-[#6ec99c] px-6 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
            PAYMENT LINK
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#6ec99c] tracking-tighter mb-6">
            Instant payments from anywhere
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Ideal for businesses that want to collect payments and no complex checkout required. 
            Create and share requests in seconds.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start min-h-[500px]">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 p-6 rounded-2xl transition-all border-2 text-left shadow-sm ${
                  activeTab === tab.id 
                  ? 'border-[#6ec99c] text-[#6ec99c] bg-white' 
                  : 'border-black text-black bg-white hover:border-gray-200'
                }`}
              >
                <span className={activeTab === tab.id ? 'text-[#6ec99c]' : 'text-gray-400'}>
                  {tab.icon}
                </span>
                <span className="font-bold text-sm tracking-wider uppercase">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full lg:w-2/3 bg-gray-50 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-black text-black tracking-tight leading-tight">
                {current.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                {current.description}
              </p>
              <ul className="space-y-4">
                {current.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span className="text-gray-800 font-bold text-sm leading-tight">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative aspect-square w-full max-w-[350px] rounded-[2rem] overflow-hidden shadow-xl bg-gray-200">
               <Image 
                  key={activeTab}
                  src={current.image} 
                  alt={current.title}
                  fill
                  className="object-cover"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/**
 * Section 4: Built to Integrate
 * Feature cards for various integration methods.
 */
const BuiltToIntegrate = () => (
  <section className="bg-black text-white py-24 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <span className="inline-block bg-[#1e2923] text-[#6ec99c] px-6 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase">
        Payment Gateway Integration
      </span>
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Built to integrate with your <br /> tools, your way.</h2>
      <p className="text-gray-400 text-lg font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
        From WooCommerce and Magento to PHP, C#, and modern JS frameworks, 
        our tools plug in fast for secure online payments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full width top card */}
        <div className="md:col-span-2 bg-[#e6fff2] p-12 rounded-[2.5rem] text-left">
          <h3 className="text-[#6ec99c] text-3xl font-black tracking-tighter mb-8">Integration Made Easy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 font-bold mb-4">Hosted & Custom Integration:</p>
              <p className="text-gray-600 font-medium">Easily embed our secure payment button into your website. This means no heavy coding required.</p>
            </div>
            <div>
              <p className="text-gray-800 font-bold mb-4">Plugin Solutions:</p>
              <p className="text-gray-600 font-medium">Prebuilt integrations for WooCommerce, Shopify, Magento, and more, set up in just minutes.</p>
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        {[
          { 
            title: "Managed Integration", 
            cite: "",
            content: "Launch fast with our secure, customisable checkout—no need to handle card data yourself.", 
            list: ["PCI-compliant by default", "Optimised for mobile and desktop", "Choose between redirect or embedded checkout"] 
          },
          { 
            title: "Straightforward Integration", 
            cite: "",
            content: "Take full control with direct API access. Our robust documentation and real-world code examples make integration fast, flexible, and developer-friendly.", 
            list: ["SDKs available for popular languages", "Clear, step-by-step documentation with example requests"] 
          },
          { 
            title: "Developer SDKs", 
            cite: "",
            content: "Send secure, trackable payment links through your preferred channels, each one directs customers to a protected payment page." 
          },
          { 
            title: "Mobile Integration", 
            cite: "",
            content: "Send secure, trackable payment links through your preferred channels, each one directs customers to a protected payment page." 
          }
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-12 rounded-[2.5rem] text-left flex flex-col">
            <h3 className="text-[#6ec99c] text-2xl font-black mb-6">{card.title} {card.cite}</h3>
            <p className="text-gray-600 font-medium mb-6 leading-relaxed">{card.content} {card.cite}</p>
            {card.list && (
              <ul className="space-y-3 mb-8">
                {card.list.map((item, i) => (
                  <li key={i} className="text-gray-800 font-bold flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    {item} {card.cite}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto">
              <button className="border border-[#6ec99c] text-[#6ec99c] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#6ec99c] hover:text-white transition-all">
                Explore Documentation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/**
 * Section 5: Developer Portal
 * Yellow background section with laptop mockup.
 */
const DeveloperPortal = () => (
  <section className="bg-gray-100 py-24 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
          Payment Gateway Integration
        </span>
        <h2 className="mt-20 text-5xl md:text-7xl font-black text-black tracking-tighter leading-[1.1]">Developer Portal</h2>
        <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
          Built for developers. Access code samples, test requests and responses, plus test card data. 
          All the tools developers need to connect with and enhance our payment processing service.
        </p>
      </div>

      <div className="flex-1 w-full aspect-[4/3] bg-[#fccf3e] rounded-[3rem] p-12 flex items-center justify-center relative">
        <Image
            src="/images/ecosave-pay-home-page/laptop-yellow.png"
            alt="Developer Portal Mockup"
            fill
            className="object-contain"
        />
      </div>
    </div>
  </section>
);

// --- Main Page ---

export default function OnlinePaymentsPage() {
  return (
    <main className="font-sans antialiased overflow-x-hidden">
      <OnlinePaymentsHero />
      <WhyChooseGateway />
      <InstantPaymentsSimple />
      <InstantPaymentsTabbed />
      <BuiltToIntegrate />
      <DeveloperPortal />
      <PaymentTeamSection/>
      <PaymentSolutionsSection/>
      <FAQSection/>
    </main>
  );
}