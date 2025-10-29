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

/* // Helpers function to get percentage based on current step
function getProgressPercentage(pathname: string): number {
  const step = getStepNumber(pathname)
  
  // 3 steps total, so each step is worth ~33%
  switch(step) {
    case 1: return 33
    case 2: return 66
    case 3: return 100
    default: return 0 // For the main page
  }
} */

export default function EnergyQuoteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isMainPage = !pathname.includes('/step')
  const steps = ["Energy Type", "Postcode", "Contact Details"];
 const activeIndex = getStepNumber(pathname) - 1; // 0-based index

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
                {/* Stepper UI integrated with progress bar */}
                <div className="relative flex items-center w-full" style={{ minHeight: '56px' }}>
                  {/* Progress bar background */}
                  <div className="absolute top-1/2 left-0 w-full h-2.5 bg-gray-200 rounded-full -translate-y-1/2 z-0"></div>
                  {/* Progress bar fill: stops at the center of the current step */}
                  <div
                    className="absolute top-1/2 left-0 h-2.5 bg-[#3faa4e] rounded-full -translate-y-1/2 z-10 transition-all duration-500 ease-in-out"
                    style={{
                      // Fill up to the current step's position (roadblock)
                      width: steps.length === 1
                        ? '100%'
                        : `${(activeIndex / (steps.length - 1)) * 100}%`,
                      maxWidth: '100%',
                    }}
                  ></div>
                  {/* Steps as roadblocks */}
                  {steps.map((step, idx) => {
                    const isActive = idx === activeIndex;
                    const isCompleted = idx < activeIndex;
                    // Calculate position for each step
                    const leftPercent = (idx / (steps.length - 1)) * 100;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center z-20"
                        style={{
                          position: 'absolute',
                          left: `calc(${leftPercent}% - 50px)`, // Center the circle
                          top: '50%',
                          transform: 'translateY(-30%)',
                          minWidth: '70px',
                        }}
                      >
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 mb-2
                            ${isCompleted
                              ? "bg-green-500 border-green-500 text-white"
                              : isActive
                              ? "bg-white border-blue-500 text-blue-500"
                              : "bg-white border-gray-300 text-gray-400"
                            }`}
                        >
                          {isCompleted ? "✓" : idx + 1}
                        </div>
                        <div className="text-sm text-center whitespace-nowrap">{step}</div>
                      </div>
                    );
                  })}
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