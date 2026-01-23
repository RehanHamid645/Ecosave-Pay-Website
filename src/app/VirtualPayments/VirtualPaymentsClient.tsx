'use client'
import React, { useState } from 'react';
import StillHaveQuestions from '@/components/shared/StillHaveQuestions';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/contexts/QuoteContext';
import { 
  Check, 
  Zap, 
  Plus,
  Minus,
  Globe,
  Settings,
  ShieldCheck,
  MousePointerClick
} from 'lucide-react';
import PaymentTeamSection from '@/components/features/PaymentTeamSection';
// --- Shared Components ---
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

// --- Sections ---

const VirtualHero = () => {
  const { openQuoteModal } = useQuote();
  
  return (
  <section className="bg-black text-white py-12 md:py-24 px-6 overflow-hidden relative">
    {/* Background Image Placeholder */}
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none opacity-40">
      <Image
        src="/images/green-black-bg.png" 
        alt="Network Gradient Background"
        fill
        style={{objectFit: 'cover'}}
        priority
        className="z-0"
      />
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20">
      <div>
        <span className="hidden md:inline-block bg-[#5ece6d] text-black px-4 py-1 rounded-full text-xs font-bold mb-4 md:mb-6 tracking-widest uppercase">
          Virtual Terminals
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight md:leading-[1.05] mb-4 md:mb-8 mt-16 sm:mt-12 md:mt-20">
          Instant Phone <br /> 
          Payments Made <br /> 
          Simple
        </h1>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-xl leading-relaxed font-medium">
          Take secure card payments over the phone or by email. No hardware required — just log in and start getting paid instantly.
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
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4 md:mb-6">Accept all types of payment</p>
          <div className="grid grid-cols-3 md:flex gap-1.5 md:gap-4 items-center pb-4 md:ml-0">
            <WhitePillLogo src="/images/ecosave-pay-home-page/Apple_Pay_logo.svg.png" alt="Apple Pay" height={40} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Google_Pay_Logo.svg.png" alt="Google Pay" height={40} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Visa_Inc._logo.svg.png" alt ="Visa" height={40} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Diners_Club_Logo3.svg.png" alt ="Diners Club" height={40} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/wechat.png" alt="WeChat Pay Logo" width={240} height={40} imgWidth={40} imgHeight={30} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/samsung-pay-logo.png" alt="Samsung Pay Logo" height={40} imgHeight={110} imgWidth={110} />
          </div>
        </div>
      </div>

      <div className="relative hidden lg:flex justify-center">
        {/* Payment Form Image - moved even higher */}
        <div className="w-full -mt-44 flex justify-center">
          <Image
            src="/images/ecosave-pay-home-page/laptop.png"
            alt="Virtual Terminal Payment Form Screenshot"
            width={600}
            height={370}
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </div>
  </section>
  );
};

