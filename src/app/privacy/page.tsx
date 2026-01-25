'use client'

import { motion } from 'framer-motion'
import Card from '@/components/shared/Card'
import { Shield, Lock, Eye, FileText, ArrowUp } from 'lucide-react'
import { useEffect } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const privacyPoints = [
  {
    title: 'Data Collection',
    description: 'Information we collect and how we use it.',
    icon: FileText,
  },
  {
    title: 'Data Security',
    description: 'How we protect your personal information.',
    icon: Shield,
  },
  {
    title: 'Data Privacy',
    description: 'Your privacy rights and our compliance measures.',
    icon: Lock,
  },
  {
    title: 'Data Access',
    description: 'How you can access and control your data.',
    icon: Eye,
  },
]

const dataUsageTable = [
  {
    purpose: 'To register you as a new customer',
    data: ['Identity', 'Contact'],
    basis: 'Performance of a contract with you'
  },
  {
    purpose: 'To process and deliver your order including:\n(a) Manage payments, fees and charges\n(b) Collect and recover money owed to us',
    data: ['Identity', 'Contact', 'Financial', 'Transaction', 'Marketing and Communications'],
    basis: '(a) Performance of a contract with you\n(b) Necessary for our legitimate interests (to recover debts due to us)'
  },
  {
    purpose: 'To manage our relationship with you which will include:\n(a) Notifying you about changes to our terms or privacy policy\n(b) Asking you to leave a review or take a survey',
    data: ['Identity', 'Contact', 'Profile', 'Marketing and Communications'],
    basis: '(a) Performance of a contract with you\n(b) Necessary to comply with a legal obligation\n(c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)'
  }
]

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#3faa4e] text-white p-3 rounded-full shadow-lg hover:bg-[#2f8a3e] transition-colors duration-200"
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
}

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId)
  const headerOffset = 120
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset - 60

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export default function PrivacyPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        scrollToSection(id)
      }, 500)
    }
  }, [])

  return (
    <main className="min-h-screen pt-28">
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Privacy <span className="text-[#3faa4e]">Policy</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Please read our privacy policy carefully to understand how we handle your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Privacy Points</h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding how we handle your data
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {privacyPoints.map((point) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 flex flex-col items-center text-center">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4">
                    <point.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <p className="text-lg leading-relaxed text-gray-600">
                  This privacy policy explains how Ecosave Pay LTD collects, uses, and protects your personal information. 
                  Our privacy documents are designed to make the information you need easy to understand and give you a better 
                  understanding of how we handle your data.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  If you have any specific questions about our privacy policy, our Data Protection Officer will be happy to help. You can reach us through:
                </p>
                <div className="mt-4 flex flex-col space-y-2 text-lg">
                  <p>Full name: Mohammed Aslam</p>
                  <a href="mailto:info@ecosavepay.com" className="text-[#3faa4e] hover:underline">
                    info@ecosavepay.com
                  </a>
                  <p>Postal address: Lloyds House 18-22, Lloyd Street, Manchester, England, M2 5WA</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                  Table of Contents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <button 
                      onClick={() => scrollToSection('introduction')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      1. Introduction
                    </button>
                    <button 
                      onClick={() => scrollToSection('data-collection')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      2. The Data We Collect
                    </button>
                    <button 
                      onClick={() => scrollToSection('data-use')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      3. How We Use Your Data
                    </button>
                    <button 
                      onClick={() => scrollToSection('marketing')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      4. Marketing
                    </button>
                    <button 
                      onClick={() => scrollToSection('cookies')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      5. Cookies
                    </button>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => scrollToSection('data-retention')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      6. Data Retention
                    </button>
                    <button 
                      onClick={() => scrollToSection('international')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      7. International Transfers
                    </button>
                    <button 
                      onClick={() => scrollToSection('rights')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      8. Your Rights
                    </button>
                    <button 
                      onClick={() => scrollToSection('glossary')} 
                      className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                    >
                      9. Glossary
                    </button>
                  </div>
                </div>
              </div>

              <div id="introduction" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">1. Introduction</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    Ecosave respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    This website is not intended for children and we do not knowingly collect data relating to children.
                  </p>
                </div>
              </div>

              <div id="data-collection" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">2. The Data We Collect</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                  </p>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-600">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Financial Data</strong> includes bank account and payment card details.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Usage Data</strong> includes information about how you use our website, products and services.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Aggregated Data</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      We also collect, use and share <strong>Aggregated Data</strong> such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature.
                    </p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Categories of Personal Data</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
                    </p>
                  </div>
                </div>
              </div>

              <div id="data-collection-methods" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">3. How is your personal data collected?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct interactions</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6 mt-4">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>apply for our products or services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>create an account on our website</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>subscribe to our service or publications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>request marketing to be sent to you</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>enter a competition, promotion or survey</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>give us feedback or contact us</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated technologies or interactions</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Third parties or publicly available sources</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      We will receive personal data about you from various third parties and public sources, including:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6 mt-4">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Technical Data from analytics providers, advertising networks and search information providers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Contact, Financial and Transaction Data from providers of technical, payment and delivery services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Identity and Contact Data from data brokers or aggregators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Identity and Contact Data from publicly available sources</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="data-usage-table" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">How we use your personal data</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose/Activity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type of data</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lawful basis for processing</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dataUsageTable.map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line">{row.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                            {row.data.map((data, i) => (
                              <div key={i}>{data}</div>
                            ))}
                        </td>
                          <td className="px-6 py-4 text-sm text-gray-600 whitespace-pre-line">{row.basis}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="data-use" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">3. How We Use Your Data</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-600 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span>Where we need to perform the contract we are about to enter into or have entered into with you.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span>Where we need to comply with a legal obligation.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="marketing" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">4. Marketing</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Promotional offers from us</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-party marketing</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Opting out</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      You can ask us or third parties to stop sending you marketing messages at any time by contacting us.
                    </p>
                  </div>
                </div>
              </div>

              <div id="cookies" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">5. Cookies</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                  </p>
                </div>
              </div>

              <div id="data-retention" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">6. Data Retention</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means.
                  </p>
                </div>
              </div>

              <div id="international" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">7. International Transfers</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We do not transfer your personal data outside the UK.
                  </p>
                </div>
              </div>

              <div id="rights" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">8. Your Rights</h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-600">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                  </p>
                  <ul className="space-y-3 text-lg text-gray-600 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span><strong>Request access</strong> to your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span><strong>Request correction</strong> of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span><strong>Request erasure</strong> of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span><strong>Object to processing</strong> of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span><strong>Request restriction</strong> of processing your personal data</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="glossary" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">9. Glossary</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Lawful Basis</h3>
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-gray-600">
                        <strong>Legitimate Interest</strong> means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        <strong>Performance of Contract</strong> means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="changes" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Changes to the privacy policy</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We keep our privacy policy under regular review.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
                  </p>
                </div>
              </div>

              <div id="third-party-links" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Third-party links</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                  </p>
                </div>
              </div>

              <div id="data-security" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Data security</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
                </div>
              </div>

              <div id="data-disclosures" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Disclosures of your personal data</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We may share your personal data with the parties set out below for the purposes set out in the table above.
                  </p>
                  <ul className="space-y-3 text-lg text-gray-600 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span>External Third Parties as set out in the Glossary.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3faa4e] mr-3">•</span>
                      <span>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</span>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-600 mt-4">
                    We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.
                  </p>
                </div>
              </div>

              <div id="your-rights-detail" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Your Legal Rights in Detail</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Request access</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      You have the right to request access to your personal data (commonly known as a &quot;data subject access request&quot;). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Request correction</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      You have the right to request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Request erasure</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      You have the right to request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Object to processing</h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      You have the right to object to processing of your personal data where we are relying on a legitimate interest and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms.
                    </p>
                  </div>
                </div>
              </div>

              <div id="no-fee" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">No fee usually required</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
                  </p>
                </div>
              </div>

              <div id="response-time" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Time limit to respond</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-600">
                    We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BackToTop />
    </main>
  )
} 