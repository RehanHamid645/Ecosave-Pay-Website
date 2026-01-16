"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
<section className="relative bg-[url(/images/green-black-bg.png)] pt-20 lg:pt-32 pb-4 lg:pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

        {/* Hero Image */}
        <div className="pt-40 flex justify-center lg:justify-start">
          <Image
            src="/images/payment_bg.png"
            alt="Payment graphic"
            width={1400}
            height={1500}
            className="object-contain max-w-[1900px] h-auto drop-shadow-xl"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="text-white">
          <h1
            className="font-bold font-extrabold tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 5.5vw, 3.5rem)",
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
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full border-4 border-white text-lg font-semibold text-white hover:bg-white hover:text-black transition"
            >
              GET A QUOTE
            </Link>

            {/* SOLID GREEN BUTTON — START SAVING NOW */}
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-[#5ece6d] text-lg font-semibold text-white hover:bg-[#4fc45e] transition"
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
              className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center"
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
