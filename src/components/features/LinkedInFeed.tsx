'use client'

import { useEffect, useRef } from 'react'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import { ExternalLink } from 'lucide-react'

interface LinkedInFeedProps {
  companyId?: string
}

export default function LinkedInFeed({ companyId = '123456789' }: LinkedInFeedProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // LinkedIn has strict policies against scraping or embedding their content via iframes
    // The proper approach is to use their JavaScript SDK and follow their guidelines
    
    if (!scriptRef.current) {
      const script = document.createElement('script')
      script.src = 'https://platform.linkedin.com/in.js'
      script.type = 'text/javascript'
      script.innerHTML = `
        api_key: YOUR_LINKEDIN_API_KEY
        authorize: true
      `
      document.body.appendChild(script)
      scriptRef.current = script
      
      // This is for demo purposes - in a real implementation 
      // you would need to register a LinkedIn application and follow their API guidelines
      return () => {
        if (scriptRef.current) {
          document.body.removeChild(scriptRef.current)
        }
      }
    }
  }, [])

  // Since direct LinkedIn feed embedding is not possible without their API, 
  // we'll create a styled component that looks like LinkedIn and links to the company page
  
  return (
    <div ref={containerRef} className="linkedin-feed">
      <Card className="border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#0A66C2] p-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white fill-current">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <h3 className="ml-2 text-lg font-semibold text-white">LinkedIn</h3>
          </div>
          <a 
            href={`https://www.linkedin.com/company/${companyId}`} 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white hover:underline"
          >
            View on LinkedIn
          </a>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
              E
            </div>
            <div>
              <h4 className="font-semibold">Ecosave Gas and Power Ltd</h4>
              <p className="text-sm text-gray-500">Energy · Manchester, UK</p>
              <p className="mt-2">
                At Ecosave, we're committed to helping businesses find the best energy deals and reduce their carbon footprint.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-semibold mb-3">Recent Posts</h4>
            
            <div className="space-y-4">
              {[
                {
                  title: "Energy-saving tips for winter",
                  date: "2 days ago",
                  likes: 24,
                  comments: 3
                },
                {
                  title: "We're excited to announce our new partnership with Green Energy Solutions!",
                  date: "1 week ago",
                  likes: 56,
                  comments: 8
                },
                {
                  title: "How businesses can reduce their carbon footprint",
                  date: "2 weeks ago",
                  likes: 42,
                  comments: 5
                }
              ].map((post, index) => (
                <div key={index} className="p-4 border border-gray-100 rounded-md">
                  <h5 className="font-medium">{post.title}</h5>
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <div className="flex space-x-3">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <Button
            className="w-full bg-[#0A66C2] hover:bg-[#004182] transition-colors text-white flex items-center justify-center gap-2"
            onClick={() => window.open(`https://www.linkedin.com/company/${companyId}`, '_blank')}
          >
            Follow Us on LinkedIn
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </Card>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>
          Note: This is a simulated LinkedIn feed. For real-time updates, please visit our 
          <a 
            href={`https://www.linkedin.com/company/${companyId}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:underline ml-1"
          >
            LinkedIn page
          </a>.
        </p>
      </div>
    </div>
  )
} 