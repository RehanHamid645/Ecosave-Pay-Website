'use client'

import { motion, type Variants } from 'framer-motion'
import { MessageCircle, Clock, CheckCircle, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import Card from '@/components/shared/Card'
import type { NextPage } from 'next'

const steps = [
  {
    title: '1. Investigating Your Complaint',
    description: 'Our experienced advisors will work to resolve your complaint promptly and keep you updated throughout the process.',
    icon: MessageCircle,
  },
  {
    title: '2. Not Happy with Our Response?',
    description: 'If you\'re unhappy with how we handled your complaint, you can escalate it to our management team.',
    icon: Clock,
  },
  {
    title: '3. Additional Independent Advice',
    description: 'Access independent advice from Citizens Advice or Business Debtline for further support.',
    icon: ExternalLink,
  },
  {
    title: '4. Independent Review',
    description: 'After 8 weeks, eligible micro-businesses can contact the Ombudsman Services for energy.',
    icon: CheckCircle,
  },
]

const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const ComplaintsPage: NextPage = () => {
  return (
    <main className="min-h-screen pt-44">
      <article className="relative bg-white py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            className="prose prose-lg mx-auto"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Complaints Procedure</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Introduction</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Welcome to the Ecosave Pay Ltd&apos;s (&quot;Ecosave&quot;) Complaints section.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#3faa4e]/10 p-3 rounded-full mr-4">
                      <step.icon className="h-6 w-6 text-[#3faa4e]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  1. Investigating Your Complaint
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    Our team of experienced advisors are available Monday to Friday between 9am and 5:30pm and will work to resolve your complaint. We are committed to resolving the issue to your satisfaction.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Should either your assigned complaints advisor or a member of our management team be unable to resolve your complaint promptly, they will provide you with timescales and regular updates on the progress.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <Mail className="h-5 w-5 text-[#3faa4e]" />
                    <p className="text-gray-600">complaints@ecosavegasandpower.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  2. Not Happy with Our Response?
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    If you are unhappy with the way we have dealt with your complaint or have any ideas on how we might improve our service moving forward, you may wish to talk to management.
                  </p>
                  <div className="flex flex-col space-y-3 mt-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#3faa4e]" />
                      <p className="text-gray-600">complaints@ecosavegasandpower.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#3faa4e]" />
                      <p className="text-gray-600">0161 3939 764</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-[#3faa4e]" />
                      <p className="text-gray-600">Complaints department, Ecosave Gas and Power Limited, Lloyds House, 18-22 Lloyd Street, Manchester, M2 5WA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  3. Additional Independent Advice
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Citizens Advice</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      Providing independent and impartial advice, both over the phone and in person, free of charge.
                    </p>
                    <div className="mt-3 space-y-2">
                      <p className="text-gray-600">Consumer Service: 0808 223 1133</p>
                      <p className="text-gray-600">Consumer Service Welsh Speaking: 0808 223 1144</p>
                      <a href="https://citizensadvice.org.uk/energy" target="_blank" rel="noopener noreferrer" className="text-[#3faa4e] hover:underline inline-flex items-center">
                        Visit Citizens Advice website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Debtline</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      Business debtline is a charity providing impartial and independent advice free of charge, both over the phone and online, to small businesses.
                    </p>
                    <div className="mt-3 space-y-2">
                      <p className="text-gray-600">Call: 0800 197 6026</p>
                      <a href="https://businessdebtline.org" target="_blank" rel="noopener noreferrer" className="text-[#3faa4e] hover:underline inline-flex items-center">
                        Visit Business Debtline website
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  4. Independent Review
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    After 8 weeks from the date of the original complaint, or if we have issued a &apos;deadlock letter&apos;, and you qualify as a Micro Business, you can contact the Ombudsman Services for energy. They will provide free impartial advice and resolve disputes where a final agreement cannot be reached.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Your business qualifies as a Micro Business if it meets any one of these conditions:</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Your business uses less than 100,000 kWh of electricity a year</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Your business uses less than 293,000 kWh of gas a year</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Your business has fewer than 10 employees (or their full-time equivalent) and its annual turnover or yearly balance sheet total is not more than €2 million</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-gray-600">Email: enquiry@ombudsman-services.org</p>
                    <p className="text-gray-600">Address: Ombudsman Services: Energy, PO Box 966, Warrington, WA4 9DF</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ComplaintsPage 