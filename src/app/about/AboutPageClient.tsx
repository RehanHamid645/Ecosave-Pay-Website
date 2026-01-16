import React from 'react';
import Image from 'next/image';
import FAQSection from '@/components/features/FAQSection';

// --- Sub-components for About Page ---

/**
 * Section 1: Bento Grid Layout
 * Features the dark theme with radial glow and a 3-part grid.
 */
const RedefiningPayments = () => (
  <section className="bg-black text-white py-24 px-6 overflow-hidden relative min-h-[800px] flex items-center">
    {/* Background Glow Effect */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5ece6d] blur-[120px] rounded-full -mr-40 -mt-40 opacity-20 z-10" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
      <div>
        <span className="inline-block bg-white text-black px-6 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase shadow-sm">
          ABOUT ECOSAVE PAY
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-8">
          Redefining Payment <br /> Experiences
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
          We're payment solution specialists, built to help businesses accept payments efficiently and securely. 
          With a focus on innovation, simplicity, and support, we deliver reliable, cost-effective tools that grow with you.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 gap-4 w-full h-full mt-48">
        {/* Top Feature Box */}
        <div className="col-span-2 aspect-[16/8] bg-[#d9d9d9] rounded-[2.5rem] relative overflow-hidden" />
        
        {/* Bottom Left Box */}
        <div className="aspect-square bg-[#d9d9d9] rounded-[2.5rem] relative overflow-hidden" />
        
        {/* Bottom Right Box */}
        <div className="aspect-square bg-[#d9d9d9] rounded-[2.5rem] relative overflow-hidden" />
      </div>
    </div>
  </section>
);

/**
 * Section 2: Split Feature Layout
 * Features the brand green background and high-impact portrait visual.
 */
const WhoWeAre = () => (
  <section className="bg-[#6ec99c] py-24 px-6 min-h-[900px] flex items-center">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      {/* Visual Placeholder Column */}
      <div className="mt- 10 relative aspect-[4/5] bg-[#d9d9d9] rounded-[3rem] shadow-2xl overflow-hidden" />

      {/* Content Column */}
      <div className="text-white">
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6 opacity-90">
          Who We Are
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-10">
          Your trusted partner in secure, seamless payments
        </h2>
        
        <div className="space-y-8 text-lg font-medium leading-relaxed opacity-95">
          <p>
            EcoSave Pay is a next-generation payment solutions provider, offering smart, 
            secure tools for card machines, EPOS systems, online payments, and fintech 
            innovation across the UK. We're more than a payment processor, we're 
            passionate about reshaping how businesses get paid and how customers pay, 
            with simplicity, speed, and sustainability at the core.
          </p>
          <p>
            Founded with a mission to make payments easier and more ethical, 
            EcoSave Pay is built for modern businesses across hospitality, retail, 
            healthcare, and professional services, delivering flexible, future-ready 
            solutions that grow with you.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---

export default function AboutPage() {
  return (
    <main className="font-sans antialiased overflow-x-hidden">
      <RedefiningPayments />
      <WhoWeAre />
      <FAQSection/>
    </main>
  );
}