'use client'

import React, { useState } from 'react'
import StillHaveQuestions from '@/components/shared/StillHaveQuestions'

const faqs = [
  {
    question: "What payment methods do Ecosave Pay card machines accept?",
    answer: "Ecosave Pay card machines accept all major payment methods, inlcuding Visa, Mastercard, Maestro, and American Express, along with contactless, chip & Pin, and mobile wallet payments such as Apple Pay, Google Pay, and Samsung Pay. Whether you're using a countertop terminal, portable reader, or self-service unit, our technology ensures your customers can pay quickly, securely, and in the way that suits them best.",
  },
  {
    question: "How quickly will I receive my funds after processing payments?",
    answer: "Ecosave Pay provided next-day settlement as standard across all our payment solutions. Once a transaction is processed, your funds are transferred directly to your UK bsuiness bank account by the next working day, ensuring your cash flow remains strong and consistent",
  },
  {
    question: "What’s the difference between mobile and countertop card machines?",
    answer:"Mobile card machines are lightweight, battery-powered devices designed for businesses that need to take payments on the move—such as restaurants, delivery services, pop-up shops, and mobile traders. They connect via Wi-Fi or mobile data, giving you the flexibility to accept payments anywhere. Countertop card machines, on the other hand, are best suited for fixed locations like retail stores, cafes, salons, and reception areas. They connect through a stable wired or Wi-Fi connection, providing consistent performance and reliability at the point of the sale.",
  },
  {
    question: "Can I use Ecosave Pay card machines at multiple business locations?",
    answer: "Yes, Ecosave Pay's payment solutions are ideal for multi-location businesses across the UK. Our central management portal allows you to monitor transactions, track performance, and manage terminals across all sites-giving you full visibility and control from one secure platform.",
  },
  {
    question: "What online payment solutions does Ecosave Pay provide?",
    answer: "Ecosave Pay offers a comprehensive range of online payment solutions, including secure payment gateways, payment links, QR code payments, virtual payments, virtual terminals, and API integration for full eCommerce checkout functionality. These tools make it easy for UK businesses to accept payments online, over the phone, or remotely- all through a single, secure platform. With our virtual terminal, you can take card payments from anywhere with an internet connection, ensuring flexibility and reliability for every transaction",
  },
  {
    question: "What are Ecosave Pay’s opening hours?",
    answer: "Our main business hours are Monday to Thursday, 9:00 a.m to 5:30 p.m (GMT). During these times, our sales, customer service, and accounts teams are available to assist with new terminal setups, billing enquiries, and general support for your business.",
  },
  {
    question: "What is Terminal Care and when is it available?",
  answer: `Terminal Care is Ecosave Pay’s comprehensive card machine support service, available for just £4.99 per month, per terminal. It’s designed to keep your business running smoothly — even when the unexpected happens.\n\nWith Terminal Care, you’ll receive:\n• 24-hour terminal replacement in the event of damage or disruption\n• 7-day support coverage, including weekends\n• Bank holiday assistance, so you’re never left without help\n• Nationwide UK coverage through our network of strategically located service centres\n\nEcosave Pay Terminal Care gives you peace of mind, ensuring minimal downtime and continuous payment capability when your business needs it most.`,
  },
]


export default function FAQSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#4ac88f] text-4xl sm:text-5xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Get Instant Answers To Your Payment Questions
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <div className="font-bold text-left text-black mb-3 text-2xl sm:text-3xl">
                {faq.question}
              </div>
              <p className="mt-3 text-xl sm:text-2xl text-gray-800 whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <StillHaveQuestions />
        </div>
        {/* <div className="mt-16 bg-gray-100 p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-sm text-gray-700 mb-4">
            Can’t find the answer you’re looking for? Speak with one of our Ecosave Pay payment experts today...
          </p>
          <button className="bg-[#4ac88f] text-white px-6 py-2 rounded-full hover:bg-[#3bb47c]">
            GET IN TOUCH
          </button>
        </div> */}
      </div>
    </section>
  )
}
