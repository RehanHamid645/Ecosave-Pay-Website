'use client'
import { motion } from 'framer-motion'
import { Shield, Cookie, Lock, Settings } from 'lucide-react'
import Card from '@/components/shared/Card'

const cookieTypes = [
  {
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    icon: Shield,
  },
  {
    title: 'Performance Cookies',
    description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
    icon: Cookie,
  },
  {
    title: 'Functional Cookies',
    description: 'These cookies enable the website to provide enhanced functionality and personalisation.',
    icon: Settings,
  },
  {
    title: 'Targeting Cookies',
    description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
    icon: Lock,
  },
]

export default function CookiePolicyPage() {
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
              Cookie <span className="text-[#3faa4e]">Policy</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We use cookies to enhance your browsing experience and provide personalized services.
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Are Cookies?</h2>
              <p className="text-gray-600">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide useful information to the website owners.
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">How We Use Cookies</h2>
              <p className="text-gray-600">
                We use cookies for various purposes including operating our website, analyzing how you use our site, 
                and personalizing your experience. Some cookies are essential for the functioning of our website, 
                while others help us improve our services.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Types of Cookies We Use</h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding the different types of cookies we use on our website
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cookieTypes.map((type) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                    <type.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
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