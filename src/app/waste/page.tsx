'use client'

import { motion } from 'framer-motion'
import { Trash2, ArrowRight, PiggyBank, Clock, Shield, BarChart3, Recycle } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Link from 'next/link'

const features = [
  {
    title: 'Save Money',
    description: 'Reduce your waste management costs with competitive rates and efficient solutions.',
    icon: PiggyBank,
  },
  {
    title: 'Easy Switch',
    description: 'Hassle-free transition to better waste management services.',
    icon: Clock,
  },
  {
    title: 'Price Protection',
    description: 'Secure long-term rates and avoid unexpected increases.',
    icon: Shield,
  },
  {
    title: 'Waste Monitoring',
    description: 'Track and optimize your waste collection and recycling.',
    icon: BarChart3,
  },
]

const wasteServices = [
  {
    title: 'General Waste',
    description: 'Complete waste management service for businesses of all sizes',
    icon: Trash2,
    color: 'bg-blue-500',
    benefits: [
      'Reliable scheduled collections',
      'Flexible bin sizes',
      'Competitive pricing',
      'Compliant waste disposal',
      'Detailed reporting',
      'Dedicated account manager'
    ],
    link: '/energy-quote'
  },
  {
    title: 'Recycling',
    description: 'Sustainable recycling solutions that reduce your environmental impact',
    icon: Recycle,
    color: 'bg-green-500',
    benefits: [
      'Competitive recycling rates',
      'Multiple material streams',
      'Environmental compliance',
      'Flexible payment options',
      'Priority support service',
      'Recycling performance reports'
    ],
    link: '/energy-quote'
  }
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

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function WastePage() {
  return (
    <main className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Business Waste <span className="text-[#3faa4e]">Management</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Compare business waste collection rates and find the best deals for your company. 
              Save money and improve sustainability with our waste management comparison service.
            </p>
{/*             <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  Compare Rates
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Choose Our Waste Management Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We make waste management and recycling simple and cost-effective
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={item}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Waste Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Waste Management Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive waste management solutions tailored to your business needs
            </p>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-2">
            {wasteServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${service.color} p-3 rounded-full mr-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <ArrowRight className="h-4 w-4 text-[#3faa4e] mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/energy-quote/step1">
                      <Button icon={ArrowRight} iconPosition="right">
                        Compare {service.title} Rates
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to Save on Waste Costs?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our waste management experts today and discover how much your business could save 
              on waste collection and recycling services.
            </p>
            <div className="mt-8">
              <Link href="/energy-quote/step1">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 