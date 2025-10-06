'use client'

import { motion } from 'framer-motion'
import { Scale, FileCheck, AlertCircle, Clock, ShieldCheck, Handshake, Receipt, HelpCircle, ArrowUp } from 'lucide-react'
import Card from '@/components/shared/Card'
import { useEffect } from 'react'
import Link from 'next/link'

const termsPoints = [
  {
    title: 'Service Agreement',
    description: 'Terms governing the use of our utility comparison and management services.',
    icon: Handshake,
  },
  {
    title: 'User Obligations',
    description: 'Your responsibilities when using our services and providing information.',
    icon: FileCheck,
  },
  {
    title: 'Liability',
    description: 'Limitations and exclusions of our liability in providing services.',
    icon: Scale,
  },
  {
    title: 'Data Protection',
    description: 'How we protect and handle your personal and business information.',
    icon: ShieldCheck,
  },
  {
    title: 'Service Usage',
    description: 'Guidelines for appropriate use of our website and services.',
    icon: Clock,
  },
  {
    title: 'Payments',
    description: 'Terms related to any fees, charges, and payment processing.',
    icon: Receipt,
  },
  {
    title: 'Disclaimers',
    description: 'Important information about the nature of our services.',
    icon: AlertCircle,
  },
  {
    title: 'Support',
    description: 'How we provide customer support and handle inquiries.',
    icon: HelpCircle,
  },
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
  const headerOffset = 120 // Adjust this value based on your header height
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset - 60

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export default function TermsPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        scrollToSection(id)
      }, 500) // Delay to ensure content is loaded
    }
  }, [])

  return (
    <main className="min-h-screen pt-28">
      <section className="relative bg-white py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Terms of <span className="text-[#3faa4e]">Service</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Terms</h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding our service terms and conditions
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {termsPoints.map((point) => (
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
                  This website is owned and operated by Ecosave Gas and Power LTD. Our legal documents are designed to de-mystify 
                  the legal aspects of our energy business, make the information you need easy to understand and give you a better 
                  understanding of our business.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  Customer Service
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  If you have any specific questions in relation to our terms and conditions, our Customer Service team will be 
                  more than happy to help. You can reach us through:
                </p>
                <div className="mt-4 flex flex-col space-y-2 text-lg">
                  <a href="contact" className="text-[#3faa4e] hover:underline">Request a call back</a>
                  <a href="mailto:info@ecosavegasandpower.com" className="text-[#3faa4e] hover:underline">
                    info@ecosavegasandpower.com
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Terms and Conditions of Service
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  These Terms govern the use by the Customer of any of the Services that Ecosave Gas and Power LTD agrees to 
                  provide to the Customer from time to time, whether via the Site, the Call Centre or otherwise.
                </p>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                    Table of Contents
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <button 
                        onClick={() => scrollToSection('definitions')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        1. Definitions
                      </button>
                      <button 
                        onClick={() => scrollToSection('application')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        2. Application of Terms
                      </button>
                      <button 
                        onClick={() => scrollToSection('subscribing')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        3. Subscribing to the Services
                      </button>
                      <button 
                        onClick={() => scrollToSection('provision')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        4. Provision of Services
                      </button>
                      <button 
                        onClick={() => scrollToSection('charges')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        5. Charges
                      </button>
                      <button 
                        onClick={() => scrollToSection('commission')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        6. Commission
                      </button>
                      <button 
                        onClick={() => scrollToSection('obligations')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        7. Customer&apos;s Obligations
                      </button>
                      <button 
                        onClick={() => scrollToSection('ip')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        8. Intellectual Property Rights
                      </button>
                      <button 
                        onClick={() => scrollToSection('termination')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        9. Termination
                      </button>
                    </div>
                    <div className="space-y-3">
                      <button 
                        onClick={() => scrollToSection('liability')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        10. Limitation on Liability
                      </button>
                      <button 
                        onClick={() => scrollToSection('data')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        11. Data Protection
                      </button>
                      <button 
                        onClick={() => scrollToSection('force')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        12. Force Majeure
                      </button>
                      <button 
                        onClick={() => scrollToSection('waiver')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        13. No Waiver
                      </button>
                      <button 
                        onClick={() => scrollToSection('severability')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        14. Severability
                      </button>
                      <button 
                        onClick={() => scrollToSection('third-party')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        15. Third Party Rights
                      </button>
                      <button 
                        onClick={() => scrollToSection('transfer')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        16. Transfer of Rights and Obligations
                      </button>
                      <button 
                        onClick={() => scrollToSection('entire')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        17. Entire Agreement
                      </button>
                      <button 
                        onClick={() => scrollToSection('governing')} 
                        className="flex items-center text-lg text-gray-600 hover:text-[#3faa4e] w-full text-left"
                      >
                        18. Governing Law and Jurisdiction
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="definitions" className="text-2xl font-semibold text-gray-900 mb-6">1. Definitions</h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600">
                      The following definitions apply to these Terms and conditions of service:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Contract Cancellation Administration Fee:
                        </span>
                        <span className="text-gray-600">
                          has the meaning set out in clause 4.7.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Call Centre:
                        </span>
                        <span className="text-gray-600">
                          means the call centre operated by Ecosave Gas and Power LTD for the purposes of providing the services.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Commission or Referral Fee:
                        </span>
                        <span className="text-gray-600">
                          the sum Ecosave Gas and Power LTD receives from a supplier should a customer enter into a contract.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="application" className="text-2xl font-semibold text-gray-900 mb-6">2. Application of Terms</h3>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-gray-600">
                        2.1 Subject to clause 2.2 below, these Terms shall apply to the provision of any Service by Ecosave Gas and Power LTD 
                        to a Customer and shall apply in place of, prevail over and supersede any other terms or conditions contained or 
                        referred to elsewhere unless specifically agreed to in writing by Ecosave Gas and Power LTD or a Ecosave Gas and 
                        Power LTD authorised representative.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        2.2 From time to time Ecosave Gas and Power LTD may supplement these Terms with additional terms relevant to the 
                        provision of certain Services, including without limitation the Contract Management Services. These additional terms 
                        may be placed on the Site and/or sent to you and you agree that any such additional terms are hereby incorporated 
                        into these Terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="subscribing" className="text-2xl font-semibold text-gray-900 mb-6">3. Subscribing to the Services</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      3.1 In order to use any of the Services, the Customer will need to register with Ecosave Gas and Power LTD via 
                      the Call Centre or the Site. Ecosave Gas and Power LTD may, in their sole discretion, refuse to register any 
                      business as a Customer.
                    </p>
                    <div>
                      <p className="text-lg leading-relaxed text-gray-600 mb-4">
                        3.2 In order to be eligible to register to use the Services, the Customer must:
                      </p>
                      <ul className="space-y-3 text-lg text-gray-600 pl-6">
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">•</span>
                          <span>be a business that is resident in the UK;</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">•</span>
                          <span>be aged eighteen years and over (if a sole trader);</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">•</span>
                          <span>meet any credit score criteria required by Ecosave Gas and Power LTD and/or any Supplier;</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">•</span>
                          <span>be able to provide Ecosave Gas and Power LTD with all such relevant information as Ecosave Gas and Power LTD 
                          may require in order to provide the services to the customer.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="provision" className="text-2xl font-semibold text-gray-900 mb-6">4. Provision of Services</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 id="price-comparison" className="text-xl font-medium text-gray-900 mb-4">Price Comparison Service</h4>
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.1 If the Customer opts for and Ecosave Gas and Power LTD agrees to provide the Price Comparison Service, 
                          Ecosave Gas and Power LTD will use its reasonable endeavours to negotiate and secure as favourable and competitive 
                          prices as possible on behalf of the Customer and will provide the Customer with any relevant Quotations obtained 
                          by the Suppliers for consideration by the Customer.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.2 The provision of any Quotation by a Supplier via Ecosave Gas and Power LTD does not constitute an offer to 
                          the Customer and the terms of a Quotation and duration for which any Quotation will be valid will vary depending 
                          on the Supplier.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 id="switching-service" className="text-xl font-medium text-gray-900 mb-4">Switching Service</h4>
                      {/* ... */}
                    </div>
                    <div>
                      <h4 id="contract-checking" className="text-xl font-medium text-gray-900 mb-4">Contract Checking Service</h4>
                      {/* ... */}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="charges" className="text-2xl font-semibold text-gray-900 mb-6">5. Charges</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.1 Save for clauses 5.2, 5.3 and 6 below, Ecosave Gas and Power LTD will provide the Services free of charge.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.2 Ecosave Gas and Power LTD reserves the right to be entitled to charge for any of the Services and/or impose 
                      charges at any time in its sole discretion, upon reasonable notification to the Customer. If the Customer does 
                      not agree to such charges, the Customer shall be entitled to opt out of receiving the Services to which it had 
                      subscribed.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.3 Any Administration Fee payable under clause 4.7 above shall be payable to Ecosave Gas and Power LTD by no 
                      later than 30 days from the date of the invoice for the same.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.4 Without prejudice to Ecosave Gas and Power LTD&apos;s other rights and remedies, if the Customer fails to pay 
                      when due any amount payable by it under or in connection with these Terms, it shall forthwith on demand pay 
                      interest on the overdue amount from the due date until the date of actual payment at the rate of 8 per cent 
                      per annum.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="commission" className="text-2xl font-semibold text-gray-900 mb-6">6. Commission</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.1 As a result of using the Services the Customer acknowledges and agrees that Ecosave Gas and Power LTD may 
                      receive a Referral Fee or Commission payment from the Supplier should a Customer enter into a Contract. The 
                      Commission payment will be paid by the Supplier and will be calculated by applying a nominal fee to the 
                      Supplier&apos;s base costs.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.2 The Commission payment may vary dependent upon the Supplier and the type of Contract entered into.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.3 The Commission payment may be paid to Ecosave Gas and Power LTD in full and/or in instalments from the 
                      date when the Customer enters a Contract with a Supplier.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="obligations" className="text-2xl font-semibold text-gray-900 mb-6">7. Customer&apos;s Obligations</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      7.1 In addition to the Customer&apos;s other obligations set out in these Terms, the Customer warrants, represents 
                      and undertakes:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>to co-operate with the Supplier(s) in all matters relating to the Services including, without limitation, 
                        providing all relevant information in a timely manner as the Supplier(s) and/or Ecosave Gas and Power LTD may 
                        require from time to time;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>to comply at all times with these Terms and any applicable terms and conditions imposed by a Supplier 
                        in relation to the supply of the Supplier Services;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>that any password, user details and/or account number allocated to or created by the Customer shall be 
                        kept confidential by the Customer at all times.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="ip" className="text-2xl font-semibold text-gray-900 mb-6">8. Intellectual Property Rights</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      The Customer agrees that any and all Intellectual Property Rights in or to the Services, any information and/or 
                      materials provided to the Customer, the Site and any content therein shall remain owned by Ecosave Gas and Power 
                      LTD and/or its licensors and any use or attempted use of any of the same shall constitute an infringement of 
                      Ecosave Gas and Power LTD&apos;s (and/or its licensors&apos;) Intellectual Property Rights and may expose the Customer to 
                      both civil and criminal liability.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="termination" className="text-2xl font-semibold text-gray-900 mb-6">9. Termination</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      9.1 Without prejudice to the foregoing and any other rights and remedies that Ecosave Gas and Power LTD may 
                      have, Ecosave Gas and Power LTD shall be entitled to terminate or suspend the Services immediately upon written 
                      notice to the Customer in the event that:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">a)</span>
                        <span>the Customer is in breach of any of the provisions of these Terms and that in the case of a breach 
                        capable of remedy, such breach shall not have been remedied within 7 days of the date of a written notice;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">b)</span>
                        <span>Ecosave Gas and Power LTD suspects on reasonable grounds that the Customer may have committed or 
                        attempted to have committed any fraud against Ecosave Gas and Power LTD and/or any Supplier.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="liability" className="text-2xl font-semibold text-gray-900 mb-6">10. Limitation on Liability</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.1 Ecosave Gas and Power LTD will exercise all reasonable skill and care in providing the Services. However, 
                      the performance of the Services by Ecosave Gas and Power LTD may be dependent upon third parties and Ecosave 
                      Gas and Power LTD is not able to guarantee or accept any responsibility for any failure or delay caused by such 
                      third parties.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.2 Ecosave Gas and Power LTD shall use its reasonable endeavours to ensure that all pricing information 
                      provided by Ecosave Gas and Power LTD to the Customer as part of the Pricing Comparison Service is accurate, 
                      current and reliable in all material respects.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.3 Except as expressly provided in these Terms, the Services and the Site are provided on an &quot;as is&quot; basis 
                      without representation or warranty of any kind and to the fullest extent permissible pursuant to applicable law.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="data" className="text-2xl font-semibold text-gray-900 mb-6">11. Data Protection</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      The Customer acknowledges and agrees that details of the Customer&apos;s name, address and payment record may be 
                      submitted to a credit reference agency, and personal data will be processed by and on behalf of the Customer 
                      in accordance with Ecosave Gas and Power LTD&apos;s Privacy Policy, as is more particularly set out in 
                      <Link href="/privacy-policy" className="text-[#3faa4e] hover:underline ml-1">
                        www.ecosavegasandpower.com/privacy-policy
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="force" className="text-2xl font-semibold text-gray-900 mb-6">12. Force Majeure</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      Ecosave Gas and Power LTD shall have no liability to the Customer if it is prevented from or delayed in 
                      performing any of its obligations in relation to the provision of any of the Services, or from carrying on 
                      its business, by acts, events, omissions or accidents beyond Ecosave Gas and Power LTD&apos;s reasonable control, 
                      including (without limitation):
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Strikes, lock-outs or other industrial disputes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Failure of a utility service or transport network</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Acts of God, war, riot, civil commotion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Compliance with any law or governmental order, rule, regulation or direction</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="waiver" className="text-2xl font-semibold text-gray-900 mb-6">13. No Waiver</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      Any failure or delay by Ecosave Gas and Power LTD to enforce any of its rights under these Terms is not to be 
                      taken as or deemed to be a waiver of that or any other right unless Ecosave Gas and Power LTD acknowledges 
                      and agrees to such a waiver in writing.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="severability" className="text-2xl font-semibold text-gray-900 mb-6">14. Severability</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      If any clause or part of a clause of these Terms is, or becomes, invalid, illegal or unenforceable, then that 
                      clause or part of a clause shall be deemed to be deleted from these Terms. Any such deemed deletion shall not 
                      affect the validity, legality or enforceability of the remainder of these Terms.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="third-party" className="text-2xl font-semibold text-gray-900 mb-6">15. Third Party Rights</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      Except as expressly provided in clause 9.2, the parties agree that the provisions of these Terms are personal 
                      to them and are not intended to confer any rights of enforcement on any other third party. The Contracts 
                      (Rights of Third Parties) Act 1999 shall not apply to this Contract or to any of its provisions, other than 
                      clause 9.2.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="transfer" className="text-2xl font-semibold text-gray-900 mb-6">16. Transfer of Rights and Obligations</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      16.1 These Terms are binding on the Customer and Ecosave Gas and Power LTD and on each parties&apos; respective 
                      successors and assigns.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      16.2 The Customer may not transfer, assign, charge or otherwise dispose of these Terms, or any of its rights 
                      or obligations arising under them, without Ecosave Gas and Power LTD&apos;s prior written consent.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      16.3 Ecosave Gas and Power LTD may at any time transfer, assign, charge, sub-contract or otherwise dispose of 
                      these Terms, or any of its rights or obligations arising under them.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="entire" className="text-2xl font-semibold text-gray-900 mb-6">17. Entire Agreement</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      The warranties, exclusions and other express provisions of these Terms, the Privacy Policy and the Terms of Use 
                      set out the full extent of our obligations and liabilities concerning the subject matter and supersede any 
                      previous agreements between the parties relating thereto.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="governing" className="text-2xl font-semibold text-gray-900 mb-6">18. Governing Law and Jurisdiction</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      These Terms are governed by the laws of England and Wales and the parties agree to submit to the non-exclusive 
                      jurisdiction of the English Courts.
                    </p>
                  </div>
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