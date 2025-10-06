'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/shared/Button'
import { useEnergyQuoteStore } from '@/lib/energy-quote-store'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/shared/Form'
import Link from 'next/link'

export default function ContactDetailsPage() {
  const router = useRouter()
  
  // Local state
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phoneNumber: ''
/*     preferredContactTime: '' */
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [initialized, setInitialized] = useState(false)
  const [selectedServicesList, setSelectedServicesList] = useState<string[]>([])
  const [postcodeValue, setPostcodeValue] = useState('')
  
  // Store actions - only get the setter functions
  const setName = useEnergyQuoteStore(state => state.setName)
  const setbusinessName = useEnergyQuoteStore(state => state.setBusinessName) 
  const setPhoneNumber = useEnergyQuoteStore(state => state.setPhoneNumber)
 /*  const setPreferredContactTime = useEnergyQuoteStore(state => state.setPreferredContactTime) */
  const submitForm = useEnergyQuoteStore(state => state.submitForm)
  
  // One-time initialization on mount with proper dependencies
  useEffect(() => {
    let isMounted = true;
    
    const initializeFromStore = () => {
      // Get data from store once
      const store = useEnergyQuoteStore.getState()
      
      if (!isMounted) return;
      
      // Set local state based on store values
      setFormData({
        name: store.name || '',
        businessName: store.businessName || '',
        phoneNumber: store.phoneNumber || ''
       /*  preferredContactTime: store.preferredContactTime || '' */
      })
      
      // Check if we have required data
      if (Array.isArray(store.selectedServices) && store.selectedServices.length > 0) {
        setSelectedServicesList(store.selectedServices)
        
        if (store.postcode) {
          setPostcodeValue(store.postcode)
          setInitialized(true)
        } else {
          // Redirect if no postcode
          router.push('/energy-quote/step2')
        }
      } else {
        // Redirect if no services selected
        router.push('/energy-quote/step1')
      }
    }
    
    initializeFromStore();
    
    return () => {
      isMounted = false;
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field if any
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    
    // Clear submit error if any
    if (submitError) {
      setSubmitError(null)
    }
  }

  const validateUKPhoneNumber = useCallback((phone: string) => {
    // Basic UK phone validation (allows various formats)
    const regex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/
    return regex.test(phone)
  }, [])

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number'
    } else if (!validateUKPhoneNumber(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid UK phone number'
    }
    
/*     if (!formData.preferredContactTime.trim()) {
      newErrors.preferredContactTime = 'Please tell us when to contact you'
    } */
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, validateUKPhoneNumber])

  const handleSubmit = useCallback(async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Update the store
      setName(formData.name)
      setbusinessName(formData.businessName)
      setPhoneNumber(formData.phoneNumber)
      /* setPreferredContactTime(formData.preferredContactTime) */
      
      // Get full store state to submit
      const storeState = useEnergyQuoteStore.getState();
      
      // Send data to API
      const response = await fetch('/api/energy-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          phoneNumber: formData.phoneNumber,
/*           preferredContactTime: formData.preferredContactTime, */
          selectedServices: storeState.selectedServices,
          postcode: storeState.postcode
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      // Mark the form as submitted in the store
      submitForm();
      
      // Add a small delay before navigation to ensure store is updated
      setTimeout(() => {
        // Navigate to thank you page on success
        router.push('/energy-quote/thank-you');
      }, 100);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsSubmitting(false);
    }
  }, [formData, router, setName, setPhoneNumber,setbusinessName , submitForm, validateForm]);
  
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
          Your Contact Details
        </h2>
        
        <p className="mt-4 text-gray-600 text-center mb-8">
          We'll contact you with quotes for {getSelectedServicesText(selectedServicesList)} in the {postcodeValue} area
        </p>
        
        <div className="max-w-md mx-auto mt-8 space-y-6">
          <div className="space-y-2.5">
            <label htmlFor="name" className="text-sm font-medium leading-none">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. John Smith"
              className={errors.name ? 'border-red-300 focus-visible:ring-red-500' : ''}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div className="space-y-2.5">
            <label htmlFor="businessName" className="text-sm font-medium leading-none">
              Business Name
            </label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="e.g. Smiths Limited"
              className={errors.businessName ? 'border-red-300 focus-visible:ring-red-500' : ''}
            />
            {errors.businessname && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm"
              >
                {errors.businessname}
              </motion.p>
            )}
          </div> 

          <div className="space-y-2.5">
            <label htmlFor="phoneNumber" className="text-sm font-medium leading-none">
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="e.g. 07700 900000"
              className={errors.phoneNumber ? 'border-red-300 focus-visible:ring-red-500' : ''}
            />
            {errors.phoneNumber && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm"
              >
                {errors.phoneNumber}
              </motion.p>
            )}
          </div>

{/*           <div className="space-y-2.5">
            <label htmlFor="preferredContactTime" className="text-sm font-medium leading-none">
              Best Time to Contact You
            </label>
            <Input
              id="preferredContactTime"
              name="preferredContactTime"
              value={formData.preferredContactTime}
              onChange={handleInputChange}
              placeholder="e.g. Weekdays between 9am and 5pm"
              className={errors.preferredContactTime ? 'border-red-300 focus-visible:ring-red-500' : ''}
            />
            {errors.preferredContactTime && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm"
              >
                {errors.preferredContactTime}
              </motion.p>
            )}
          </div> */}

          {submitError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 rounded bg-red-50 border border-red-100 text-red-600 text-sm"
            >
              <p>{submitError}</p>
              <p className="mt-1">Please try again or contact us directly.</p>
            </motion.div>
          )}

          <div className="mt-2 text-sm text-gray-500">
            By submitting this form, you agree to our{' '}
            <Link href="/privacy" className="text-[#3faa4e] hover:underline">
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link href="/terms" className="text-[#3faa4e] hover:underline">
              Terms of Service
            </Link>
            .
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={handleSubmit}
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Helper function to format the selected services text
function getSelectedServicesText(selectedServices: string[]) {
  if (!selectedServices || selectedServices.length === 0) {
    return 'services'
  }
  
  if (selectedServices.length === 1) {
    return selectedServices[0]
  }
  
  const lastService = selectedServices[selectedServices.length - 1]
  const otherServices = selectedServices.slice(0, -1).join(', ')
  
  return `${otherServices} and ${lastService}`
} 