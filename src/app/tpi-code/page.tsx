'use client'

import { motion } from 'framer-motion'

export default function TPICodePage() {
  return (
    <main className="min-h-screen pt-28">
      <article className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg mx-auto"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                This website is owned and operated by Ecosave Gas and Power LTD. For information about the terms on which you can use this website, how data collected through this website is used or for information about Ecosave Gas and Power and its product and services, Please see the section below.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Our legal documents are designed to de-mystify the legal aspects of our energy business, make the information you need easy to understand and give you a better understanding of our business.
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Third Party Intermediary (TPI) Code of Practice For Micro-Businesses:</h1>
              
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">What is the TPI code of practice</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                The TPI Code of Practice is a set of standards that sets the benchmark for responsible, high quality TPI's acting as intermediaries between micro-business customers and suppliers.
              </p>

              <h3 className="text-xl font-bold tracking-tight text-gray-900">By signing up to this Code of Practice, TPI's agree to:</h3>
              <ul className="list-disc pl-6 text-lg text-gray-600">
                <li>be bound by it and by any decisions taken under the Code by the Code Manager</li>
                <li>make sure their people (including any third parties they use) understand and comply with it</li>
                <li>tell customers they're providing their service according to the Code and where they can find it</li>
                <li>uphold the public image and reputation of the energy industry.</li>
              </ul>

              <h3 className="text-xl font-bold tracking-tight text-gray-900">it covers:</h3>
              <ul className="list-disc pl-6 text-lg text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>Third Parties</li>
                <li>Recruitment</li>
                <li>Training</li>
                <li>Staff Records</li>
                <li>Sales Materials</li>
                <li>Responsible Selling</li>
                <li>Related Laws and Regulations</li>
                <li>Data Protection</li>
                <li>Change of Tenancy</li>
                <li>Supply Contracts and Submissions</li>
                <li>Customer Contracts and Consent</li>
                <li>Sales Commission</li>
                <li>Complaints</li>
                <li>System and Controls</li>
                <li>Roles and Responsibilities</li>
                <li>Breaches and Sanctions</li>
                <li>Glossary</li>
              </ul>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">1. Third Parties</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">1.1 Responsibility</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If the TPI uses a third party, it's their responsibility to make sure that anyone working on their behalf understands and follows this Code.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Any actions of the third party are deemed to be the action and responsibility of the TPI and this is relevant throughout all principles laid out in this Code.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">1.2 Records</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI must keep details of any third parties they use. They must share them with suppliers, regulators, the Code Manager, the Independent Code Panel and their representatives, if asked.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must issue any third parties they use with unique identifiers that they must share with suppliers and upon request with the regulators, the Code Manager and the Independent Code Panel and their representatives.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI must have a robust, continuous screening and selection process in place to determine which third parties they choose to use.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">2. Recruitment</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">2.1 Hiring</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must be able to show that for each of their sales representatives they have:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>gathered their employment and training history</li>
                        <li>obtained and checked professional references</li>
                        <li>obtained Criminal Record Bureau checks (field based representatives only) for any new staff and identify when appropriate action is required.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">3. Training</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">3.1 Training</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must have an effective training programme in place. They must be able to show that all their representatives have gone through a thorough induction and assessment, before they're allowed to provide services to a customer.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They must also update their training as regularly as required, in line with the latest changes, for example (but not limited to) in the market, laws or regulations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">3.2 Assessment</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI must assess all their representatives before they can provide services to customers – and again at least once a year after that.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The assessment should confirm that the representatives at least fully understand:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>all products that the TPI presents to micro-businesses</li>
                        <li>requirements for correctly using Change of Tenancy</li>
                        <li>how to identify a micro-business</li>
                        <li>how to recognise and treat vulnerable customers</li>
                        <li>what they need to do to abide by this Code and the implications for the TPI and them personally if they breach the provisions of the Code</li>
                        <li>what they need to do to comply with the Data Protection Act</li>
                        <li>what other relevant laws & regulations they need to be aware of (and comply with where applicable – including Ofgem's Standards of Conduct and Electricity/Gas Supply Licence condition 7a & 7b).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">3.2 Records</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must keep training records for each of their representatives which show they've been through regular training and assessments, and when.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">4. Staff records</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">4.1 Records</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must keep a record for each of their representatives, including their:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>name and address</li>
                        <li>date of birth</li>
                        <li>period of employment</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's should manage their staff records effectively to make each sales contract traceable to an individual representative.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        These records must be maintained in line with the Document Retention Policy, to allow customer queries and/or complaints to be fully investigated and resolved, and shared with suppliers, regulators, the Code Manager, Independent Code Panel and their representatives, if asked.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">5. Sales material</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">5.1 Honest, accurate and transparent</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must make sure that any sales materials they use, including web-based sales tools are written in a simple, accurate and transparent way.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They mustn't use any false or misleading information – or try to hide or gloss over any facts about which the customer should be made aware.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">5.2 Quotes</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        All quotes provided to the customer must:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>be based on the most up to date information obtained from the supplier</li>
                        <li>be based on the most up to date information obtained from the customer (and make this clear to the customer)</li>
                        <li>explain how it's been calculated</li>
                        <li>include all principal terms as provided by the supplier(s).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">5.3 Sample copies</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must share copies of their sales material with regulators, the Code Manager and the Independent Code Panel and their representatives, if asked.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They must also share copies of their sales material about suppliers' products with the relevant supplier.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">6. Responsible Selling</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">6.1 Identification</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Whenever TPI's talk to a customer, they must:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>say who they are and who they're working for (give their name and the full business name of the TPI).</li>
                        <li>state the reason they are contacting them.</li>
                        <li>make it clear they work for a separate company, not the supplier.</li>
                        <li>say which suppliers they associate with.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">6.2 Nuisance calls and face to face sales</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must respect the customer's right to say no. If a customer says it's a bad time or they don't want to talk, the TPI should accept this straight away – and not make a return visit and/or call back if the customer asks them not to.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">6.3 Contact details</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's will give the customer full contact details, including a phone number they can call, if they want to get in touch.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">6.5 Diversity</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI will treat everyone they talk to with the same courtesy and respect, whatever their background, beliefs or abilities. They won't use sales tactics that make people feel excluded or alienated.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">6.6 No Pressure</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI won't use high pressure sales tactics to push, force or bully anyone into buying anything.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They will not exploit a person's inexperience, vulnerability, suggestibility or sense of loyalty to make a sale – and will treat them with sensitivity and respect.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">6.7 Honest, accurate and transparent</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's will use clear, easy-to-understand language. They mustn't say anything false or misleading to make a sale – or try to hide or gloss over anything.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        All relevant information will be presented to the customer so they can make an informed decision, such as (but not limited to):
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>contract length</li>
                        <li>all charges applicable to the customer (e.g. standing charge(s) and price per kWh); clearly stating where there are fixed and/or variable elements</li>
                        <li>principal terms of the contract including (but not limited to) payment method and agreed billing frequency</li>
                        <li>supplier(s) will make the customer aware of the supply start date unless agreed in advance via the TPI</li>
                        <li>next steps for customer, supplier and/or TPI.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI is responsible for making sure they only present and/or sell to the customer products or services that are right for their business needs and circumstances.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's will be respectful and fair with other TPI's and suppliers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">6.8 Records</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI must keep records of every quote they give out and every sale they make for at least 12 months from the first call or visit – or if a contract is agreed, 12 months after the end date whichever is later).
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">7. Relevant laws and regulations</h2>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-600">
                      As well as this Code, TPI's must be aware of (and comply with where applicable) other laws and regulations, including (but not limited to):
                    </p>
                    <ul className="list-disc pl-6 text-lg text-gray-600">
                      <li>OFGEM Supply Licence Conditions 7a & 7b</li>
                      <li>Data Protection Act</li>
                      <li>AUDDIS</li>
                      <li>Business Protection from Misleading Marketing Regulations 2008 (BPMMRs)</li>
                      <li>Employment law</li>
                      <li>and any other laws and regulations that may apply.</li>
                    </ul>

                    <p className="text-lg leading-relaxed text-gray-600">
                      TPI's also need to have an awareness of supplier obligations under the MRA (Master Registrations Agreement – Electricity) and SPAA (Supply Point Administration Agreement – Gas) for the transfer of energy suppliers.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-600">
                      TPI's must be able to show awareness of legal/regulatory updates relevant to their business and implement changes where and when required.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-600">
                      The TPI will ensure that their business practices do not cause suppliers to breach any of the relevant laws and regulations.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">8. Data Protection</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">8.1 Data handling</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's are responsible for following the Data Protection Act, as far as it applies to collecting and storing people's data and marketing preferences.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI must:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>make sure customers understand that they're allowing the TPI to hold their data and preferences under the Data Protection Act (and ask the customer if they allow their data and preferences to be shared with the supplier)</li>
                        <li>register as a data controller with the Information Commissioner</li>
                        <li>agree and sign a Data Processing contract with the supplier</li>
                        <li>keep customers' details secure – and destroy them securely as soon as they are no longer required</li>
                        <li>collate and process customers' Direct Debit details accurately.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must have a robust document retention policy in place and are responsible for maintaining this whilst meeting DPA requirements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">8.2 Marketing consent</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI will screen all customer data (both new and existing customers) against marketing exclusion lists, such as (but not limited to):
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>Telephone Preference Service (TPS)</li>
                        <li>Corporate Telephone Preference Service (CTPS)</li>
                        <li>Mail Preference Service (MPS)</li>
                        <li>Electronic Communications (EC Directive)</li>
                        <li>and any other similar services.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">9. Change of Tenancy (COT)</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">9.1 Responsibility</h3>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>making sure that the customer fully understands what a valid COT is</li>
                        <li>gathering evidence to determine the COT is genuine</li>
                        <li>retaining evidence for as long as the acquiring supplier(s) requires.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        All evidence is to be made available to suppliers upon submission of supply contracts.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI will not use a COT as a means to release a customer from their supply contract or any other reason than a genuine COT.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They will also provide this to regulators, the Code Manager and/or the Independent Code Panel upon request.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">10. Supply contracts and submission</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">10.1 Transparent, accurate and fair</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI is responsible for making sure the customer fully understands that:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>they're agreeing a legally binding contract with the supplier</li>
                        <li>the supplier might not accept the contract, if it doesn't meet their conditions (for example if they fail the credit check)</li>
                        <li>they have to end their current contract and arrange payment of any outstanding balances and/or penalties they owe</li>
                        <li>the supplier may contact them directly.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        There are 3 forms of supply contracts, verbal, paper and electronic (including web-based).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">10.2 Verbal supply contracts</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If the customer agrees to the contract by phone:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>The TPI must present in full, the most up-to-date version of the supplier's verification script to the customer clearly – before the customer agrees to any contract.</li>
                        <li>TPI's must keep a complete and unedited recording of this verification on file for at least the length of the contract term.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They must give a transcript of the recording to the customer if asked. Upon request, they must share the recordings with the suppliers they associate with, regulators, the Code Manager and the Independent Control Panel and their representatives.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">10.3 Paper and electronic supply contracts (including web-based)</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If the customer agrees a supply contract either in an electronic or paper format, a copy needs to be stored on file for at least the length of the contract.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">10.4 Submitting Supply Contracts</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's and suppliers must agree:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>satisfactory security levels</li>
                        <li>appropriate arrangements and/or service level agreements (SLAs) for submissions and rejections.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">10.5 Rejections</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If there are any issues with the contract, the TPI must get in touch with the customer to resolve them before the contract goes to the supplier. If the supplier rejects a contract, the TPI must let the customer know.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">11. Customer contracts and consent</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">11.1 Content</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Where a TPI forms a contract directly with the customer for the service(s) they are providing, the agreement must be clear on the duration of the agreement and any fees that are associated with it, and:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>include a complaints process that's in line with this Code (see 'Complaints')</li>
                        <li>make it clear that the TPI may get a commission from the supplier (see 'Commissions')</li>
                        <li>not prevent the customer from contacting the supplier</li>
                        <li>be clear on any charges to the customer for the TPI's services, including any termination fees.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI is responsible for making sure they only present and/or sell micro-business customers energy products and/or services that are right for their business needs and circumstances.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">11.2 Letter of Authority (LOA)</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Where a customer wants the TPI to act on their behalf, the TPI must have Letter(s) of Authority in place, either presented verbally (which is recorded) or documented (with signature), in clear easy-to-understand language that includes:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>the name of the TPI</li>
                        <li>the name of the Managing Agent (if they have one)</li>
                        <li>the customer's contact details (name, site address(es), contact person and phone number)</li>
                        <li>a clear explanation of the level of authority that the customer is agreeing to.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's should provide the customer with a copy of the LOA (together with a copy of any contract).
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Where the TPI has the relevant LOA in place, they should always ensure the customer is in agreement with the contract before they agree on the behalf of the customer.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">12. Sales commission</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">12.1 Transparent fees</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If a TPI receives any commission, then they must not market their services as "free".
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI will tell customers they may be paid a commission.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If the customer asks, the TPI will also explain:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>how they're being paid (one-off payment, uplift pricing, etc.)</li>
                        <li>who's paying them (the supplier, a TPI)</li>
                        <li>when they will be paid the commission</li>
                        <li>if the customer requests this in writing before the supply contract is agreed, the TPI will respond in writing within 7 days.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">13. Complaints</h2>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-600">
                      TPI's must have a fair, transparent and effective system for handling any complaints from customers.
                    </p>

                    <div>
                      <h3 className="text-xl font-bold">13.1 In writing</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI will write up and publish their complaints process clearly, explaining:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>what the customer's rights are, including what they can do if the complaint isn't resolved</li>
                        <li>who they can call (name and phone number)</li>
                        <li>what the steps in the complaints process are</li>
                        <li>how long each step in the process should take</li>
                        <li>the escalation process (including the customers right to contact the Ombudsman).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">13.2 Training</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's are responsible for making sure all their representatives are fully trained on their complaints and escalation procedures.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">13.3 Response</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        As soon as the TPI gets a complaint (in writing or verbally), they must:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>log the complaint</li>
                        <li>resolve the problem within 24 hours (and keep a separate log of any complaints that take longer)</li>
                        <li>(if it can't be resolved within 24 hours) reply to the customer in writing at least once, explaining what'll happen next and when (escalation)</li>
                        <li>keep the customer up-to-date on the latest developments (and log them).</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">13.4 Over 7 days</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Any complaints not resolved between the TPI and the customer within 7 days must be escalated to the Code Manager.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Permission must be granted from the customer before any information obtained is shared with the Independent Code Manager.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">13.5 Records</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI must have a system for logging and tracking all customer complaints – and share this information with the suppliers they associate with, regulators, the Code Manager and the Independent Code Panel and their representatives, if asked.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">13.6 Types of complaint</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's must take appropriate steps to resolve any complaints about:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>breaching this Code</li>
                        <li>mis-selling</li>
                        <li>representatives' behaviour</li>
                        <li>their general competence.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">13.7 Responsibility</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI and Supplier agree to be bound by the Code Manager's decisions, including compensation.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">14. Systems and controls</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">14.1 Responsibility</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's are responsible for making sure they have robust controls and systems in place for making sure their representatives comply with this Code and monitor compliance against the Code.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        They must also be able to show proof of these systems to suppliers, regulators, the Code Manager and the Independent Code Panel and their representatives, if asked.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">14.2 Self-assessment</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Each year, TPI's will be expected to submit a self-assessment questionnaire on their compliance to the Code to Suppliers. Any failure to complete this self assessment will be regarded as a breach.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">14.3 Audits</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Compliance with this Code is subject to audit and TPI's will be audited by suppliers signed onto this Code, also the Code Manager or other independent auditors can check them at any time.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Audits will be in line with data protection and subject to commercial confidentiality.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        No sensitive or personal information will be sent to or retained by auditors; the Auditor will require visibility of this to complete the audit but this will not be removed from the TPI's premises.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI will agree service level agreements (SLAs) for responding to requests from auditors – whether a routine or unscheduled audit, from a supplier, regulator, independent auditor, the Code Manager or the Independent Code Panel and their representatives.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">15. Roles and responsibilities</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">15.1 TPI</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        TPI's are responsible for making sure all their representatives (including any third parties they use) know and comply with this Code.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI should also make their customers aware of the Code. They're also answerable to the suppliers they associate with, external auditors, regulators, the Code Manager and the Independent Code Panel.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">15.2 Suppliers</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Suppliers must audit TPI's to make sure they stick to this Code, and:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>record minor breaches, and the results</li>
                        <li>record and report major breaches and evidence to the Code Manager</li>
                        <li>provide regular and ad hoc reports to the Code Manager (when asked).</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Suppliers must also:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>support the Code in its aim of protecting micro-business customers</li>
                        <li>give support to TPI's, for example with templates for LOAs and complaints processes</li>
                        <li>be subject to auditing by the Code Manager, Independent Code Panel or external auditor</li>
                        <li>promote the Code.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">15.3 Code Manager</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Code Manager is responsible for the day-to-day running of the Code, including:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>monitoring how TPI's perform</li>
                        <li>bring underperforming TPI's up to standard</li>
                        <li>having the Code independently audited each year</li>
                        <li>an annual review of the Code</li>
                        <li>setting sanctions</li>
                        <li>handling complaints that have escalated beyond the TPI's complaints process (and aren't covered by the supplier's complaints process)</li>
                        <li>publicising monitoring results and sanctions taken</li>
                        <li>liaising with the Independent Code Panel.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">15.4 Independent Code Panel</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        An Independent Code Panel will:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>consider regular reports on the operation and development of the Code</li>
                        <li>offer advice to the Code Manager on all aspects of the Code</li>
                        <li>consider appeals against decisions of the Code Manager</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        That means decisions by the Independent Code Panel are final.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">15.5 Independent auditor</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Code Manager will also appoint an independent auditor to audit the Code at least once a year and whenever the Code Manager thinks it is needed.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">16. Breaches and sanctions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">16.1 Breaches</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If a TPI fails to comply with the Code, it will be treated as a breach, either minor or major.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Breaches will typically be identified by direct reporting by the TPI or the supplier, for example complaints made to the supplier, Code Manager or via the Code audit process.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">16.1.a Minor breaches</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Defined as: a violation of the Code and/or control weakness resulting in potential harm or damage to the customer and/or customers business.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        These will be managed between the TPI and supplier who will agree what action to take. The supplier will share information about these breaches with the Code Manager.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Typically minor breaches will be isolated incidents or oversights e.g not giving contact details, mistakes in verification scripts, etc.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">16.1.b Major breaches</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Defined as: a violation of the Code and/or control weakness resulting in potential and/or immediate harm to the customer and/or customer's business; also an illegal and/or fraudulent practice.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        These will also be managed between the TPI and supplier and the supplier will report them to the Code Manager straight away.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Typically major breaches will be systemic or repeated breaches of the Code or any evidence of fraud or deliberate manipulation e.g. editing call recordings or evidence of fraudulent changes of tenancy.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        An accumulation of minor breaches may also be considered to be a major breach.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">16.2 Sanctions</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        If a TPI breaches this Code, they face sanctions including:
                      </p>
                      <ul className="list-disc pl-6 text-lg text-gray-600">
                        <li>written warnings (which may include the requirement for additional controls and monitoring)</li>
                        <li>suspension (for a stated period of time reliant upon requested actions being satisfied)</li>
                        <li>expulsion (in the event of a TPI being expelled from the Code, this will be for a minimum of 12 months, during which they will be subject to an independent audit at the expense of the TPI before being considered for re-entry)</li>
                        <li>and more, such as legal action if reportable to the police.</li>
                      </ul>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Where a TPI has been suspended and/or expelled from the Code, participating suppliers will not to accept supply contracts during the suspension and/or expulsion from them and/or any of their representatives.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Code Manager will set the appropriate sanctions (overseen by the Independent Code Panel) and put everything in writing – breaches, action plans, timescales and sanctions.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">17. Glossary</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">AUDDIS</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Automated Direct Debit Instruction Service allows Direct Debit Instructions (DDIs) to be electronically transferred between originators and paying banks.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Audit</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        An evaluation of the systems, processes and controls in place that monitor compliance to this code.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Breach</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A system, process or control that fails to meet the requirements of this code.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Business Protection from Misleading Marketing Regulations 2008</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Business Protection from Misleading Marketing Regulations 2008 and subsequent variations which prohibit businesses from advertising products in a way that misleads traders and sets out conditions under which comparative advertising, to consumers and business is permitted.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Change of Tenancy (COT)</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A Change of Tenancy is where ownership or occupation of a site is transferred from one legal entity to another and it is proposed that the energy supply will be transferred to another legal entity. A site will always be under the responsibility of a legal entity; if a site is vacant, responsibility lies with the landlord and/or owner of the site.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Code Manager</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Independent party who administrates, supervises and manages the day-to-day running of the code.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Commission</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A payment made to a TPI by the supplier a contract has been agreed with, either in the form of a one-off payment or uplift on price.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Complaint</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Defined as "any expression of dissatisfaction" by a customer towards their TPI or activities by a TPI.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Contract submission</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The process where a supply contract is presented by a TPI on behalf of their customer to a supplier.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Corporate customer</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Any business falling outside OFGEM's "Micro Enterprise" definition.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Corporate Telephone Preference Service (CTPS)</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A central opt out register where corporate customers can register their wish not to receive unsolicited sales and marketing telephone calls to either all their organisation's telephone numbers, or to certain numbers. It is a legal requirement that companies do not make such calls to numbers registered on the CTPS.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Customer</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The TPI's client and suppliers end user is referred to as the customer.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Customer contract</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The agreement between a TPI and their customer to provide them with their services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Data controller</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are not to be, processed.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Document retention policy</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A set of requirements that a company follows to determine how long it should keep records.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">"The Privacy and Electronic Communications (EC Directive) Regulations"</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The regulations which implement the Directive of the European Parliament concerning the processing of personal data and the protection of privacy in the electronic communications sector.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Electronic contract</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        An electronic version of the paper contract which can be emailed to the customer.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Employment law</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A body of legislations that governs the relationship between employer and employees.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Escalation process</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The process of informing the Code Manager of a complaint that has not been resolved between the TPI and their customer within the set time line.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Independent Code Panel</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A panel of independent professionals who are responsible for confirming final sanction decisions and taking an overview of the Code.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Information Commissioner</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The UK's independent authority set up to uphold information rights in the public interest, promoting openness by public bodies and data privacy for individuals.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Mail Preference Services</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A central opt-out register where customers can register their wish not to receive unsolicited mail.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Main terms</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The key components of a contract which must be presented by the TPI to the customer before the customer enters into a legally binding contract, also known as the "Principal terms".
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Managing Agent</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A person or organisation who act on behalf of a property owner and who may use a TPI for procuring their supply contracts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Marketing consent</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The capture of customer's preferences whether they wish to receive marketing information from a TPI through any channel.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Micro-business</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Has the meaning given to "relevant consumer" (in respect of premises other than domestic premises) in article 2(1) of The Gas and Electricity Regulated Providers (Redress Scheme) Order 2008.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Ofgem</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The Office of Gas and Electricity Market that regulates the electricity and gas markets in Great Britain.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Paper contract</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        An agreement made on a printed document that has been signed by both TPI and the customer and is legally binding.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Regulatory bodies</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Public authorities or government agencies responsible for exercising autonomous authority within the Energy market, e.g. Ofgem and the Office of Fair Trading.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Rejections</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A supply contract submitted to a supplier that is not compliant with the suppliers requirements and therefore returned to the TPI.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Representatives</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Refers to any person(s) that represents the TPI directly (uses the TPI's business name), such as employees, telesales agents, field agents, account managers, etc; whether employed directly or by self-employed agreement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Service level agreements (SLA)</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Timescales for processes agreed between the TPI and their stakeholders, for example suppliers and the Code Manager.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">SME</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Small and Medium Enterprises.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Supply license condition 7a</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The licence condition in gas and electricity supply licences which regulates the sales and renewals of micro business energy contracts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Supply license condition 7b</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        The license condition in the gas and electricity supply license that states the standards of conduct that suppliers work to with their customers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Supply contract</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A legal and binding contract between a TPI's customer and a supplier for the supply of gas and/or electricity to business premises.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Telephone Preference Services</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A central opt-out register where customers can register their wish not to receive unsolicited calls.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Third Parties</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Another person or company working on behalf of the TPI, such as sub-brokers and aggregators, to sell supplier products.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">TPI</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A Third Party Intermediary acting on behalf of a customer, using a letter of authority, regarding their energy supply, also includes third parties the TPI uses (for example Sub-Brokers).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">TPI Letter of Authority (LOA)</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A document that a customer signs or a script read and recorded which gives authority to the TPI to act on their behalf. Letters of Authority can be of restricted or full scope.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Verbal contract</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        An agreement that is spoken between the TPI and customer and recorded (e.g. a telephone conversation) and is legally binding.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Verification script</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        A form of words provided by a supplier which must be read by the TPI to their customer prior to them verbally agreeing a supply contract.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">Vulnerable customers</h3>
                      <p className="text-lg leading-relaxed text-gray-600">
                        This refers to a business property that has a residential element and where there an individual or individuals that have a reliance on an energy supply for their well-being.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  )
} 