const RemotePaymentsInfo = () => (
  <section className="bg-white py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <p className="text-[#5ece6d] font-bold text-sm tracking-widest uppercase mb-4">What is a Virtual Terminal</p>
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight mb-8">
          Remote Payments <br /> Made Easy
        </h2>
        <div className="relative h-[500px] w-full bg-gray-100 rounded-[2.5rem] overflow-hidden mb-8">
          <Image
            src="/images/ecosave-pay-home-page/woman-on-laptop2.png"
            alt="Professional woman using laptop"
            fill
            style={{objectFit: 'cover'}}
            className="object-cover"
            priority
          />
        </div>
        <p className="text-gray-600 text-lg font-medium mb-10 leading-relaxed">
          A virtual payment terminal is a secure online card reader that works from any internet-connected device. 
          Ideal for phone orders and remote payments, it lets you accept card transactions instantly without 
          needing a physical machine.
        </p>
        <div className="space-y-4">
          {[
            "Accept card payments by phone with secure, real-time processing.",
            "No physical terminal or hardware required.",
            "Instant confirmation and email receipts for every payment.",
            "Built for any business, from retail to professional services."
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="bg-[#5ece6d]/10 p-1 rounded-full">
                <Check size={18} className="text-[#5ece6d]" />
              </div>
              <span className="font-bold text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BuiltForNeeds = () => (
  <section className="bg-slate-50 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#5ece6d] font-bold text-sm tracking-widest uppercase mb-4">Why Choose Ecosave Pay Virtual Terminal</p>
        <h2 className="text-4xl md:text-6xl font-black text-[#5ece6d] tracking-tighter leading-tight mb-8">
          Virtual Payments Built <br className="hidden md:block" /> Around Your Needs
        </h2>
        <p className="text-gray-500 text-lg font-medium max-w-3xl mx-auto">
          Upgrade your payment process with smart, integrated features built for today's business. 
          Boost efficiency and deliver standout customer experiences—all in one seamless solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
            <Zap className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Fast, Secure Transactions</h3>
            <p className="text-sm text-gray-600 font-medium">Accept payments in seconds with our easy-to-use interface. Just enter card details and get instant confirmation.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
            <MousePointerClick className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Single and Repeat Payments</h3>
            <p className="text-sm text-gray-600 font-medium">Support one-time payments and automated recurring billing for subscriptions and ongoing services.</p>
          </div>
        </div>

        
    <div className="relative h-[600px] bg-gray-200 rounded-[2.5rem] overflow-hidden">
      <Image
        src="/images/ecosave-pay-home-page/man-on-phone.png"
        alt="Man on phone using laptop"
        fill
        style={{objectFit: 'cover'}}
        className="object-cover"
        priority
      />
    </div>

        {/* Right Features */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
            <Globe className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Multiple Currencies</h3>
            <p className="text-sm text-gray-600 font-medium">Get paid in any currency. We handle the conversion to ensure your rates stay competitive globally.</p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm">
            <Settings className="text-black mb-6" size={32} />
            <h3 className="text-2xl font-extrabold mb-4">Fast Onboarding</h3>
            <p className="text-sm text-gray-600 font-medium">Virtual terminals cut payment delays by 89% and failed transactions by 67% compared to manual processes.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SimplifySection = () => (
  <section className="bg-black py-24 px-6 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-5xl font-black tracking-tighter mb-8 text-white">
          Simplify Remote <br /> Payments
        </h2>
        <p className="text-gray-400 text-lg font-medium mb-12 leading-relaxed">
          Our advanced virtual payment solution lets you manage bookings and accept payments from guests, 
          patients, and clients using any internet-connected device. Whether by phone, email, or mail order, 
          it delivers a smooth and secure experience for everyone.
        </p>

        <div className="space-y-6">
          <div className="flex gap-6 items-start border-l-4 border-[#5ece6d] pl-8">
            <p className="text-xl font-bold italic">
              "Boost revenue by 23% — 78% of our partners see smoother payment flows in just 3 months."
            </p>
          </div>
          <div className="flex gap-6 items-start border-l-4 border-[#5ece6d] pl-8">
            <p className="text-xl font-bold italic">
              "Virtual terminals cut payment delays by 89% and failed transactions by 67%."
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Link href="#VirtualFAQ">
            <button className="bg-[#5ece6d] text-black font-bold px-10 py-4 rounded-full">
                LEARN MORE
            </button>
          </Link>
        </div>
      </div>

      <div className="relative h-[550px] bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden">
        <Image
          src="/images/ecosave-pay-home-page/man-looking-busy.png"
          alt="Business professional using phone and laptop"
          fill
          style={{objectFit: 'cover'}}
          className="object-cover"
          priority
        />
      </div>
    </div>
  </section>
);

const VirtualFAQ = () => {
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
    <section id="VirtualFAQ" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-4">Common Questions</h2>
          <p className="text-gray-500 font-medium">Everything you need to know about Virtual Terminals</p>
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


export default function VirtualTerminalPage() {
  return (
    <main className="font-sans antialiased overflow-x-hidden">
      <VirtualHero />
      <RemotePaymentsInfo />
      <BuiltForNeeds />
      <SimplifySection />
      <PaymentTeamSection />
      <VirtualFAQ />
    </main>
  );
}