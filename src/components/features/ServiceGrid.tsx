'use client'

import {Zap, Flame, GlassWater, Trash, CreditCard } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from '@/components/shared/Card'
import Badge from '@/components/shared/Badge'

const services = [
  {
    title: 'Electricity',
    description: 'Compare business electricity rates and find the best deals for your company.',
    icon: Zap,
    href: '/energy',
    color: 'bg-yellow-500',
    badge: {
      text: 'Save up to 50%',
      variant: 'success' as const,
    }
  },
  {
    title: 'Gas',
    description: 'Compare business gas rates and find the best deals for your company.',
    icon: Flame,
    href: '/energy',
    color: 'bg-gray-500',
    badge: {
      text: 'Save up to 50%',
      variant: 'success' as const,
    }
  },
  {
    title: 'Water',
    description: 'Compare business water rates and find the best deals for your company.',
    icon: GlassWater,
    href: '/water',
    color: 'bg-blue-500',
    badge: {
      text: 'Fixed Price',
      variant: 'info' as const,
    }
  },
  {
    title: 'Waste Management',
    description: 'Compare business waste rates and find the best deals for your company.',
    icon: Trash,
    href: '/waste',
    color: 'bg-green-500',
    badge: {
      text: 'No Hidden Charges',
      variant: 'success' as const,
    }
  },
  {
    title: 'Card services',
    description: 'Compare business card services and find the best deals for your company.',
    icon: CreditCard,
    href: '/contact',
    color: 'bg-purple-500',
    badge: {
      text: 'Low Cost',
      variant: 'warning' as const,
    }
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Compare and save across our range of business services
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-wrap justify-center gap-10"
        >
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] max-w-sm">
              <Card
                variant="interactive"
                className="h-full flex flex-col items-center text-center relative overflow-hidden p-8 hover:shadow-xl transition-all duration-300 group border-0 bg-white/50 backdrop-blur-sm"
              >
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <Badge
                      variant={service.badge.variant}
                      size="sm"
                      icon={service.icon}
                    >
                      {service.badge.text}
                    </Badge>
                  </div>
                )}
                <div className={`${service.color} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <span className="text-[#3faa4e] font-semibold flex items-center text-lg group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
