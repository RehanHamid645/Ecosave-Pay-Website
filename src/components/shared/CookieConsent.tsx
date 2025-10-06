'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Cookie, Lock, Settings } from 'lucide-react'

interface CookiePreferences {
  essential: boolean
  performance: boolean
  functional: boolean
  targeting: boolean
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Essential cookies are always enabled
  performance: false,
  functional: false,
  targeting: false,
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    // Check if user has already accepted cookies
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (!savedPreferences) {
      setIsVisible(true)
    } else {
      setPreferences(JSON.parse(savedPreferences))
    }
  }, [])

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setIsVisible(false)
    setShowPreferences(false)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      performance: true,
      functional: true,
      targeting: true,
    }
    setPreferences(allAccepted)
    savePreferences()
  }

  const rejectAll = () => {
    const allRejected = {
      ...defaultPreferences,
      essential: true, // Essential cookies cannot be rejected
    }
    setPreferences(allRejected)
    savePreferences()
  }

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'essential') return // Essential cookies cannot be toggled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <Link href="/cookies" className="text-[#3faa4e] hover:text-[#2f8a3e] ml-1">
                Learn more
              </Link>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Manage Preferences
              </button>
              <button
                onClick={acceptAll}
                className="bg-[#3faa4e] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2f8a3e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3faa4e]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-[#3faa4e]/10 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-[#3faa4e]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                        <div className="relative inline-block w-12 h-6 bg-[#3faa4e] rounded-full opacity-50 cursor-not-allowed">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        These cookies are necessary for the website to function and cannot be switched off.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-[#3faa4e]/10 p-3 rounded-full">
                      <Cookie className="h-6 w-6 text-[#3faa4e]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Performance Cookies</h3>
                        <button
                          onClick={() => togglePreference('performance')}
                          className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                            preferences.performance ? 'bg-[#3faa4e]' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.performance ? 'right-1' : 'left-1'
                            } top-1`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        These cookies allow us to count visits and traffic sources to improve our site's performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-[#3faa4e]/10 p-3 rounded-full">
                      <Settings className="h-6 w-6 text-[#3faa4e]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                        <button
                          onClick={() => togglePreference('functional')}
                          className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                            preferences.functional ? 'bg-[#3faa4e]' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.functional ? 'right-1' : 'left-1'
                            } top-1`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        These cookies enable enhanced functionality and personalization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-[#3faa4e]/10 p-3 rounded-full">
                      <Lock className="h-6 w-6 text-[#3faa4e]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Targeting Cookies</h3>
                        <button
                          onClick={() => togglePreference('targeting')}
                          className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                            preferences.targeting ? 'bg-[#3faa4e]' : 'bg-gray-300'
                          }`}
                        >
                          <div
                            className={`absolute w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.targeting ? 'right-1' : 'left-1'
                            } top-1`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        These cookies may be set through our site by our advertising partners.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    onClick={rejectAll}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#3faa4e] hover:bg-[#2f8a3e] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3faa4e]"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#3faa4e] hover:bg-[#2f8a3e] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3faa4e]"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 