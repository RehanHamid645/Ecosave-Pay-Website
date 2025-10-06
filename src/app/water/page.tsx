'use client'

import { motion } from 'framer-motion'
import { Droplet, ArrowRight, PiggyBank, Clock, Shield, BarChart3, Waves, Droplets, Building2, Users, Coins } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Link from 'next/link'

const features = [
  {
    title: 'Expert Advice',
    description: 'Reduce your water bills through our competitive rates and smart optimization. ',
    icon: PiggyBank,
  },
  {
    title: 'Switch in 24 Hours',
    description: 'Quick, hassle-free transition with no service interruption.',
    icon: Clock,
  },
  {
    title: 'Bill Protection',
    description: 'Get protected from unexpected bill increases with our fixed-rate plans.',
    icon: Shield,
  },
  {
    title: 'Real-time Bill Tracking',
    description: 'Monitor costs and usage in real-time to prevent bill surprises.',
    icon: BarChart3,
  },
]

const waterServices = [
  {
    title: 'Commercial Water Supply',
    description: 'Lower your water bills while maintaining reliable service',
    icon: Droplet,
    color: 'bg-blue-500',
    benefits: [
      'Save up to 20% on current water rates',
      'Price match guarantee on supplier quotes',
      'Smart meters for bill accuracy',
      'Free water efficiency assessment',
      'Dedicated bill management support',
      'Transparent monthly billing'
    ],
    link: '/contact'
  },
  {
    title: 'Wastewater Services',
    description: 'Reduce wastewater costs with smart management',
    icon: Waves,
    color: 'bg-teal-500',
    benefits: [
      'Up to 15% savings on wastewater charges',
      'Trade effluent cost optimization',
      'Compliance cost management',
      'Flexible payment plans',
      'Bill validation service',
      'Cost reduction strategies'
    ],
    link: '/contact'
  }
]

const statistics = [
  {
    value: 65,
    suffix: '%',
    description: 'Some businesses in the UK have been overcharged by up to 65% on their water bills in the past',
    icon: Droplets,
    color: 'bg-blue-500'
  },
  {
    value: 20,
    suffix: '%',
    description: 'Since the market was deregulated, still only 20% of UK businesses have switched water supplier',
    icon: Building2,
    color: 'bg-purple-500'
  },
  {
    value: 48,
    suffix: '%',
    description: 'Around 48% of business customers are still unaware that they can shop around to find a better supplier',
    icon: Users,
    color: 'bg-orange-500'
  },
  {
    value: 485,
    prefix: '£',
    description: 'Our customers save an average of £485 on their business water bills by switching',
    icon: Coins,
    color: 'bg-green-500'
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

export default function WaterPage() {
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
              Reduce Your Water <span className="text-[#3faa4e]">Bills</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
            Stop overpaying for your business water. 
            We have already saved hundreds of businesses money on their water bills. Get an instant quote and see how much you could save today. 
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
              Smart Ways to Lower Your Water Bill
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of businesses already saving money with our water services
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

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              The Reality of Business Water Costs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover why more businesses are switching their water supplier
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.description}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-4xl font-bold text-gray-900"
                    >
                      {stat.prefix}{stat.value}{stat.suffix}
                    </motion.span>
                  </div>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Services */}
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
              Bill-Saving Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the right plan to start reducing your water costs today
            </p>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-2">
            {waterServices.map((service, index) => (
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
              Start Saving on Your Water Bills Today
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Get your free bill comparison and discover how much you could save. Most businesses see savings 
              within their first bill cycle.
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