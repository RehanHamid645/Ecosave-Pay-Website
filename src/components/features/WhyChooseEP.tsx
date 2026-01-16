"use client";

import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  desc: string;
  className?: string;
  children?: React.ReactNode;
}

function FeatureCard({ title, desc, className = "", children }: FeatureCardProps) {
  return (
    <div className={`bg-[#f8f9fa] rounded-[2rem] p-10 flex flex-col shadow-sm ${className}`}>
      <div className="text-left">
        <h3 className="text-2xl font-extrabold text-black mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-[16px] text-gray-600 leading-relaxed font-medium mb-6">
          {desc}
        </p>
      </div>
      {children}
    </div>
  );
}

export default function WhyChooseEcosave() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="text-[#5ece6d] font-bold text-sm tracking-widest uppercase mb-4">
            Why Choose Ecosave Pay for Your Business
          </h4>
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-8 tracking-tighter leading-tight">
            Payment Solutions Built for <br /> Your Business
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            Our payment processing solutions are built around what matters most to UK businesses — 
            transparent pricing, fast payouts, reliable technology, and dedicated support.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column - Large Sales Card */}
          <FeatureCard
            title="Sales-Boosting Packages"
            desc="All-in-one payment packages with terminals, gift cards, and loyalty tools to help you increase sales and keep customers coming back."
            className="row-span-2"
          >
            <div className="space-y-4 mt-auto">
              {/* Placeholder images for the three landscape shots */}
              <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/ecosave-pay-home-page/image-transaction.png" alt="Coffee" fill className="object-cover" />
              </div>
              <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/ecosave-pay-home-page/typing.png" alt="Terminal" fill className="object-cover" />
              </div>
              <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/ecosave-pay-home-page/handling-package.png" alt="Delivery" fill className="object-cover" />
              </div>
            </div>
          </FeatureCard>

          {/* Right Column - Top (Pricing) */}
          <FeatureCard
            title="Honest, Transparent Pricing"
            desc="Enjoy clear, consistent pricing with no hidden fees or unexpected rate changes. Our transparent payment rates make it easy to budget confidently and understand exactly what you're paying for."
          />

          {/* Right Column - Bottom (Support) */}
          <FeatureCard
            title="UK-Based Support That Cares"
            desc="Get help from real UK-based experts, seven days a week. Our team offers extended-hour support with no overseas call centres — just friendly, knowledgeable assistance whenever you need it."
          />

          {/* Bottom Row - Protection */}
          <FeatureCard
            title="Advanced PCI-Compliant Protection"
            desc="Protect your business and customers with bank-level PCI PTS 5.x certified security. Our advanced encryption and compliance standards keep every transaction fully protected and secure."
          />

          {/* Bottom Row - Payment Methods */}
          <FeatureCard
            title="Stay Ready for Every Payment Method"
            desc="Accept every major payment type — from chip & PIN and contactless to mobile wallets like Apple Pay and Google Pay. Stay flexible, stay fast, and never miss a sale again."
          />
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-[#5ed39d] mt-20 py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-sm">Ready to Revolutionise How You Get Paid?</h2>
        <p className="text-white text-lg md:text-2xl mb-10 max-w-2xl mx-auto">Get the best rates, faster payments, and real support for your business.</p>
        <button className="bg-white text-black font-semibold text-xl px-10 py-4 rounded-2xl shadow hover:opacity-90 transition">GET A QUOTE</button>
      </div>
    </section>
  );
}