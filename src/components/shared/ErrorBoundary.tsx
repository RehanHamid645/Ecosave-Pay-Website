'use client'

import React, { ErrorInfo, ReactNode } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="p-6 bg-red-50 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="text-lg font-medium text-red-800">Something went wrong</h3>
          </div>
          <p className="text-sm text-red-700 mb-4">
            There was an error loading this component. You can try refreshing the page.
          </p>
          <Link href="/" className="text-sm font-medium text-red-600 hover:text-red-500">
            Go back to home
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 