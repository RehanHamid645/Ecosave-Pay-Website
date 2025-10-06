'use client'

import { Container } from '@/components/Container'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

// Helper function to extract step number from pathname
function getStepNumber(pathname: string): number {
  const match = pathname.match(/step(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

// Helper function to get percentage based on current step
function getProgressPercentage(pathname: string): number {
  const step = getStepNumber(pathname)
  
  // 3 steps total, so each step is worth ~33%
  switch(step) {
    case 1: return 33
    case 2: return 66
    case 3: return 100
    default: return 0 // For the main page
  }
}

export default function EnergyQuoteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isMainPage = !pathname.includes('/step')
  const progressPercentage = getProgressPercentage(pathname)
  
  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-16 lg:py-20 pt-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Back button and progress bar */}
          {!isMainPage && (
            <>
              <div className="mb-6">
                <Link 
                  href={pathname.includes('step1') ? '/energy-quote' : pathname.replace(/step\d+/, `step${getStepNumber(pathname) - 1}`)} 
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </div>
              <div className="mb-8">
                <div className="flex justify-between mb-2 text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-[#3faa4e] h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </>
          )}
          
          {/* Content area */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {children}
          </div>
        </div>
      </Container>
    </main>
  )
} 