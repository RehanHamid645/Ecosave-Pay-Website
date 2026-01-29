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
  LayoutDashboard,
  Smartphone,
  BarChart3,
  Store,
  Link as LinkIcon,
  QrCode,
  Send,
  ShieldCheck,
  MousePointerClick,
  Layout,
  Monitor,
  CreditCard,
  Settings
  
} from 'lucide-react';
import EposSolutionsGrid from '@/components/features/EposSolutions2';
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

// --- EPOS Sections ---

const EPOSHero = () => {
  const { openQuoteModal } = useQuote();
  
  return (
  <section className="bg-black text-white py-12 md:py-24 px-6 overflow-hidden relative">
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
      <Image
        src="/images/green-black-bg.png"
        alt="Green Gradient Background"
        fill
        style={{objectFit: 'cover'}}
        priority
        className="z-0 opacity-60"
      />
    </div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5ece6d] blur-[120px] rounded-full -mr-40 -mt-40 opacity-20 z-10" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20">
      <div>
        <span className="hidden md:inline-block bg-[#5ece6d] text-black px-4 py-1 rounded-full text-xs font-bold mb-4 md:mb-6 tracking-widest uppercase">
          EPOS Systems
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight md:leading-[1.05] mb-4 md:mb-8 mt-16 sm:mt-12 md:mt-20">
          EPOS Systems <br /> Built For <br /> UK Businesses
        </h1>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-xl leading-relaxed font-medium">
          All-in-one POS systems with built-in card readers, smart inventory tools, and live reporting to simplify your operations.
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
        
        <div className="hidden md:block mt-8 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4 md:mb-6">Accept all types of payment</p>
          <div className="grid grid-cols-3 md:flex gap-1.5 md:gap-4 items-center pb-4 md:ml-0">
            <WhitePillLogo src="/images/ecosave-pay-home-page/Apple_Pay_logo.svg.png" alt="Apple Pay" height={40} imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Google_Pay_Logo.svg.png" alt="Google Pay" height={40} imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Visa_Inc._logo.svg.png" alt ="Visa" height={40} imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/Diners_Club_Logo3.svg.png" alt ="Diners Club" height={40} imgWidth={50} imgHeight={20} />
            <WhitePillLogo src="/images/ecosave-pay-home-page/wechat.png" alt="WeChat Pay Logo" width={240} height={40} imgWidth={40} imgHeight={20} />
          </div>
        </div>
      </div>

      <div className="relative hidden lg:flex justify-center items-center">
        <div className="w-full aspect-square rounded-[3rem] items-center justify-center p-20 min-h-[900px] min-w-[900px] overflow-hidden mt-32">
          <Image
            src="/images/ecosave-pay-home-page/pos-image5.png"
            alt="EPOS hardware top-down view"
            width={900}
            height={900}
            className="object-contain"
            priority
          />
        </div>
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
          <button  className="bg-[#5ece6d] text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition">GET A QUOTE</button>
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

const EPOSInfo = () => (
  <section className="bg-white py-24 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative aspect-square bg-gray-100 rounded-[2.5rem] overflow-hidden">
        <Image
          src="/images/ecosave-pay-home-page/EposSystem.png"
          alt="EPOS software interface on tablet"
          fill
          style={{objectFit: 'cover'}}
          className="object-cover"
          priority
        />
      </div>
      
      <div>
        <p className="text-[#5ece6d] font-bold text-sm tracking-widest uppercase mb-4">What are EPOS Systems?</p>
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight mb-8">
          EPOS Solutions That <br /> Go Beyond Basic Checkout
        </h2>
        <p className="text-gray-600 text-lg font-medium mb-10 leading-relaxed">
          Unlock your business potential with a system that manages more than just payments. Our EPOS solutions integrate your sales, inventory, and staff management into one easy-to-use platform.
        </p>
        <div className="space-y-4">
          {[
            "Accept every payment type seamlessly",
            "Monitor stock and trigger automatic reorders",
            "Create detailed sales reports and insights",
            "Integrated staff scheduling and performance tracking"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
               <div className="text-[#5ece6d] font-bold">↗</div>
              <span className="font-bold text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
const WhyChooseEPOS = () => {
  const features = [
    {
      title: "Built In Payments",
      description: "Network-ready devices for quick, secure payments—installed by right at your location.",
      icon: <LinkIcon className="text-[#5ece6d] rotate-45" size={32} strokeWidth={2.5} />
    },
    {
      title: "QR Table Ordering",
      description: "Let customers place orders right from their tables via QR codes, easing staff workload.",
      icon: <QrCode className="text-[#5ece6d]" size={32} strokeWidth={2.5} />
    },
    {
      title: "Custom Layouts",
      description: "Manage table service effortlessly with dynamic floor plans that give you full visibility and control of your venue layout.",
      icon: <Layout className="text-[#5ece6d]" size={32} strokeWidth={2.5} />
    },
    {
      title: "Smart Kitchen Display",
      description: "Front-of-house and kitchen stay in sync with instant order updates from tills, tablets, and tablets, all integrated with the KDS.",
      icon: <Monitor className="text-[#5ece6d]" size={32} strokeWidth={2.5} />
    },
    {
      title: "Pay-at-Table Solutions",
      description: "Use our EPOS-enabled card machines to take payments right at the table. Faster service, shorter queues, and happier customers.",
      icon: <CreditCard className="text-[#5ece6d]" size={32} strokeWidth={2.5} />
    },
    {
      title: "Hardware Setup & Installation",
      description: "We take care of everything, from device delivery to full installation and network setup. Our UK-wide team gets your system up and running, ready to from daise day one.",
      icon: <Settings className="text-[#5ece6d]" size={32} strokeWidth={2.5} />
    }
  ];

  return (
    <section className="bg-gray-200 py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-[#5ece6d] font-bold text-sm tracking-widest uppercase mb-4">
            Why Choose Ecosave Pay
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-8">
            The Ecosave Pay EPOS
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-4xl mx-auto leading-relaxed">
            You'll receive expert installation, full training for your team, ongoing technical support, and clear pricing. 
            All included with a reliable point-of-sale system built to perform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Icon Container */}
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const StreamlineOperations = () => (
  <section className="bg-black py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
          Streamline Operations <br /> With Smart EPOS
        </h2>
        <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">
          Choose the smart EPOS that fits your world and works the way you do.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-2 italic">
              <span className="text-[#5ece6d]">Welcome</span>POS
            </h3>
            <p className="text-xl font-bold mb-4">Perfect for restaurants, cafes, bars, and takeaways</p>
            <p className="text-gray-600 font-medium mb-8">
              Simplify hospitality with smart table management, kitchen screens, and delivery integrations.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">✓ Table Management</span>
              <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">✓ Kitchen Displays</span>
            </div>
          </div>
       {/* <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
         <Image
          src="/images/ecosave-pay-home-page/pos-image1.png"
          alt="EPOS hospitality hardware mockup"
          fill
          style={{objectFit: 'contain'}}
          className="object-contain"
          priority
         />
       </div> */}
       <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
         <Image
           src="/images/ecosave-pay-home-page/pos-image1.png"
           alt="EPOS hospitality hardware mockup"
           width={420}
           height={236}
           className="object-contain w-auto h-full max-h-full max-w-full"
           priority
         />
       </div>
        </div>

        <div className="bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-2 italic">
              <span className="text-[#5ece6d]">Care</span>POS
            </h3>
            <p className="text-xl font-bold mb-4">Tailored for salons, spas, and beauty professionals</p>
            <p className="text-gray-600 font-medium mb-8">
              Streamline your beauty business with integrated appointment booking and rich customer profiles.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">✓ Scheduling Appointments</span>
            </div>
          </div>
       {/* <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
         <Image
          src="/images/ecosave-pay-home-page/pos-image2.png"
          alt="EPOS beauty hardware mockup"
          fill
          style={{objectFit: 'contain'}}
          className="object-contain"
          priority
         />
       </div> */}
       <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
         <Image
           src="/images/ecosave-pay-home-page/pos-image2.png"
           alt="EPOS beauty hardware mockup"
           width={420}
           height={236}
           className="object-contain w-auto h-full max-h-full max-w-full"
           priority
         />
       </div>
        </div>

         <div className="bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-2 italic">
              <span className="text-[#5ece6d]">Shop</span>POS
            </h3>
            <p className="text-xl font-bold mb-4">Designed for clothing stores, convenience shops, and everyday retail.</p>
            <p className="text-gray-600 font-medium mb-8">
              Run your retail business with confidence using advanced inventory control, flexible pricing tools, and variant tracking. Ideal for businesses that need detailed stock management and multiple price lists.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">✓ Scheduling Appointments</span>
            </div>
          </div>
          {/* <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
             <Image
              src="/images/ecosave-pay-home-page/pos-image3.png"
              alt="EPOS beauty hardware mockup"
              fill
              style={{objectFit: 'contain'}}
              className="object-contain"
              priority
             />
          </div> */}
           <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
             <Image
               src="/images/ecosave-pay-home-page/pos-image3.png"
               alt="EPOS beauty hardware mockup"
               width={420}
               height={236}
               className="object-contain w-auto h-full max-h-full max-w-full"
               priority
             />
           </div>
        </div>

         <div className="bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-2 italic">
              <span className="text-[#5ece6d]">Med</span>POS
            </h3>
            <p className="text-xl font-bold mb-4">Built for clinics, pharmacies, and healthcare practices.</p>
            <p className="text-gray-600 font-medium mb-8">
                Support compliance and streamline operations with appointment scheduling, patient management, prescription tracking, and healthcare-specific reporting tailored to meet the demands of medical environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">✓ Scheduling Appointments</span>
            </div>
          </div>
          {/* <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
             <Image
              src="/images/ecosave-pay-home-page/pos-image4.png"
              alt="EPOS beauty hardware mockup"
              fill
              style={{objectFit: 'contain'}}
              className="object-contain"
              priority
             />
          </div> */}
           <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
             <Image
               src="/images/ecosave-pay-home-page/pos-image4.png"
               alt="EPOS beauty hardware mockup"
               width={420}
               height={236}
               className="object-contain w-auto h-full max-h-full max-w-full"
               priority
             />
           </div>
        </div>

         <div className="bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-2 italic">
              <span className="text-[#5ece6d]">Flexe</span>POS
            </h3>
            <p className="text-xl font-bold mb-4">Tailored for your unique business needs</p>
            <p className="text-gray-600 font-medium mb-8">
                Every business is unique. That’s why FlexePOS adapts to your needs—with customisable features, tailored workflows, and bespoke integrations that fit your operations perfectly.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#5ece6d]/10 text-[#5ece6d] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">✓ Scheduling Appointments</span>
            </div>
          </div>
          {/* <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
             <Image
              src="/images/ecosave-pay-home-page/pos-image5.png"
              alt="EPOS beauty hardware mockup"
              fill
              style={{objectFit: 'contain'}}
              className="object-contain"
              priority
             />
          </div> */}
           <div className="flex-1 w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
             <Image
               src="/images/ecosave-pay-home-page/pos-image5.png"
               alt="EPOS beauty hardware mockup"
               width={420}
               height={236}
               className="object-contain w-auto h-full max-h-full max-w-full"
               priority
             />
           </div>
        </div>
      </div>
    </div>
  </section>
);




const EPOSFAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "Which card machines are best for small businesses?", a: "The S1 Mini2 and PAX A50 are top picks for UK small businesses. Lightweight and portable, the S1 Mini2 weighs just 155g and starts from £12.50/month on a 12-month plan, ideal for mobile services like market stalls, taxis, and trades. Both terminals support contactless, chip & PIN, and mobile payments, making transactions fast and flexible." },
    { q: "Are Ecosave card machines contactless?", a: "All Ecosave card machines are NFC-enabled for fast, tap-and-go payments. UK customers can pay using contactless cards, Apple Pay, Google Pay, Samsung Pay, and smartwatches. With contactless now the go-to method for most UK shoppers, our terminals help ensure every sale goes through—quickly and securely." },
    { q: "Can your card machines connect with till systems?", a: "Our card machines work with most UK EPOS systems, but our fully integrated solutions go further. By pairing our card terminals with EcoSave’s own EPOS till systems, you get seamless compatibility, unified support, and smooth performance." },
    { q: "Are Ecosave Pay card machines equipped with built-in printers?", a: "The PAX A920 Pro includes a built-in 80mm thermal printer for fast, on the spot receipts. Other models support external printers or offer email receipts sent straight to customers’ smartphones." },
    { q: "Can I purchase a card machine upfront?", a: "Yes, you can buy your card machine outright. The S1 Mini2 is available for a one-time cost of £79, with other models offered on purchase terms." },
    { q:"Which card reader works best for restaurants in the UK?", a:"The PAX A920 Pro is a top choice for UK hospitality venues, offering built-in receipt printing, strong 4G connectivity, and mobile payment functionality. It supports tipping, bill splitting, and links seamlessly with leading restaurant EPOS platforms. Its compact design lets staff process payments right at the table, enhancing service and efficiency."},
    { q:"Which card reader is best for taxis in the UK?",a:"The S1 Mini2 and PAX A50 are ideal for UK taxi drivers, thanks to their compact design, long-lasting battery, and dependable 4G connectivity. These portable terminals perform well in both city and rural settings, support all major payment types—including contactless—and offer instant receipts or digital alternatives for added passenger convenience."},
    { q:"Are card machines suitable for use at outdoor events and market stalls?",a:"Absolutely—our mobile card machines are perfect for UK outdoor markets, festivals, and pop-up events. With weather-resistant builds and strong 4G connectivity, they process payments smoothly without relying on local WiFi. Plus, their extended battery life keeps you trading all day at farmers markets and craft fairs."}
  ];
  

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 font-medium">Everything you need to know about our EPOS Solutions</p>
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

export default function EPOSSolutionsPage() {
  return (
    <main className="font-sans antialiased overflow-x-hidden">
      <EPOSHero />
      <EPOSInfo />
       <WhyChooseEPOS />
      <StreamlineOperations />
      <AddonsSection />
       <EposSolutionsGrid />
       <PaymentSolutionsSection/>
      <EPOSFAQ />
    </main>
  );
}