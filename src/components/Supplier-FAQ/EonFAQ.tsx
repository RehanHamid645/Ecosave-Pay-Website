"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";


const EonFaqs = [ 
  {
    question: "What E.ON Next business tariffs are available?",
    answer: "E.ON Next offers fixed-rate, flexible, and renewable business energy tariffs designed for SMEs and larger organisations."
  },
  {
    question: "How much does E.ON Next business energy cost?",
    answer: "E.ON Next prices depend on business size, postcode, usage, and credit rating. The most accurate prices come from a live quote comparison."
  },
  {
    question: "What is the difference between E.ON and E.ON Next?",
    answer: "E.ON is the parent company, while E.ON Next is their modern UK supply brand. E.ON handles large infrastructure and energy services, whereas E.ON Next manages electricity and gas supply for UK homes and businesses using a digital-first service model."
  },
  {
    question: "Is E.ON Next the same company as E.ON?",
    answer: "E.ON Next is part of the E.ON Group. They operate under the same umbrella but offer different services. UK supply customers are handled by E.ON Next."
  },
  {
    question: "Does E.ON Next offer 100% renewable business electricity?",
    answer: "Yes. E.ON Next provides renewable-backed electricity sourced from wind, solar and hydro generation."
  },
  {
    question: "When should I renew my E.ON Next business energy contract?",
    answer: "Businesses should typically renew 60–90 days before the contract end date to avoid expensive out-of-contract rates."
  },
  {
    question: "Does E.ON Next install smart meters for businesses?",
    answer: "Yes, E.ON Next installs SMETS2 smart meters for SMEs and half-hourly meters for large consumption sites."
  },
  {
    question: "How do I switch my business energy to E.ON Next?",
    answer: "You’ll need your business details, MPAN/MPRN and usage data. Ecosave Gas & Power can manage the full switching process on your behalf."
  },
  {
    question: "Are there exit fees on E.ON Next business contracts?",
    answer: "Most fixed E.ON Next tariffs have exit fees if cancelled early. During your renewal window, you may switch or renew without charges."
  },
  {
    question: "What happens if my E.ON Next business contract expires?",
    answer: "You will be placed on deemed or out-of-contract rates, which are significantly more expensive. Switching immediately reduces costs."
  },
  {
    question: "How long does it take to switch business energy to E.ON Next?",
    answer: "Switching takes 2–4 weeks on average. Your energy supply won’t be interrupted during the switch."
  },
  {
    question: "Does E.ON Next supply business gas?",
    answer: "Yes. E.ON Next supplies both gas and electricity for UK businesses."
  },
  {
    question: "How do I find my MPAN/MPRN for E.ON Next?",
    answer: "Your MPAN/MPRN is shown on your latest bill, or Ecosave Gas & Power can retrieve it using ECOES (electricity) and Xoserve (gas)."
  },
  {
    question: "Does E.ON Next offer multi-site business contracts?",
    answer: "Yes. They offer multi-site portfolio management to streamline billing and negotiate better pricing."
  },
  {
    question: "Are E.ON Next deemed rates expensive?",
    answer: "Yes. Deemed rates are intentionally high. Switching or renewing instantly lowers costs."
  },
  {
    question: "Does E.ON Next offer online account management?",
    answer: "Yes. E.ON Next has a digital portal for billing, meter reads and usage tracking."
  },
  {
    question: "Can E.ON Next help businesses reduce energy usage?",
    answer: "Yes. E.ON Next provides smart meter insights, consumption tracking and energy efficiency advice."
  },
  {
    question: "Why are E.ON Next business prices different from domestic tariffs?",
    answer: "Business tariffs depend on wholesale markets, contract length, and usage patterns, so pricing differs from domestic energy."
  },
  {
    question: "Can I switch to E.ON Next if my business has a low credit score?",
    answer: "Yes, though a deposit or alternative tariff may be required. Ecosave Gas & Power can help find suitable suppliers."
  },
  {
    question: "Are smart meters required for E.ON Next business tariffs?",
    answer: "Some E.ON Next tariffs require a smart meter so usage can be billed accurately."
  },
  {
    question: "Does E.ON Next offer tariffs for high-usage or industrial businesses?",
    answer: "Yes. E.ON Next provides bespoke pricing, flexible purchasing, and half-hourly metering for large users."
  },
  {
    question: "Can I switch away from E.ON Next if my business is in debt?",
    answer: "Some suppliers may allow switching even if you're in debt. Ecosave Gas & Power can assess your eligibility."
  },
  {
    question: "Does E.ON Next support renewable energy goals for businesses?",
    answer: "Yes. E.ON Next offers green tariffs, carbon insights and sustainability-focused plans for environmentally conscious businesses."
  },
  {
    question: "Can Ecosave compare E.ON Next prices with other suppliers?",
    answer: "Yes. Ecosave Gas & Power compares E.ON Next live quotes with the entire market to secure the best business tariff."
  }
];

export default function  EonFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {EonFaqs.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full flex justify-between items-center text-left">
                    <span className="text-xl font-semibold text-gray-900">
                      {item.question}
                    </span>

                    <ChevronDown
                      className={`h-6 w-6 text-gray-600 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="mt-3 text-gray-600 text-lg leading-relaxed">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}

      </div>
    </section>
  );
}
