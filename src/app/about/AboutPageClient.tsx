'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Leaf, Trophy } from 'lucide-react'
import Card from '@/components/shared/Card'
import TimelineSection from '@/components/features/TimelineSection'


const values = [
  {
    title: 'Customer First',
    description: 'We prioritize understanding your needs and delivering personalized energy solutions.',
    icon: Users,
  },
  {
    title: 'Trusted Service',
    description: 'Our team of experts provides reliable, transparent advice and support.',
    icon: Shield,
  },
  {
    title: 'Sustainability',
    description: 'Committed to promoting sustainable energy practices and environmental responsibility.',
    icon: Leaf,
  },
  {
    title: 'Excellence',
    description: 'Striving for excellence in every aspect of our service delivery.',
    icon: Trophy,
  },
]

export default function AboutPageClient() {
  return (
    <main className="min-h-screen pt-28">
      <section className="relative bg-white py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-[#3faa4e]">Ecosave</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Helping businesses find better deals on their utilities since 2009
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                We are dedicated to helping businesses reduce their utility costs while promoting sustainable practices. Our expert team works to find the best energy, water, and waste management solutions for our clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Approach</h2>
              <p className="text-lg text-gray-600">
                We take a comprehensive approach to utility management, considering both cost savings and environmental impact. Our team stays up-to-date with market trends and regulations to provide the best advice to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide our service delivery
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                    <value.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TimelineSection />
    </main>
  )
} 