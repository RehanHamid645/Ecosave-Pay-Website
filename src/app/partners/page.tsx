'use client'
import { motion } from 'framer-motion'
import { Users, TrendingUp, HeartHandshake, MessageSquare } from 'lucide-react'
import Card from '@/components/shared/Card'

const benefits = [
  {
    title: 'Increased Visibility',
    description: 'Reach a wider audience through our established platform and marketing channels.',
    icon: Users,
  },
  {
    title: 'Growth Opportunities',
    description: 'Access new markets and expand your business with our support.',
    icon: TrendingUp,
  },
  {
    title: 'Collaborative Support',
    description: 'Benefit from our expertise, resources, and dedicated partnership team.',
    icon: HeartHandshake,
  },
  {
    title: 'Direct Communication',
    description: 'Get direct access to our team and quick response to your needs.',
    icon: MessageSquare,
  },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Partner <span className="text-[#3faa4e]">With Us</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Join our growing network of trusted suppliers and help shape the future of our industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">How to Become a Partner</h2>
              <ol className="list-decimal pl-4 space-y-4 text-gray-600">
                <li>
                  <strong>Submit Application:</strong> Fill out our partnership application form with your business details and qualifications.
                </li>
                <li>
                  <strong>Initial Review:</strong> Our team will review your application and assess alignment with our partnership criteria.
                </li>
                <li>
                  <strong>Discussion:</strong> We&apos;ll schedule a meeting to discuss opportunities and expectations in detail.
                </li>
                <li>
                  <strong>Partnership Agreement:</strong> Upon mutual agreement, we&apos;ll formalize our partnership with clear terms and conditions.
                </li>
              </ol>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Partnership Benefits</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the advantages of partnering with us
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                    <benefit.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 