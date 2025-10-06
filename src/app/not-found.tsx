'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Home, AlertTriangle } from 'lucide-react'
import Button from '@/components/shared/Button'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(redirectTimer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 mb-8">
          <AlertTriangle className="h-12 w-12 text-red-600" aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for. You will be redirected to the homepage in 5 seconds.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button 
              variant="primary" 
              className="inline-flex items-center gap-2"
            >
              <Home className="h-5 w-5" />
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 