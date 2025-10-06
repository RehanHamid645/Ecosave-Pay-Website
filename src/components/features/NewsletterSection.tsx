'use client'

import { motion } from 'framer-motion'

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stay Informed
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Subscribe to our newsletter for the latest energy insights and tips.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3faa4e] focus:border-transparent"
            />
            <button className="bg-[#3faa4e] text-white px-6 py-2 rounded-md hover:bg-[#2d7d38] transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 