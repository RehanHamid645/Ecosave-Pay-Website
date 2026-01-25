'use client'

import { motion } from 'framer-motion'
import { Scale, FileCheck, AlertCircle, Clock, ShieldCheck, Handshake, Receipt, HelpCircle, ArrowUp } from 'lucide-react'
import Card from '@/components/shared/Card'
import { useEffect } from 'react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
                  This website is owned and operated by Ecosave Pay LTD. For information about the terms on which you can use 
                  this website, how data collected through this website is used or for information about Ecosave Pay and its 
                  product and services, please see the section below. Our legal documents are designed to de-mystify the legal 
                  aspects of our energy business, make the information you need easy to understand and give you a better 
                  understanding of our business.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  Customer Service
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  In this document you will find the detailed terms and conditions of service for Ecosave Pay. For your benefit 
                  and ease of use, we have set out below the principal terms which come into effect once a customer uses the 
                  Ecosave Pay switching service. If you have any specific questions in relation to our terms and conditions, our 
                  Customer Service team will be more than happy to help. Likewise if you feel that we did not handle your issue 
                  in the right way or there is a problem we might be able to fix, please get in touch. Your views are very 
                  important to us.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 mt-4">
                  If we have not delivered the standard of service you expected, or if we made a mistake, we would like to know. 
                  We will investigate the situation and set about putting it right as quickly as we can, if we can. We don&apos;t 
                  want to make the same mistake again so your feedback is very important to us.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 mt-4">
                  Ecosave Pay Customer Service Team can be reached either through our live chat, or by email at{' '}
                  <a href="mailto:info@ecosavepay.com" className="text-[#3faa4e] hover:underline">
                    info@ecosavepay.com
                  </a>
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Terms and Conditions of Service
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  These Terms govern the use by the Customer of any of the Services that Ecosave Pay LTD agrees to provide to 
                  the Customer from time to time, whether via the Site, the Call Centre or otherwise. Please read these Terms 
                  carefully before accepting these Terms and using the Services. By using the Services you signify that you have 
                  read, understand and agree to be bound by these Terms as well as the terms and conditions set out in our Privacy 
                  Policy below. If you do not agree to these Terms, the Privacy Policy and the Terms of Use, do not use the Services.
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
                      The following definitions apply to these Terms and conditions of service (the &quot;Terms&quot;):
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Call Centre:
                        </span>
                        <span className="text-gray-600">
                          means the call centre operated by Ecosave Pay LTD for the purposes of providing the services.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Commission or Referral Fee:
                        </span>
                        <span className="text-gray-600">
                          the sum Ecosave Pay LTD receives from a supplier should a customer enter into a contract.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Contract or Supply Contract:
                        </span>
                        <span className="text-gray-600">
                          means the contract(s) with energy Suppliers for the supply of electricity and/or gas.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Contract Checking Service:
                        </span>
                        <span className="text-gray-600">
                          means the credit rating requirements as may be determined and required by Ecosave Pay LTD and/or the Supplier 
                          from time to time in order for a Customer to qualify to use the Services and contract with a Supplier.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Credit Score Criteria:
                        </span>
                        <span className="text-gray-600">
                          means the credit rating requirements as may be determined and required by Ecosave Pay LTD and/or the Supplier 
                          from time to time in order for a Customer to qualify to use the Services and contract with a Supplier.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Customer:
                        </span>
                        <span className="text-gray-600">
                          means any non-domestic commercial customer who satisfies the eligibility requirements set out in clause 3.2 
                          and to whom Ecosave Pay LTD agrees to supply any of the Services from time to time.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Ecosave Pay LTD:
                        </span>
                        <span className="text-gray-600">
                          which is a company registered in England and Wales under company number 15055468 and which has its registered 
                          trading address is Lloyds House 18-22, Lloyd Street, Manchester, England, M2 5WA.
                        </span>
                      </li>
                      <li className="flex gap-x-4">
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          Site:
                        </span>
                        <span className="text-gray-600">
                          means the website www.ecosavepay.com
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
                        2.1 Subject to clause 2.2 below, these Terms shall apply to the provision of any Service by Ecosave Pay LTD 
                        to a Customer and shall apply in place of, prevail over and supersede any other terms or conditions contained 
                        or referred to elsewhere (whether in correspondence or otherwise) or implied by trade, custom, practice or 
                        course of dealing unless specifically agreed to in writing by Ecosave Pay LTD or a Ecosave Pay LTD authorised 
                        representative.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        2.2 From time to time Ecosave Pay LTD may supplement these Terms with additional terms relevant to the 
                        provision of certain Services, including without limitation the Contract Management Services. These additional 
                        terms may be placed on the Site and/or sent to you and you agree that any such additional terms are hereby 
                        incorporated into these Terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="subscribing" className="text-2xl font-semibold text-gray-900 mb-6">3. Subscribing to the Services</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      3.1 In order to use any of the Services, the Customer will need to register with Ecosave Pay LTD via the 
                      Call Centre or the Site. Ecosave Pay LTD may, in their sole discretion, refuse to register any business 
                      as a Customer.
                    </p>
                    <div>
                      <p className="text-lg leading-relaxed text-gray-600 mb-4">
                        3.2 In order to be eligible to register to use the Services, the Customer must:
                      </p>
                      <ul className="space-y-3 text-lg text-gray-600 pl-6">
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">a.</span>
                          <span>be a business that is resident in the UK;</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">b.</span>
                          <span>be aged eighteen years and over (if a sole trader);</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">c.</span>
                          <span>meet any credit score criteria required by Ecosave Pay LTD and/or any Supplier; and</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#3faa4e] mr-3">d.</span>
                          <span>be able to provide Ecosave Pay LTD with all such relevant information as Ecosave Pay LTD 
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
                      <h4 className="text-xl font-medium text-gray-900 mb-4">Price Comparison Service</h4>
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.1 If the Customer opts for and Ecosave Pay LTD agrees to provide the Price Comparison Service, Ecosave Pay LTD 
                          will use its reasonable endeavours to negotiate and secure as favourable and competitive prices as possible on 
                          behalf of the Customer and will provide the Customer with any relevant Quotations obtained by the Suppliers for 
                          consideration by the Customer. Ecosave Pay LTD and the Supplier reserve the right to revise, amend or withdraw 
                          any Quotation at any time upon informing the Customer.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.2 The provision of any Quotation by a Supplier via Ecosave Pay LTD does not constitute an offer to the Customer 
                          and the terms of a Quotation and duration for which any Quotation will be valid will vary depending on the Supplier. 
                          The Customer&apos;s acceptance of a Quotation constitutes a non-revocable offer by the Customer to engage the Supplier 
                          to provide the Supplier Services and once such an offer has been made by the Customer, the Customer shall be committed 
                          to such offer and shall not be entitled to revoke the offer.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.3 All offers made by Customers shall be subject at all times to the Supplier&apos;s acceptance and the Supplier shall 
                          be entitled at any time to refuse to accept a Customer&apos;s offer for any reason at the Supplier&apos;s sole discretion. 
                          No offer placed by the Customer shall be accepted by the Supplier other than: (a) by a written acknowledgement issued 
                          and executed by the Supplier; or (b) (if earlier) by the Supplier starting to provide any of the Services.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-4">Switching Service</h4>
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.4 If the Customer makes an offer based on a Quotation and if the Supplier accepts the Customer&apos;s offer, Ecosave 
                          Pay LTD will provide the Switching Service which will include organising the contract between the Supplier and the 
                          Customer (the &quot;Contract&quot;) for the supply and purchase of the Supplier Services. Ecosave Pay LTD shall not be responsible 
                          for any delay or failure caused by any Supplier or Existing Supplier in relation to effecting any transfer.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.5 Ecosave Pay LTD will arrange the Contract based on the information provided by the Customer to Ecosave Pay LTD. 
                          Prior to completion of the Contract, the Customer&apos;s information will be confirmed by Ecosave Pay LTD with the Customer 
                          by email, via the Call Centre or by letter. It is the Customer&apos;s responsibility to ensure at this point that all the 
                          Customer information is true, accurate, complete, reliable and current in all respects and to inform Ecosave Pay LTD 
                          promptly if there are any errors and/or if any amendments are required. If any of the Customer information needs to be 
                          amended or rectified, this may result in the transfer being delayed or rejected by the Supplier.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.6 Once the Contract is in final form, Ecosave Pay LTD will send a summary of the key terms of the Contract to the 
                          Customer. The Customer must check that all the details are correct and must inform Ecosave Pay LTD of any errors 
                          and/or amendments within 24 hours of receipt.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.7 If a Customer subsequently decides to not proceed with providing its custom to the Supplier in respect of which 
                          Ecosave Pay LTD has performed the Price Comparison Service and the Switching Service, Ecosave Pay LTD shall be entitled 
                          to charge the Customer an administration fee of £150 plus VAT (the &quot;Contract Cancellation Administration Fee&quot;).
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.8 The Customer agrees that within reasonable time and by no later than 15 days prior to the last day upon which 
                          notice to terminate the Contract can be served by the Customer, the Customer shall contact Ecosave Pay LTD so as to 
                          enable Ecosave Pay LTD to perform the Price Comparison Service again on behalf of the Customer. Ecosave Pay LTD shall 
                          also be entitled, but not obliged to, contact the Customer for the same purpose.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.9 The Customer acknowledges that by entering into a Contract with a Supplier, the Customer will be contracting 
                          directly with the Supplier and not with Ecosave Pay LTD. The Customer agrees that Ecosave Pay LTD is not liable in 
                          any way in relation to any transactions, dealings or arrangements of any kind made between the Customer and any Supplier 
                          and that any such transaction, dealing or arrangements (including, without limitation, any payment obligations of the 
                          Customer thereunder) are the Customer&apos;s sole risk and responsibility.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-4">Contract Checking Service</h4>
                      <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.10 If the Customer opts for and Ecosave Pay LTD agrees to provide the Contract Checking Service, the Customer will 
                          be required to sign a Letter of Authority authorising Ecosave Pay LTD to contact and liaise directly with the Customer&apos;s 
                          Existing Supplier and the Customer agrees to promptly provide to Ecosave Pay LTD all such information and assistance as 
                          Ecosave Pay LTD may require in order to carry out the Contract Checking Service.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.11 Upon receipt of a signed Letter of Authority Ecosave Pay LTD will send to the Customer&apos;s Existing Supplier a 
                          questionnaire requesting details of the key terms of the Customer&apos;s arrangements with the Existing Supplier, including 
                          the contract end date, notice period, termination process, current prices and details of the Customer&apos;s consumption.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.12 Once Ecosave Pay LTD has received a response to the questionnaire from the Existing Supplier, Ecosave Pay LTD will 
                          use its reasonable endeavours to forward such response to the Customer. However, Ecosave Pay LTD shall not be responsible 
                          for any delay or failure by the Existing Supplier to respond to the questionnaire and/or to cooperate with Ecosave Pay LTD 
                          in relation to any request Ecosave Pay LTD may make whilst performing the Contract Checking Service.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                          4.13 For the avoidance of doubt, Ecosave Pay LTD shall not be responsible for the provision of any Supplier Services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="charges" className="text-2xl font-semibold text-gray-900 mb-6">5. Charges</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.1 Save for clauses 5.2, 5.3 and 6 below, Ecosave Pay LTD will provide the Services free of charge.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.2 Ecosave Pay LTD reserves the right to be entitled to charge for any of the Services and/or impose charges at any 
                      time in its sole discretion, upon reasonable notification to the Customer. If the Customer does not agree to such charges, 
                      the Customer shall be entitled to opt out of receiving the Services to which it had subscribed.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.3 Any Administration Fee payable under clause 4.7 above shall be payable to Ecosave Pay LTD by no later than 30 days 
                      from the date of the invoice for the same.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      5.4 Without prejudice to Ecosave Pay LTD&apos;s other rights and remedies, if the Customer fails to pay when due any amount 
                      payable by it under or in connection with these Terms, including paragraph 6.4 below, it shall forthwith on demand by 
                      Ecosave Pay LTD pay interest on the overdue amount from the due date until the date of actual payment (after as well as 
                      before judgment) at the rate of 8 per cent per annum or such percentage equivalent to the statutory rate of interest 
                      prescribed for judgments from time to time in place. In the alternative and where appropriate, Ecosave Pay LTD reserves 
                      the right to claim interest pursuant to the Late Payment of Commercial Debts (Interest) Act 1998.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="commission" className="text-2xl font-semibold text-gray-900 mb-6">6. Commission</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.1 As a result of using the Services the Customer acknowledges and agrees that Ecosave Pay LTD may receive a Referral 
                      Fee or Commission payment from the Supplier should a Customer enter into a Contract. The Commission payment will be paid 
                      by the Supplier and will be calculated by applying a nominal fee to the Supplier&apos;s base costs.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.2 The Commission payment may vary dependent upon the Supplier and the type of Contract entered into.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.3 The Commission payment may be paid to Ecosave Pay LTD in full and/or in instalments from the date when the Customer 
                      enters a Contract with a Supplier.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.4 The Customer agrees to indemnify Ecosave Pay LTD for any Commission payments repaid to the Supplier in the scenario 
                      where the Customer cancels a Contract after a Commission payment has been paid and the Supplier clawbacks the Commission 
                      payment from Ecosave Pay LTD.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      6.5 It is important to note that the Commission payment shall never undermine the Services provided or influence the manner 
                      in which Ecosave Pay LTD deal with a Customer. The Customer&apos;s interests will always remain paramount.
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
                        <span className="text-[#3faa4e] mr-3">a.</span>
                        <span>to co-operate with the Supplier(s) in all matters relating to the Services including, without limitation, 
                        providing all relevant information in a timely manner as the Supplier(s) and/or Ecosave Pay LTD may require from 
                        time to time and that all such Customer information will be true, accurate, complete, reliable and current in all 
                        respects;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">b.</span>
                        <span>to comply at all times with these Terms and any applicable terms and conditions imposed by a Supplier 
                        in relation to the supply of the Supplier Services;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">c.</span>
                        <span>that any password, user details and/or account number allocated to or created by the Customer to enable 
                        the Customer to use the Services shall be kept confidential by the Customer at all times. Ecosave Pay LTD will 
                        be entitled to assume that any person using the Customer&apos;s password, user details and/or account number is the 
                        Customer or someone doing so with the Customer&apos;s permission. The Customer shall be responsible and liable for any 
                        actions of any person using the Customer&apos;s password, user details and/or account number and shall immediately 
                        notify Ecosave Pay LTD of any unauthorised use of the same.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="ip" className="text-2xl font-semibold text-gray-900 mb-6">8. Intellectual Property Rights</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      The Customer agrees that any and all Intellectual Property Rights in or to the Services, any information and/or 
                      materials provided the Customer, the Site and any content therein (including, without limitation, the look and 
                      feel of the Site) shall remain owned by Ecosave Pay LTD and/or its licensors and any use or attempted use of any 
                      of the same shall constitute an infringement of Ecosave Pay LTD&apos;s (and/or its licensors&apos;) Intellectual Property 
                      Rights and may expose the Customer to both civil and criminal liability.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="termination" className="text-2xl font-semibold text-gray-900 mb-6">9. Termination</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      9.1 Without prejudice to the foregoing and any other rights and remedies that Ecosave Pay LTD may have, Ecosave 
                      Pay LTD shall be entitled to terminate or suspend the Services immediately upon written notice to the Customer in 
                      the event that:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">(a)</span>
                        <span>the Customer is in breach of any of the provisions of these Terms and that in the case of a breach 
                        capable of remedy, such breach shall not have been remedied within 7 days of the date of a written notice from 
                        Ecosave Pay LTD to the Customer specifying such breach; or</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">(b)</span>
                        <span>Ecosave Pay LTD suspects on reasonable grounds that the Customer may have committed or attempted to have 
                        committed any fraud against Ecosave Pay LTD and/or any Supplier.</span>
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed text-gray-600 mt-6">
                      9.2 The Customer hereby agrees to indemnify, keep indemnified, defend and hold Ecosave Pay LTD and its parent 
                      companies, subsidiaries, affiliates and each of their respective officers, directors, employees, owners, agents, 
                      suppliers, contractors, partners, information providers and licensors harmless from and against any and all claims, 
                      damages, liability, demands, losses, costs and expenses (including legal fees) (whether or not foreseeable or 
                      avoidable) incurred or suffered by any of such parties and any claims or legal proceedings which are brought or 
                      threatened arising out of or in connection with any use by or conduct of the Customer in relation to any of the 
                      Services, any transactions, dealings or arrangements made with any third party as a result of using the Services or 
                      any breach of any of the provisions of these Terms or of any law or the rights of any third party.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="liability" className="text-2xl font-semibold text-gray-900 mb-6">10. Limitation on Liability</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.1 Ecosave Pay LTD will exercise all reasonable skill and care in providing the Services. However, the performance 
                      of the Services by Ecosave Pay LTD may be dependent upon third parties (including, without limitation, Suppliers and 
                      Existing Suppliers) and Ecosave Pay LTD is not able to guarantee or accept any responsibility for any failure or delay 
                      caused by such third parties or for any inaccurate, incomplete or unreliable information provided to the Customer by 
                      such parties via Ecosave Pay LTD.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.2 Ecosave Pay LTD shall use its reasonable endeavours to ensure that all pricing information provided by Ecosave 
                      Pay LTD to the Customer as part of the Pricing Comparison Service is accurate, current and reliable in all material 
                      respects. However, save in respect of the foregoing, Ecosave Pay LTD does not warrant and excludes all liability in 
                      respect of the accuracy, completeness, fitness for purposes or legality of any information accessed as a result of 
                      the Customer&apos;s use of the Services, the Site or the Call Centre or otherwise communicated by Ecosave Pay LTD to the 
                      Customer.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.3 Except as expressly provided in these Terms, the Services and the Site are provided on an &quot;as is&quot; basis without 
                      representation or warranty of any kind and to the fullest extent permissible pursuant to applicable law Ecosave Pay 
                      LTD disclaims all other conditions, representations, statements and warranties, either express or implied (whether by 
                      common law, custom, statute or otherwise).
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.4 Subject to the foregoing, if by any mistake, act or omission of Ecosave Pay LTD in the performance of the Services, 
                      the Customer suffers a direct financial loss as a result of such mistake, act or omission, Ecosave Pay LTD will compensate 
                      the Customer for such direct loss on the following basis:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">a.</span>
                        <span>the Customer must submit any claim within 3 months of identifying the mistake, act or omission that has 
                        resulted in such direct loss and must follow Ecosave Pay LTD&apos;s claims process</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">b.</span>
                        <span>Ecosave Pay LTD&apos;s total liability for all losses of whatever nature suffered by the Customer as a result 
                        of such mistake, act or omission is strictly limited to the lesser of: (i) the amount that the Customer would have 
                        saved but for Ecosave Pay LTD&apos;s mistake, act or omission; or (ii) the commission fee earned by Ecosave Pay LTD from 
                        the Supplier as a result of Ecosave Pay LTD securing and finalising the Contract between the Supplier and the Customer, 
                        which can be found by emailing the customer ID to info@ecosavepay.com</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">c.</span>
                        <span>The Customer acknowledges and agrees that Ecosave Pay LTD shall not be liable for:</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-lg text-gray-600 pl-12 mt-2">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">i.</span>
                        <span>any indirect loss, claim or damage, or any punitive, special, incidental or consequential damages of any 
                        kind that are not directly associated with the Customer&apos;s claim;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">ii.</span>
                        <span>any loss of profit or savings;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">iii.</span>
                        <span>loss or corruption of data or information;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">iv.</span>
                        <span>loss of business;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">v.</span>
                        <span>damage to goodwill or reputation(s);</span>
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed text-gray-600 mt-4">
                      in each case whether direct or indirect and in each case whether based in contract, tort (including without limitation 
                      negligence), strict liability, or otherwise, arising out of or in connection with these Terms, the Services, the Site 
                      and/or any use thereof, in each case even if Ecosave Pay LTD has been forewarned or is aware of the possibility of such 
                      loss or damage.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      10.5 Ecosave Pay LTD does not exclude or limit its liability (if any) in any way:
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">a.</span>
                        <span>for death or personal injury caused by Ecosave Pay LTD&apos;s negligence;</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">b.</span>
                        <span>for fraud or fraudulent misrepresentation; or</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">c.</span>
                        <span>for any matter from which it is unlawful to exclude, or attempt to exclude, Ecosave Pay LTD&apos;s liability.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="data" className="text-2xl font-semibold text-gray-900 mb-6">11. Data Protection</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      The Customer acknowledges and agrees that details of the Customer&apos;s name, address and payment record may be 
                      submitted to a credit reference agency, and personal data will be processed by and on behalf of the Customer 
                      in accordance with Ecosave Pay LTD&apos;s Privacy Policy, as is more particularly set out in{' '}
                      <Link href="/privacy" className="text-[#3faa4e] hover:underline">
                        www.ecosavepay.com/privacy-policy
                      </Link>
                      . The Customer also grants Ecosave Pay LTD permission to investigate their supply details on the relevant industry 
                      databases (including but not limited to Transco, Xoserve, ECOES, Companies House, HRMC, The Charity Commission for 
                      England and Wales) in order to provide any quotation, or facilitate any contract or transfer.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="force" className="text-2xl font-semibold text-gray-900 mb-6">12. Force Majeure</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      Ecosave Pay LTD shall have no liability to the Customer if it is prevented from or delayed in performing any of 
                      its obligations in relation to the provision of any of the Services, or from carrying on its business, by acts, 
                      events, omissions or accidents beyond Ecosave Pay LTD&apos;s reasonable control, including (without limitation):
                    </p>
                    <ul className="space-y-3 text-lg text-gray-600 pl-6">
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Strikes, lock-outs or other industrial disputes (whether involving the workforce of Ecosave Pay LTD or any 
                        other party)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Failure of a utility service or transport network</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Act of God, war, riot, civil commotion, malicious damage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Compliance with any law or governmental order, rule, regulation or direction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#3faa4e] mr-3">•</span>
                        <span>Accident, breakdown of plant or machinery, fire, flood, storm or default of suppliers or subcontractors</span>
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed text-gray-600 mt-4">
                      and Ecosave Pay LTD shall be entitled to a reasonable extension of the time for performing such obligations in 
                      the event of any such occurrence.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 id="waiver" className="text-2xl font-semibold text-gray-900 mb-6">13. No Waiver</h3>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      Any failure or delay by Ecosave Pay LTD to enforce any of its rights under these Terms is not to be taken as or 
                      deemed to be a waiver of that or any other right unless Ecosave Pay LTD acknowledges and agrees to such a waiver 
                      in writing.
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
                      16.1 These Terms are binding on the Customer and Ecosave Pay LTD and on each parties&apos; respective successors and 
                      assigns.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      16.2 The Customer may not transfer, assign, charge or otherwise dispose of these Terms, or any of its rights or 
                      obligations arising under them, without Ecosave Pay LTD&apos;s prior written consent.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      16.3 Ecosave Pay LTD may at any time transfer, assign, charge, sub-contract or otherwise dispose of these Terms, 
                      or any of its rights or obligations arising under them.
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