'use client'

import React, { useState } from 'react';
import StillHaveQuestions from '@/components/shared/StillHaveQuestions';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/contexts/QuoteContext';
import { 
  Check, 
  ChevronDown, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Plus,
  Minus,
  CreditCard,
  History,
  Clock,
  UserCheck
} from 'lucide-react';
import PaymentSolutionsSection from '@/components/features/FeaturesSection';

type WhitePillLogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  imgWidth?: number;
  imgHeight?: number;
};

const WhitePillLogo = ({
  src = '',
  alt = 'Logo Placeholder',
  width = 240,
  height = 44,
  imgWidth = 90,
  imgHeight = 32,
}: WhitePillLogoProps) => (
  <div
    className="bg-white rounded-full flex items-center justify-center shadow-sm px-2 md:px-8"
    style={{ 
      width: `${width}px`,
      height: `${height}px`,
      minWidth: `${width}px`
    }}
  >
    {src ? (
      <Image 
        src={src} 
        alt={alt} 
        width={imgWidth}
        height={imgHeight}
        className="object-contain w-auto h-auto" 
      />
    ) : (
      <span className="text-gray-400 text-xs font-semibold">Logo</span>
    )}
  </div>
);

const HeroSection = () => {
  const { openQuoteModal } = useQuote();
  
  return (
  <section className="bg-black text-white py-12 md:py-24 px-6 overflow-hidden relative">
    {/* Green gradient image background */}
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
      <Image
        src="/images/green-black-bg.png"
        alt="Green Gradient Background"
        fill
        style={{objectFit: 'cover'}}
        priority
        quality={100}
        className="z-0"
      />
    </div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5ece6d] blur-[120px] rounded-full -mr-40 -mt-40 opacity-20 z-10" />
    
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20">
      <div>
        <span className="hidden md:inline-block bg-[#5ece6d] text-black px-4 py-1 rounded-full text-xs font-bold mb-4 md:mb-6 tracking-widest uppercase">
          Face to Face Payments
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight md:leading-[1.05] mb-4 md:mb-8 mt-16 sm:mt-12 md:mt-20">
          Get Paid Faster with <br />
          Ecosave Pay Card <br /> Machines
        </h1>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-xl leading-relaxed font-medium">
          Equip your business with reliable, high-performance card machines designed for every environment — 
          from retail and hospitality to mobile and self-service setups.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <Link href="/contact">
          <button className="bg-[#5ece6d] text-black font-bold px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 text-sm md:text-base">
            GET A QUOTE
          </button>
          </Link>
          <Link href="/SERVICES">
            <button className="border-2 border-white/20 text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-white/10 transition-all text-sm md:text-base">
              OUR SERVICES
            </button>
          </Link>
        </div>
        
        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
            <p className="hidden md:block text-xs font-bold text-gray-500 tracking-widest uppercase mb-4 md:mb-6">Accept all type of payments</p>
          <div className="grid grid-cols-3 md:flex gap-1.5 md:gap-4 items-center pb-4 md:ml-0">
            <WhitePillLogo src="/images/ecosave-pay-home-page/Apple_Pay_logo.svg.png" alt="Apple Pay Logo" imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Alipay_logo.svg.png" alt="Alipay Logo" imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Visa_Inc._logo.svg.png" alt ="Visa Logo" imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Google_Pay_Logo.svg.png" alt="Google Pay Logo" imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/wechat.png" alt="WeChat Pay Logo" width={240} height={40} imgWidth={40} imgHeight={20} />
          </div>
        </div>
      </div>

      <div className="relative hidden lg:flex justify-center items-center">
        <Image
          src="/images/ecosave-pay-home-page/Card-machine.png"
          alt="Card machine"
          width={500}
          height={550}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  </section>
  );
};

