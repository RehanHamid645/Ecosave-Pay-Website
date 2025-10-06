'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'
import Button from '@/components/shared/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 mb-8">
          <svg
            className="h-12 w-12 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Something went wrong!</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          We&apos;re sorry, but there was an error with this page. You can try to reset the page or go back to the homepage.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="primary"
            onClick={reset}
            className="inline-flex items-center gap-2"
          >
            <RefreshCw className="h-5 w-5" />
            Try again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <Home className="h-5 w-5" />
              Go home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 