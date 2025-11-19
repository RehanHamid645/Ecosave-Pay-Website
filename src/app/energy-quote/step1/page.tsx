'use client'

import Button from '@/components/shared/Button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEnergyQuoteStore } from '@/lib/energy-quote-store'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Flame, Zap, Droplet, Trash2, Phone, CreditCard } from 'lucide-react'
import type { ServiceType } from '@/lib/energy-quote-store'

// Service options definition
const serviceOptions: { type: ServiceType; title: string; icon: React.ReactNode; selectable: boolean }[] = [
  {
    type: 'gas',
    title: 'Gas',
    icon: <Flame className="h-8 w-8" />,
    selectable: true
  },
  {
    type: 'electricity',
    title: 'Electricity',
    icon: <Zap className="h-8 w-8" />,
    selectable: true
  },
  {
    type: 'water',
    title: 'Water',
    icon: <Droplet className="h-8 w-8" />,
    selectable: true
  },
  {
    type: 'waste',
    title: 'Waste',
    icon: <Trash2 className="h-8 w-8" />,
    selectable: true
  },
  {
    type: 'telecom',
    title: 'Telecom',
    icon: <Phone className="h-8 w-8" />,
    selectable: true
  },
  {
    type: 'merchant',
    title: 'Card Services',
    icon: <CreditCard className="h-8 w-8" />,
    selectable: true
  }
]

type Step1Props = {
  onNext?: () => void
  embedded?: boolean
  showTitle?: boolean
  /**
   * textColorScheme controls heading/lead text coloring.
   * - 'dark' (default): heading uses dark/green accents (for hero)
   * - 'light': heading and accent are white (for supplier pages as the background is black)
   */
  textColorScheme?: 'dark' | 'light'
}

export default function ServiceSelectionPage({ onNext, embedded, textColorScheme, showTitle }: Step1Props) {
  const router = useRouter()
  
  // Local state for selections
  const [selections, setSelections] = useState<ServiceType[]>([])
  const [error, setError] = useState<string | null>(null)
  const [initialized, setInitialized] = useState(false)
  
  // Get store actions only
  const resetForm = useEnergyQuoteStore(state => state.resetForm)
  const setSelectedServices = useEnergyQuoteStore(state => state.setSelectedServices)
  
  // Initialize once on mount
  useEffect(() => {
    resetForm()
    setInitialized(true)
  }, [resetForm])

  const isSelectable = (type: ServiceType): boolean => {
    return ['gas', 'electricity', 'water', 'waste','telecom','merchant'].includes(type)
  }

  const handleServiceToggle = (type: ServiceType) => {
    if (!isSelectable(type)) return
    
    setSelections(prev => {
      if (prev.includes(type)) {
        return prev.filter(service => service !== type)
      }
      return [...prev, type]
    })
    setError(null)
  }

  const handleContinue = () => {
    if (selections.length === 0) {
      setError('Please select at least one service')
      return
    }
    
    setSelectedServices(selections)
    if (onNext) {
      onNext()
    } else {
      router.push('/energy-quote/step2')
    }
  }

  if (!initialized) {
    return (
      <div className="p-6 flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/** choose scheme: default to 'dark' unless explicitly set to 'light' */}
        {showTitle !== false && (
          <h2 className={`text-2xl md:text-4xl font-bold ${textColorScheme === 'light' ? 'text-white' : 'text-gray-900'} text-center ${textColorScheme === 'light' && embedded ? '-mt-20 text-6xl' : ''}`}>
            Pick a service below to
            <br />
            <span className="text-[#3faa4e]">get a free quote</span>
          </h2>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          
          {serviceOptions.map((option) => (

            <motion.div
              key={option.type}
              whileHover={{ scale: option.selectable ? 1.05 : 1 }}
              whileTap={{ scale: option.selectable ? 0.98 : 1 }}
              onClick={() => handleServiceToggle(option.type)}
              className={`
                flex flex-col items-center justify-center
                p-8 rounded-xl transition-all duration-200
                ${!option.selectable 
                  ? 'opacity-40 cursor-not-allowed border border-gray-200' 
                  : selections.includes(option.type)
                    ? 'bg-[#3faa4e]/10 border-2 border-[#3faa4e] shadow-md cursor-pointer' 
                    : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm cursor-pointer'
                }
              `}
            >
              <div className={`
                p-4 rounded-full mb-3
                ${selections.includes(option.type) && option.selectable
                  ? 'bg-[#3faa4e] text-white' 
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {option.icon}
              </div>
              <h3 className={`text-center font-medium ${selections.includes(option.type) && option.selectable ? (textColorScheme === 'light' ? 'text-white' : 'text-black') : 'text-gray-900'}`}>{option.title}</h3>
              
              {option.selectable && selections.includes(option.type) && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 bg-[#3faa4e] rounded-full flex items-center justify-center"
                >
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 mt-4 text-center"
          >
            {error}
          </motion.p>
        )}
        
        <div className="mt-10 flex justify-center">
          <Button 
            size="lg" 
            icon={ArrowRight} 
            iconPosition="right"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
        {!embedded && (
          <div className="mt-4 flex justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener"
              className="text-[#00b67a] font-medium hover:underline text-center text-lg"
            >
              Back to home
            </a>
          </div>
        )}
      </motion.div>
    </div>
  )
} 