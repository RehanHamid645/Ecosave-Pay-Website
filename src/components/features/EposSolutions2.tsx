'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, BarChart3, Layers, MapPin, AlignLeft } from "lucide-react";

interface InfoCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  isLarge?: boolean;
}

function InfoCard({ title, desc, icon, isLarge = false }: InfoCardProps) {
  return (
    <div className={`bg-white rounded-[2.5rem] p-8 flex flex-col shadow-sm ${isLarge ? 'h-full min-h-[700px]' : 'h-[340px]'}`}>
      <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-extrabold text-black mb-4 leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed font-medium">
          {desc}
        </p>
      </div>

      {isLarge && (
        <div className="mt-auto pt-10 relative w-full h-full min-h-[300px] flex items-center justify-center">
          <div className="relative w-full h-full max-h-[450px]">
            <Image
              src="/images/ecosave-pay-home-page/computer+card-machine.png" 
              alt="EPOS System Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function EposSolutionsGrid() {
  return (
    <section className="bg-[#5ed39d] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Text */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-8 tracking-tighter max-w-5xl mx-auto leading-[1.1]">
          Power Your Business with All-in-One <br className="hidden md:block" /> EPOS Solutions
        </h2>
        <p className="text-black text-lg md:text-xl font-medium max-w-4xl mx-auto mb-20 leading-relaxed">
          Streamline your entire business with our integrated EPOS systems. Manage payments, inventory, staff, and customer data seamlessly from one central, intelligent platform designed to boost efficiency and growth.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Column: Two Cards */}
          <div className="flex flex-col gap-8">
            <InfoCard
              title="Sector-Focused Payment Tools"
              desc="Customised payment and EPOS solutions for retail, dining, beauty, and hospitality — purpose-built for your sector."
              icon={<Check className="text-white w-6 h-6" />}
            />
            <InfoCard
              title="Actionable Customer Analytics"
              desc="Integrated loyalty programs, purchase tracking, and marketing tools to help you grow repeat business."
              icon={<BarChart3 className="text-white w-6 h-6" />}
            />
          </div>

          {/* Center Column: Large Image Card */}
          <div>
            <InfoCard
              isLarge
              title="Seamless Payment Integration"
              desc="Enjoy fully integrated payment processing within your EPOS system — no extra setup or separate providers required."
              icon={<AlignLeft className="text-white w-6 h-6" />}
            />
          </div>

          {/* Right Column: Two Cards */}
          <div className="flex flex-col gap-8">
            <InfoCard
              title="Fully Integrated Business Solution"
              desc="All-in-one till system with integrated payments, inventory control, and customer management."
              icon={<Layers className="text-white w-6 h-6" />}
            />
            <InfoCard
              title="Manage All Locations in One Dashboard"
              desc="Manage multiple locations from one dashboard with real-time data syncing across your entire business."
              icon={<MapPin className="text-white w-6 h-6" />}
            />
          </div>

        </div>
      </div>
    </section>
  );
}