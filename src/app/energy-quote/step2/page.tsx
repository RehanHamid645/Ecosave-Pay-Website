'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useEnergyQuoteStore } from '@/lib/energy-quote-store'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/shared/Form'

export default function PostcodePage() {
  const router = useRouter()
  
  // Local state
  const [inputPostcode, setInputPostcode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isValidating, setIsValidating] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [selectedServicesList, setSelectedServicesList] = useState<string[]>([])
  
  // Store actions
  const setPostcode = useEnergyQuoteStore(state => state.setPostcode)
  
  // One-time initialization on mount
  useEffect(() => {
    // Get data from store once
    const store = useEnergyQuoteStore.getState()
    
    // Pre-fill postcode if available
    if (store.postcode) {
      setInputPostcode(store.postcode)
    }
    
    // Check if we have selected services
    if (Array.isArray(store.selectedServices) && store.selectedServices.length > 0) {
      setSelectedServicesList(store.selectedServices)
      setInitialized(true)
    } else {
      // Redirect if no services selected
      router.push('/energy-quote/step1')
    }
  }, [router])

  const validateUKPostcode = (postcode: string) => {
    // Basic UK postcode regex pattern
    const regex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i
    return regex.test(postcode)
  }

  const handleContinue = () => {
    // Remove spaces and convert to uppercase
    const formattedPostcode = inputPostcode.trim().toUpperCase()
    
    if (!formattedPostcode) {
      setError('Please enter your postcode')
      return
    }
    
    if (!validateUKPostcode(formattedPostcode)) {
      setError('Please enter a valid UK postcode')
      return
    }
    
    setIsValidating(true)
    
    // Simulate checking postcode validity with a short delay
    setTimeout(() => {
      setPostcode(formattedPostcode)
      setIsValidating(false)
      router.push('/energy-quote/step3')
    }, 800)
  }

  // Get text for selected services
  const getSelectedServicesText = () => {
    if (selectedServicesList.length === 0) {
      return 'services'
    }
    
    if (selectedServicesList.length === 1) {
      return selectedServicesList[0]
    }
    
    const lastService = selectedServicesList[selectedServicesList.length - 1]
    const otherServices = selectedServicesList.slice(0, -1).join(', ')
    
    return `${otherServices} and ${lastService}`
  }
  
  if (!initialized) {
    return (
      <div className="p-8 md:p-12 flex justify-center items-center min-h-[400px]">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          What's your business postcode?
        </h2>
        
        <p className="mt-4 text-gray-600 text-center mb-8">
          We'll check which suppliers are available for {getSelectedServicesText()} in your area
        </p>
        
        <div className="max-w-md mx-auto mt-8">
          <div className="space-y-2.5">
            <label htmlFor="postcode" className="text-sm font-medium leading-none">
              Postcode
            </label>
            <Input
              id="postcode"
              value={inputPostcode}
              onChange={(e) => {
                setInputPostcode(e.target.value)
                setError(null)
              }}
              placeholder="e.g. M2 5WA"
              className={error ? 'border-red-300 focus-visible:ring-red-500' : ''}
              maxLength={10}
            />
            
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm"
              >
                {error}
              </motion.p>
            )}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={handleContinue}
              loading={isValidating}
              disabled={isValidating}
            >
              {isValidating ? 'Validating...' : 'Continue'}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 