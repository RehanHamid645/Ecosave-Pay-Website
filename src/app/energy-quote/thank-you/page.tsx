'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Home } from 'lucide-react'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import { useEnergyQuoteStore } from '@/lib/energy-quote-store'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [storeData, setStoreData] = useState<{
    selectedServices: string[];
    postcode: string;
    name: string;
    phoneNumber: string;
    preferredContactTime: string;
  } | null>(null)
  
  // Use a ref to track if we've already redirected to prevent infinite loops
  const hasRedirected = useRef(false)
  
  // One-time effect to get store data and initialize
  useEffect(() => {
    // Only run this once
    if (hasRedirected.current) return
    
    try {
      // Get data from store directly rather than using the hook in render
      const store = useEnergyQuoteStore.getState()
      
      const hasRequiredData = 
        Array.isArray(store.selectedServices) && 
        store.selectedServices.length > 0 && 
        !!store.postcode && 
        !!store.name && 
        !!store.phoneNumber && 
        store.isSubmitted === true
      
      if (!hasRequiredData) {
        hasRedirected.current = true
        router.push('/energy-quote/step1')
        return
      }
      
      // Save the data to local state so we don't need to access the store again
      setStoreData({
        selectedServices: store.selectedServices,
        postcode: store.postcode,
        name: store.name,
        phoneNumber: store.phoneNumber,
        preferredContactTime: store.preferredContactTime || ''
      })
      
      setIsLoading(false)
    } catch (error) {
      console.error('Error getting store data:', error)
      hasRedirected.current = true
      router.push('/energy-quote/step1')
    }
  }, [router])

  // Format the selected services for display
  const getServicesText = (services: string[]) => {
    if (!services || services.length === 0) {
      return 'energy services'
    }
    
    if (services.length === 1) {
      return services[0]
    }
    
    const lastService = services[services.length - 1]
    const otherServices = services.slice(0, -1).join(', ')
    
    return `${otherServices} and ${lastService}`
  }

  if (isLoading || !storeData) {
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
        className="text-center"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Thank You, {storeData.name}!
        </h1>
        
        <div className="bg-[#3faa4e]/10 rounded-lg py-3 px-4 inline-block text-[#3faa4e] font-medium mb-6">
          Your quote request has been successfully submitted
        </div>
        
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We've received your request for a quote for <strong>{getServicesText(storeData.selectedServices)}</strong> in postcode <strong>{storeData.postcode}</strong>.
          One of our experts will contact you at <strong>{storeData.phoneNumber}</strong> 
          {storeData.preferredContactTime && <span> during your preferred time ({storeData.preferredContactTime})</span>} to discuss the best options for your business.
        </p>
        
        <div className="mt-10 bg-gray-50 p-6 rounded-lg max-w-xl mx-auto shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
          <ul className="mt-4 space-y-5 text-left">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-7 h-7 bg-[#3faa4e]/20 rounded-full flex items-center justify-center text-[#3faa4e] mr-3 mt-0.5 font-medium">1</span>
              <span>Our team will evaluate the best deals available for your business</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-7 h-7 bg-[#3faa4e]/20 rounded-full flex items-center justify-center text-[#3faa4e] mr-3 mt-0.5 font-medium">2</span>
              <span>We'll call you at your preferred time to discuss your options</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-7 h-7 bg-[#3faa4e]/20 rounded-full flex items-center justify-center text-[#3faa4e] mr-3 mt-0.5 font-medium">3</span>
              <span>Once you choose a deal, we'll handle the switching process for you</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button 
              variant="outline" 
              icon={Home} 
              iconPosition="left"
              size="lg"
            >
              Return to Homepage
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 