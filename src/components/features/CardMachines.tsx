'use client'

import Link from 'next/link'
import Image from 'next/image'

interface MachineProps {
  name: string
  desc: string
  img: string
  scale: number
  yOffset?: number
}

function CardMachine({ name, desc, img, scale, yOffset = 0 }: MachineProps) {
  return (
    <div className="bg-white rounded-[2.5rem] pt-12 px-8 flex flex-col h-[550px] overflow-hidden shadow-2xl">
      {/* Text Content */}
      <div className="text-left mb-0 z-10 relative">
        <h3 className="font-extrabold text-3xl text-black mb-3 tracking-tight">{name}</h3>
        <p className="text-[15px] text-gray-500 leading-snug font-medium max-w-[95%]">
          {desc}
        </p>
      </div>

      {/* Image Container - Reduced margin/gap to bring image closer to text */}
      <div className="relative flex-grow flex items-start justify-center mt-[-20px]"> 
        <div 
          className="relative w-full h-[520px]" 
          style={{ 
            transform: `scale(${scale}) translateY(${yOffset}px)`,
            transformOrigin: 'top center' // Changed to top center to pull image UP
          }}
        >
          <Image
            src={img}
            alt={name}
            fill
            className="object-contain object-top" // Changed to object-top
            sizes="(max-width: 768px) 100vw, 25vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}

const machines = [
  {
    name: 'PAX A920 Pro',
    desc: 'Compact all-in-one terminal with integrated receipt printer—ideal for retail counters and restaurant service.',
    img: '/images/ecosave-pay-home-page/a920-2.png',
    scale: 2.5,
    yOffset: 3, // Negative offset pulls it closer to text
  },
  {
    name: 'PAX A50',
    desc: 'Portable card terminal with built-in 4G—perfect for mobile traders, delivery services, and remote vendors.',
    img: '/images/ecosave-pay-home-page/AX50-2.png',
    scale: 2.6,
    yOffset: 38,
  },
  {
    name: 'PAX A35',
    desc: 'Compact countertop card terminal designed for retail spaces—ideal where space is limited but performance matters.',
    img: '/images/ecosave-pay-home-page/A35-2.png',
    scale: 1.05,
    yOffset: 55, 
  },
  {
    name: 'S1 Mini 2',
    desc: 'Portable card terminal available to buy upfront or rent on a flexible monthly plan.',
    img: '/images/ecosave-pay-home-page/S1MINI-2.png',
    scale: 1.85,
    yOffset: 55,
  },
]

export default function CardMachines() {
  return (
    <section className="bg-gradient-to-b from-black via-[#063b1d] to-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Link href="/payments/epos-systems">
            <button className="mb-8 bg-white text-black font-bold px-8 py-3 rounded-full text-xs tracking-[0.15em] hover:bg-gray-100 transition">
              → FACE TO FACE PAYMENTS
            </button>
          </Link>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Get Paid Faster With Ecosave Pay <br />Card Machines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machines.map((machine, index) => (
            <CardMachine
              key={index}
              name={machine.name}
              desc={machine.desc}
              img={machine.img}
              scale={machine.scale}
              yOffset={machine.yOffset}
            />
          ))}
        </div>
      </div>
    </section>
  )
}