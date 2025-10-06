'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight} from 'lucide-react'
import Card from '@/components/shared/Card'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterSection from './NewsletterSection'
import { blogPosts } from '@/data/blog-posts'

export default function BlogSection() {
  return (
    <>
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Energy <span className="text-[#c5c7c5]">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Expert advice and insights on energy management, sustainability, and cost savings.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-[#3faa4e]/10 p-2 rounded-full">
                        <post.icon className="h-4 w-4 text-[#3faa4e]" />
                      </div>
                      <span className="text-sm font-medium text-[#3faa4e]">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.description}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#3faa4e] hover:text-[#2d7d38] transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
} 