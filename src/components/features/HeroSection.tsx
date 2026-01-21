"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuote } from '@/contexts/QuoteContext';

export default function HeroSection() {
  const { openQuoteModal } = useQuote();
  return (
<section className="relative bg-[url(/images/green-black-bg.png)] pt-20 lg:pt-32 pb-4 lg:pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

        {/* Hero Image */}
        <div className="hidden lg:flex pt-40 justify-center lg:justify-start -ml-20 -mt-28">
          <Image
            src="/images/payment_bg.png"
            alt="Payment graphic"
            width={1800}
            height={1900}
            className="object-contain max-w-[2000px] h-auto drop-shadow-xl"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="text-white mt-8 sm:mt-0 lg:-mt-28">
          <h1
            className="font-bold font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Smarter Payment <br />
            Solutions to Power <br />
            <span className="text-[#5ece6d]">Your Business.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
            Whether you trade in-store or online, Ecosave Pay delivers everything
            you need to take payments seamlessly — from reliable card machines and
            full EPOS systems to secure payment gateways and virtual terminals. All
            from one trusted UK provider, helping you streamline transactions and
            drive business growth.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            {/* OUTLINE BUTTON — GET A QUOTE */}
            <Link href="/contact">
            <button
              className="px-10 py-4 rounded-full border-4 border-white text-lg font-semibold text-white hover:bg-white hover:text-black transition"
            >
              GET A QUOTE
            </button>
            </Link>

            {/* SOLID GREEN BUTTON — START SAVING NOW */}
            <Link
              href="/contact"
              className="px-10 py-4 pt-5 pb-3 rounded-full bg-[#5ece6d] text-lg font-semibold text-white hover:bg-[#4fc45e] transition"
            >
              START SAVING NOW
            </Link>
          </div>

          {/* ENERGY CTA */}
          <div className="mt-14 flex items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Looking for <br />
              <span className="text-[#5ece6d]">Smarter Energy Solutions?</span>
            </h2>

            <Link
              href="https://ecosavegasandpower.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center hover:bg-[#5ece6d] hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <Image
                src="/images/lightning-icon.png"
                width={60}
                height={60}
                alt="Energy Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
