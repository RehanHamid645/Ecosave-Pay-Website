// "use client";

// import { Disclosure } from "@headlessui/react";
// import { ChevronDown } from "lucide-react";
// import Button from "../shared/Button";


// const faqs = [
//   {
//     "question": "What British Gas business tariffs are available?",
//     "answer": "British Gas offers fixed-rate, variable, flexible, and green energy tariffs for businesses. Fixed tariffs suit SMEs looking for price security, while flexible tariffs allow larger businesses to take advantage of wholesale market changes."
//   },
//   {
//     "question": "How much does British Gas business energy cost?",
//     "answer": "British Gas business prices vary depending on usage, meter type, business size, postcode, and credit rating. The most accurate way to view current pricing is through a quote which will provide a live comparison."
//   },
//   {
//     "question": "When should I renew my British Gas business energy contract?",
//     "answer": "You should renew your contract during the renewal window, typically 60–90 days before your contract end date. This is the ideal time to speak with the energy experts at Ecosave Gas & Power. Our team can help you compare British Gas business quotes, negotiate better renewal rates, and even secure early contract renewals to avoid costly rollover rates."
//   },
//   {
//     "question": "What happens if my British Gas business contract expires?",
//     "answer": "If your contract ends and you don’t renew or switch, your business will move onto deemed or out-of-contract rates, which are more expensive. You can switch away from deemed rates at any time without penalty."
//   },
//   {
//     "question": "Does British Gas install smart meters for businesses?",
//     "answer": "Yes, British Gas installs SMETS2 smart meters for SMEs and half-hourly meters for high-usage businesses. Smart meters allow accurate billing and detailed usage tracking."
//   },
//   {
//     "question": "Does British Gas offer renewable or green business energy?",
//     "answer": "Yes. British Gas offers renewable-backed electricity, carbon offset gas options, and zero-carbon business tariffs to help companies reduce their environmental impact."
//   },
//   {
//     "question": "How do I switch my business energy to British Gas?",
//     "answer": "To switch, you'll need your MPAN/MPRN numbers, recent meter readings, and business details. The switch usually takes 2–4 weeks with no supply interruption. Most business owners we have worked with have found it easier for Ecosave Gas & Power to manage the entire switching process for them."
//   },
//   {
//     "question": "Are there exit fees on British Gas business contracts?",
//     "answer": "Most fixed British Gas business tariffs include exit fees if you leave early. However, after entering your renewal window, you can switch or renew without penalty."
//   },
//   {
//     "question": "Can existing British Gas business customers negotiate cheaper renewal rates?",
//     "answer": "Yes. British Gas renewal quotes can often be negotiated, especially when compared with live market rates. At Ecosave Gas & Power, we can help you negotiate better rates by providing a live comparison of current market options."
//   },
//   {
//     "question": "Why are British Gas deemed or out-of-contract rates higher?",
//     "answer": "Deemed rates are higher because no contract is in place. They are designed to encourage businesses to renew or switch to a fixed tariff quickly."
//   },
//   {
//     "question": "What’s their fuel mix vs competitors?",
//     "answer":
//       "British Gas publishes fuel mix annually. Their mix includes nuclear and renewables. Competitor mixes vary depending on sourcing.",
//   },

//   {
//     "question": "How do I find my business MPAN or MPRN for British Gas?",
//     "answer": "Your MPAN and MPRN are shown on your business energy bill. If you do not have a bill, Ecosave Gas & Power can retrieve the information through national databases to help guide you through the process.."
//   },
//   {
//     "question": "How long does it take to switch my business energy to British Gas?",
//     "answer": "A typical business energy switch takes 2–4 weeks depending on meter type and supplier objections. You will not lose supply at any point during the switch."
//   },
//   {
//     "question": "Does British Gas offer business energy for multiple sites?",
//     "answer": "Yes, British Gas provides multi-site contracts that allow businesses to combine meters, streamline billing, and negotiate better prices across multiple locations."
//   },
//   {
//     "question": "What information do I need for a British Gas business quote?",
//     "answer": "You will need your business address, MPAN/MPRN numbers, annual consumption, and contract end date. If you do not have these details, Ecosave Gas & Power can obtain them on your behalf."
//   },
//   {
//     "question": "Why are business energy rates different from domestic British Gas prices?",
//     "answer": "Commercial rates differ due to wholesale pricing, standing charges, metering setup, contract lengths, and regulatory requirements. Business tariffs are also tailored to usage patterns, which vary significantly from households."
//   },
//   {
//     "question": "Can I switch my British Gas business energy contract if my company has bad credit?",
//     "answer": "Yes, although British Gas may require a deposit or offer alternative tariffs. Ecosave Gas & Power specialises in finding suppliers who accept low-credit or newly formed businesses."
//   },
//   {
//     "question": "Can I switch away from British Gas if my account is in debt?",
//     "answer": "In many cases, yes. Commercial switching rules differ from domestic, meaning switching in debt may be allowed depending on the circumstances. Our team can check eligibility for you."
//   },
//   {
//     "question": "Are smart meters mandatory for British Gas business customers?",
//     "answer": "British Gas may require a smart meter installation for certain tariffs or meter types. Smart meters ensure accurate billing and help businesses manage usage."
//   },
//   {
//     "question": "Does British Gas offer half-hourly meters for large businesses?",
//     "answer": "Yes. Businesses with high peak demand typically require half-hourly meters. British Gas provides HH meter installations and specialised tariffs for larger organisations."
//   },
//   {
//     "question": "Can British Gas help my business reduce energy usage?",
//     "answer": "British Gas offers smart meter insights and energy efficiency tools, and renewable-backed plans. Our team at Ecosave Gas & Power can help you to understand and reduce consumption by recommending the best tariff for your business."
//   }
// ]


// export default function  BritishGasFAQ() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {faqs.map((item, index) => (
//           <div key={index} className="border-b border-gray-300 py-6">
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="w-full flex justify-between items-center text-left">
//                     <span className="text-xl font-semibold text-gray-900">
//                       {item.question}
//                     </span>

//                     <ChevronDown
//                       className={`h-6 w-6 text-gray-600 transition-transform ${
//                         open ? "rotate-180" : ""
//                       }`}
//                     />
//                   </Disclosure.Button>

//                   <Disclosure.Panel className="mt-3 text-gray-600 text-lg leading-relaxed">
//                     {item.answer}
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }
