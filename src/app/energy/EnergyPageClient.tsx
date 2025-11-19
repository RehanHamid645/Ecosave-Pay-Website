'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, PiggyBank, Clock, Shield, BarChart3, CheckCircle2, Headset } from 'lucide-react'
import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const features = [
  {
    title: 'Save Money',
    description: 'Compare prices from leading UK suppliers and save up to 45% on your energy bills.',
    icon: PiggyBank,
  },
  {
    title: 'Quick & Easy',
    description: 'Simple 5-minute quote process with dedicated switching support.',
    icon: Clock,
  },
  {
    title: 'Expert Guidance',
    description: 'Free, impartial advice from energy experts to find the best deal.',
    icon: Shield,
  },
  {
    title: 'Full Support',
    description: '5-star rated customer service throughout your contract.',
    icon: Headset,
  },
  {
    title: 'Compare rates from major suppliers',
    description: 'Fixed contracts available',
    icon: CheckCircle2,
  },
  {
    title: 'Siteworks',
    description: 'New meter installs, smart meter upgrades and renewable solutions ',
    icon: Zap,
  },
]

const switchingSteps = [
  {
    title: 'Share Your Details',
    description: 'Provide your business details and current energy usage',
    icon: BarChart3,
  },
  {
    title: 'Compare Quotes',
    description: 'Compare prices from leading UK suppliers',
    icon: CheckCircle2,
  },
  {
    title: 'Choose & Switch',
    description: 'Select your preferred tariff and complete the switch',
    icon: ArrowRight,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}


// Add illustration data

// Dynamic client-only imports for embedding the quote steps
interface Step1Props {
  onNext?: () => void
  embedded?: boolean
  showTitle?: boolean
  textColorScheme?: 'dark' | 'light'
}
interface Step2Props {
  onNext?: () => void
  onBack?: () => void
  embedded?: boolean
  textColorScheme?: 'dark' | 'light'
}
interface Step3Props {
  onBack?: () => void
  onSuccess?: () => void
  embedded?: boolean
  textColorScheme?: 'dark' | 'light'
}

const ServiceSelection = dynamic<Step1Props>(() => import('@/app/energy-quote/step1/page').then(m => m.default), { ssr: false })
const Step2 = dynamic<Step2Props>(() => import('@/app/energy-quote/step2/page').then(m => m.default), { ssr: false })
const Step3 = dynamic<Step3Props>(() => import('@/app/energy-quote/step3/page').then(m => m.default), { ssr: false })

const faqs = [
  {
    question: 'How long does it take to switch business electricity?',
    answer: 'Non-domestic switches usually take around six weeks to complete. You can compare and sign up for a new deal up to six months before your current deal ends. To avoid expensive rates, we advise arranging a new deal way in advance of your contract expiring.'
  },
  {
    question: 'Will switching interrupt my electricity supply?',
    answer: 'No. Your current and new suppliers will work together to transfer your supply without any interruption. Your electricity will still be supplied through the existing cables, with no need for any physical changes to your premises.'
  },
  {
    question: 'What information do I need to switch?',
    answer: "We only need your business name and postcode to compare rates. For the actual switch, you will need your MPAN number (a 21-digit number beginning with 'S' found on your electricity bill)."
  },
  {
    question: 'Do electricity prices vary by region?',
    answer: 'Yes, prices vary based on supply and demand, supplier costs, and transportation costs in your region. Rural areas often have higher rates due to transportation costs.'
  },
  {
    question: 'Can I switch to green electricity?',
    answer: 'Yes, green electricity options are available across most of the UK. Switching to renewable sources can benefit both your energy bills and your environmental image.'
  }
]

export default function EnergyPage() {
  const [inlineStep, setInlineStep] = React.useState<number>(1)
  const router = useRouter()

  // handlers for embedded flow
  const handleNextFromStep1 = () => setInlineStep(2)
  const handleNextFromStep2 = () => setInlineStep(3)
  const handleBackToStep1 = () => setInlineStep(1)
  const handleBackToStep2 = () => setInlineStep(2)
  const handleSuccess = () => {
    router.push('/energy-quote/thank-you')
  }
  return (
    <main className="min-h-screen overflow-x-hidden pt-28">
      {/* Hero Section */}
      <section className="h-[900px] relative bg-gradient-to-b from-white to-gray-50 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left max-w-2xl mx-auto lg:mx-0"
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl break-words">
                Switch & Save <span className="text-[#3faa4e] relative inline-block pb-6 sm:pb-8">Effortlessly
                  <svg className="absolute -bottom-3 sm:-bottom-8 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      d="M0 10 Q50 20 100 10"
                      stroke="#3faa4e"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-600">
                Join thousands of happy businesses who&apos;ve already made the switch. 
                Our hassle-free process means you can start saving in minutes, not weeks.
                <br />
                <br />
                We make it easy to switch your business energy supplier.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10"
              >
                <Link 
                  href="/energy-quote/step1" 
                  className="w-full sm:w-auto block"
                >
                <Button 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                      className="w-full hover:scale-105 transition-transform bg-[#3faa4e] hover:bg-[#359043] text-white shadow-lg hover:shadow-xl"
                >
                    Start Saving Today
                </Button>
                  </Link>
                <Link 
                  href="/case-studies" 
                  className="w-full sm:w-auto block"
                >
                <Button 
                  size="lg" 
                  variant="outline"
                      className="w-full hover:bg-gray-50 transition-colors"
                >
                    See Success Stories
                </Button>
                  </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative h-[500px] w-full overflow-hidden rounded-2xl hidden md:block">
                    
                  </div>
                  {/* Service selection card (mid-right) - desktop only; nudged slightly lower so it doesn't touch the quote banner */}
                  <div className="hidden md:block absolute right-0 top-[70%] -translate-y-1/2 md:w-[360px] lg:w-[520px]">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu scale-95">
                      {/* Inline progress bar (from energy-quote layout) */}
                      <div className="p-4">
                        <div className="mb-4">
                          {/** Stepper UI integrated with progress bar **/}
                          <div className="relative flex items-center w-full mx-auto" style={{ minHeight: '60px', maxWidth: '400px' }}>
                            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
                            <div
                              className="absolute top-1/2 left-0 h-2 bg-[#3faa4e] rounded-full -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
                              style={{
                                width: `${((inlineStep - 1) / (3 - 1)) * 100}%`,
                                maxWidth: '100%',
                              }}
                            />

                            {['Energy Type', 'Postcode', 'Contact Details'].map((step, idx) => {
                              const activeIndex = inlineStep - 1;
                              const isActive = idx === activeIndex;
                              const isCompleted = idx < activeIndex;
                              const leftPercent = (idx / (3 - 1)) * 100;
                              return (
                                <div
                                  key={idx}
                                  className="flex flex-col items-center z-20"
                                  style={{
                                    position: 'absolute',
                                    left: `calc(${leftPercent}% - 40px)`,
                                    top: '50%',
                                    transform: 'translateY(-25%)',
                                    minWidth: '70px',
                                  }}
                                >
                                  <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-full border-2 mb-2
                                      ${isCompleted ? 'bg-green-500 border-green-500 text-white' : isActive ? 'bg-white border-blue-500 text-blue-500' : 'bg-white border-gray-300 text-gray-400'}`}
                                  >
                                    {isCompleted ? '✓' : idx + 1}
                                  </div>
                                  <div className="text-xs text-center whitespace-nowrap">{step}</div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      {inlineStep === 1 && <ServiceSelection onNext={handleNextFromStep1} embedded />}
                      {inlineStep === 2 && <Step2 onNext={handleNextFromStep2} onBack={handleBackToStep1} embedded />}
                      {inlineStep === 3 && <Step3 onBack={handleBackToStep2} onSuccess={handleSuccess} embedded />}
                    </div>
                  </div>
                  {/* Adjust blur elements for mobile */}
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 h-20 sm:h-40 w-20 sm:w-40 rounded-full bg-[#3faa4e]/10 blur-xl sm:blur-2xl" />
                  <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 h-20 sm:h-40 w-20 sm:w-40 rounded-full bg-blue-500/10 blur-xl sm:blur-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We make energy procurement simple and cost-effective
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={item}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="bg-[#3faa4e]/10 p-3 rounded-full mb-4 transform transition-transform hover:rotate-12">
                    <feature.icon className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Switch your business energy in three simple steps
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {switchingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="h-full p-6 text-center">
                  <div className="bg-[#3faa4e]/10 p-4 rounded-full mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                    {step.icon && React.createElement(step.icon, { className: "h-8 w-8 text-[#3faa4e]" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
                {index < switchingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Switch Business Electricity?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#3faa4e] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Access better rates than standard variable tariffs</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#3faa4e] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Fixed-rate contracts protect against price rises</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#3faa4e] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Choose green energy options to support sustainability</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#3faa4e] mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Expert support throughout your contract term</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    icon={ArrowRight} 
                    iconPosition="right"
                  >
                    Learn More About Switching
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">What You&apos;ll Need</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#3faa4e]/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-[#3faa4e]" />
                  </div>
                  <div>
                    <p className="font-semibold">Recent Energy Bill</p>
                    <p className="text-sm text-gray-600">To compare your current rates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3faa4e]/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-[#3faa4e]" />
                  </div>
                  <div>
                    <p className="font-semibold">Contract End Date</p>
                    <p className="text-sm text-gray-600">To avoid early termination fees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3faa4e]/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-[#3faa4e]" />
                  </div>
                  <div>
                    <p className="font-semibold">Business Details</p>
                    <p className="text-sm text-gray-600">Basic information about your company</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Talk to Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why It&apos;s Better to Talk
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              90% of business owners prefer speaking to someone about their energy switch
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full p-6">
                <h3 className="text-xl font-semibold mb-4">Look Behind the Headlines</h3>
                <p className="text-gray-600">
                  Business electricity prices include many components like standing charges, unit rates, and other fees. We&apos;ll help you understand the real savings behind the headline figures.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full p-6">
                <h3 className="text-xl font-semibold mb-4">Tailored Pricing</h3>
                <p className="text-gray-600">
                  As the UK&apos;s market leader for business electricity comparison, we get exclusive rates from trusted suppliers and can tailor prices to your business needs.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full p-6">
                <h3 className="text-xl font-semibold mb-4">Smooth Transitions</h3>
                <p className="text-gray-600">
                  Our dedicated team manages both your old and new suppliers, ensuring all details are correct and your new contract goes live smoothly.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">All Part of Our Service</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-[#3faa4e]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Digital Renewal Service</h3>
                    <p className="text-gray-600">
                      We proactively compare deals for your next contract and share them by email. Choose your deal online, and we&apos;ll handle everything else.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3faa4e]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">One-Stop Business Shop</h3>
                    <p className="text-gray-600">
                      Beyond utilities, we can also help with waste management, merchant services, connectivity, and finance. Save time by managing all your essential services in one place.                     </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#3faa4e]/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#3faa4e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                    <p className="text-gray-600">
                      Our tech-enabled experts are always on hand to help with any questions about your energy contract or switch.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/business-support.jpg"
                  alt="Business support team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Reduce blur size for mobile */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 h-24 sm:h-48 w-24 sm:w-48 bg-[#3faa4e]/10 rounded-full blur-xl sm:blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about switching business electricity
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3faa4e]/10 to-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Ready to Transform Your Energy Costs?
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses already saving with our expert energy solutions. 
              Get your personalized quote today.
            </p>
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/energy-quote/step1">
                <Button 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  Compare Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
} 