const FeatureGrid = () => (
  <section className="bg-[#5ece6d] py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-white font-bold text-sm tracking-widest uppercase mb-4">Power up your payment processing</p>
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight mb-8">
          Next-Generation Payment Terminal <br /> Solutions for UK Businesses
        </h2>
        <p className="text-white text-lg font-medium max-w-3xl mx-auto">
          Unlock the potential of advanced payment technology designed to accelerate growth and enhance customer satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div className="bg-white p-10 rounded-[2.5rem] h-[350px]">
            <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center mb-6 text-white font-bold">!</div>
            <h3 className="text-2xl font-extrabold mb-4">Capture Every Sale Opportunity</h3>
            <p className="text-sm text-gray-600 font-medium">With over 85% of UK consumers preferring to pay by card, never miss a sale even when customers go cashless.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] h-[350px]">
            <Zap className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Scale Without Limits</h3>
            <p className="text-sm text-gray-600 font-medium">Whether you're in-store, on the move, or at events, our mobile card machines give you freedom to grow.</p>
          </div>
        </div>

        <div className="bg-black text-white p-10 rounded-[2.5rem] flex flex-col justify-between h-full">
          <div>
            <Smartphone className="mb-6 text-[#5ece6d]" size={40} />
            <div className="mb-6 flex justify-center items-center">
              <Image
                src="/images/ecosave-pay-home-page/tapping-card.png"
                alt="Tapping card"
                width={350}
                height={220}
                className="object-contain drop-shadow-xl"
              />
            </div>
            <h3 className="text-4xl font-black mb-6">Accelerate Checkout and Serve More Customers</h3>
            <p className="text-gray-400 font-medium">Our terminals process payments in under three seconds, keeping queues short and customers satisfied.</p>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white p-10 rounded-[2.5rem] h-[350px]">
            <ShieldCheck className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Seamless Sales Tracking</h3>
            <p className="text-sm text-gray-600 font-medium">Access clear, accurate transaction data for every sale. Automated reporting simplifies your bookkeeping.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] h-[350px]">
            <Check className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Boost Loyalty and Repeat Business</h3>
            <p className="text-sm text-gray-600 font-medium">Drive customer retention with built-in support for gift cards and loyalty programs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TerminalList = () => {
  const terminals = [
    { name: "PAX A920 PRO", desc: "Advanced all-in-one mobile terminal.", features: ["4G SIM and WiFi enabled", "Integrated thermal printer", "Durable battery"], img: "/images/ecosave-pay-home-page/A920-DUO.png" },
  { name: "PAX A50", desc: "The ideal portable card machine for businesses on the move.", features: ["Wireless SIM and WiFi", "Compact mobile design", "Eco Friendly"], img: "/images/ecosave-pay-home-page/AX50-DUO.png", imgWidth: 350, imgHeight: 350 },
    { name: "PAX A35", desc: "Reliable wired card terminal built for fast, secure payments.", features: ["WiFi and SIM connectivity", "Numeric keypad for secure PIN", "Space-saving design"], img: "/images/ecosave-pay-home-page/A35-DUO.png",imgWidth: 500, imgHeight: 500 },
    { name: "S1 MINI 2", desc: "Our ultra-compact card machine, built for maximum mobility.", features: ["Wireless SIM and WiFi", "Ultra-compact, pocket-sized", "Lightweight build"], img: "/images/ecosave-pay-home-page/s1mini-duo.png",imgWidth: 450,imgHeight:400 },
  ];

  return (
    <section className="bg-black py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#5ece6d] font-bold text-sm tracking-widest uppercase mb-4">Our Card Machines</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Find the Ideal Payment <br /> Terminal for Your Business</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {terminals.map((item, idx) => (
            <div key={idx} className="bg-white text-black rounded-[3rem] p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  width={item.imgWidth || 400} 
                  height={item.imgHeight || 400} 
                  className={`object-contain ${item.name === "PAX A35" ? 'scale-125 -ml-8 md:scale-100 md:ml-0 mx-auto' : 'mx-auto'}`}
                />
              </div>
              <div className={idx % 2 !== 0 ? 'md:order-1' : ''}>
                <span className="text-[#5ece6d] font-black text-2xl mb-2 block">{item.name}</span>
                <p className="text-xl font-bold mb-6 text-gray-800">{item.desc}</p>
                <ul className="space-y-4 mb-8">
                  {item.features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-medium text-gray-600">
                      <Check size={18} className="text-[#5ece6d]" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                   <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-1.5 rounded-full text-xs font-bold uppercase">Suitable for EPOS</span>
                   <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-1.5 rounded-full text-xs font-bold uppercase">Wireless Terminal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AddonsSection = () => {
  const { openQuoteModal } = useQuote();
  
  return (
  <section className="bg-black text-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black tracking-tighter mb-6">Upgrade Your Checkout Experience</h2>
        <p className="text-gray-400 font-medium text-lg">Boost your in-person service with smart add-ons that elevate customer experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Gift Cards", img: "/images/ecosave-pay-home-page/gift-card.png", desc: "Drive growth with a smart tool that increases sales and brings in new customers." },
          { title: "Payment Loyalty", img: "/images/ecosave-pay-home-page/loyalty-card.png", desc: "Offer instant loyalty rewards directly at the till, with no added tech." },
          { title: "Terminal Care", img: "/images/ecosave-pay-home-page/transaction.png", desc: "Ensure your hardware is always covered and working at peak performance." }
        ].map((addon) => (
          <div key={addon.title} className="group">
            <Image src={addon.img} alt={addon.title} width={400} height={400} className="object-cover rounded-2xl w-full h-[300px]" />
            <h3 className="text-2xl font-black mt-8 mb-4">{addon.title}</h3>
            <p className="text-gray-400 font-medium leading-relaxed">{addon.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-[#1a1c23] border border-white/5 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-[#5ece6d] text-3xl font-black mb-2">Accept payments effortlessly</h3>
          <p className="text-gray-400 font-medium">Easy setup, instant payment processing</p>
        </div>
        <div className="flex gap-4">
          <Link href="/contact">
            <button className="bg-[#5ece6d] text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition">GET A QUOTE</button>
          </Link>
          <Link href="/SERVICES">
            <button className="border border-white/20 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition">OUR SERVICES</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

// --- NEW SMARTER PROCESSING SECTION (Switch to Smarter Section) ---
const SmarterProcessingSection = () => (
  <section className="bg-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#5ece6d] font-black text-xs tracking-[0.2em] uppercase mb-4">Why choose Ecosave Pay</p>
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-tight mb-8">
          Switch to smarter payment processing <br className="hidden md:block" /> that saves and earns
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Large Left Card */}
        <div className="bg-black text-white p-12 rounded-[2.5rem] flex flex-col justify-between">
          <div>
            <h3 className="text-[#5ece6d] text-3xl font-black mb-6">Smart Terminal Solutions</h3>
            <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-md">
              Upgrade to next-generation card machines with faster transactions, improved reliability, and smart business tools built-in.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
             <Image 
                src="/images/ecosave-pay-home-page/terminal-hand.png" 
                alt="Terminals" 
                width={400} 
                height={300} 
                className="object-contain"
             />
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-black text-white p-10 rounded-[2.5rem] flex flex-col gap-4">
            <History className="text-[#5ece6d]" size={32} />
            <h3 className="text-[#5ece6d] text-2xl font-black">Easy Billing & Statements</h3>
            <p className="text-gray-400 font-medium text-sm">Know exactly where your money goes. Transparent billing with itemised breakdowns and fee comparisons.</p>
          </div>
          
          <div className="bg-black text-white p-10 rounded-[2.5rem] flex flex-col gap-4">
            <Zap className="text-[#5ece6d]" size={32} />
            <h3 className="text-[#5ece6d] text-2xl font-black">Quick Card Machine Setup & Switching</h3>
            <p className="text-gray-400 font-medium text-sm">Switch seamlessly. Our specialists handle migration so you&apos;re taking payments in under 48 hours.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-black text-white p-8 rounded-[2.5rem] flex flex-col gap-4">
                <Clock className="text-[#5ece6d]" size={28} />
                <h3 className="text-[#5ece6d] text-xl font-black">Daily Support</h3>
                <p className="text-gray-400 text-xs font-medium">Need help? Our UK-based support team is available 7 days a week.</p>
             </div>
             <div className="bg-black text-white p-8 rounded-[2.5rem] flex flex-col gap-4">
                <UserCheck className="text-[#5ece6d]" size={28} />
                <h3 className="text-[#5ece6d] text-xl font-black">Honest Pricing</h3>
                <p className="text-gray-400 text-xs font-medium">Transparent payment rates with no hidden fees or unexpected changes.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Which card machines are best for small businesses?", a: "The S1 Mini2 and PAX A50 are top picks for UK small businesses. Lightweight and portable, the S1 Mini2 weighs just 155g and starts from £12.50/month on a 12-month plan, ideal for mobile services like market stalls, taxis, and trades. Both terminals support contactless, chip & PIN, and mobile payments, making transactions fast and flexible." },
    { q: "Are Ecosave card machines contactless?", a: "All Ecosave card machines are NFC-enabled for fast, tap-and-go payments. UK customers can pay using contactless cards, Apple Pay, Google Pay, Samsung Pay, and smartwatches. With contactless now the go-to method for most UK shoppers, our terminals help ensure every sale goes through—quickly and securely." },
    { q: "Can your card machines connect with till systems?", a: "Our card machines work with most UK EPOS systems, but our fully integrated solutions go further. By pairing our card terminals with EcoSave’s own EPOS till systems, you get seamless compatibility, unified support, and smooth performance." },
    { q: "Are Ecosave Pay card machines equipped with built-in printers?", a: "The PAX A920Pro includes a built-in 80mm thermal printer for fast, on the spot receipts. Other models support external printers or offer email receipts sent straight to customers’ smartphones." },
    { q: "Can I purchase a card machine upfront?", a: "Yes, you can buy your card machine outright. The S1 Mini2 is available for a one-time cost of £79, with other models offered on purchase terms." },
    { q:"Which card reader works best for restaurants in the UK?", a:"The PAX A920Pro is a top choice for UK hospitality venues, offering built-in receipt printing, strong 4G connectivity, and mobile payment functionality. It supports tipping, bill splitting, and links seamlessly with leading restaurant EPOS platforms. Its compact design lets staff process payments right at the table, enhancing service and efficiency."},
    { q:"Which card reader is best for taxis in the UK?",a:"The S1 Mini2 and PAX A50 are ideal for UK taxi drivers, thanks to their compact design, long-lasting battery, and dependable 4G connectivity. These portable terminals perform well in both city and rural settings, support all major payment types—including contactless—and offer instant receipts or digital alternatives for added passenger convenience."},
    { q:"Are card machines suitable for use at outdoor events and market stalls?",a:"Absolutely—our mobile card machines are perfect for UK outdoor markets, festivals, and pop-up events. With weather-resistant builds and strong 4G connectivity, they process payments smoothly without relying on local WiFi. Plus, their extended battery life keeps you trading all day at farmers markets and craft fairs."}
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 font-medium">Get Instant Answers To Your Payment Questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-0 pb-4">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-xl font-bold text-black">{faq.q}</span>
                {open === idx ? <Minus className="text-[#5ece6d]" /> : <Plus />}
              </button>
              {open === idx && (
                <div className="pb-6 text-gray-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <StillHaveQuestions />
        </div>
      </div>
    </section>
  );
};

export default function FaceToFacePage() {
  return (
    <main className="font-sans antialiased overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <TerminalList />
      <AddonsSection />
      <SmarterProcessingSection />
      <PaymentSolutionsSection />
      <FAQSection />
    </main>
  );
}