/**
 * Wraps an async function to catch and handle errors
 * @param fn The async function to wrap
 * @param fallbackValue The fallback value to return if the function throws
 * @param errorHandler Optional function to handle the error
 */
export async function withErrorHandling<T>(
  fn: () => Promise<T>,
  fallbackValue: T,
  errorHandler?: (error: unknown) => void
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (errorHandler) {
      errorHandler(error)
    } else {
      console.error('Error caught in withErrorHandling:', error)
    }
    return fallbackValue
  }
}

/**
 * Logs an error to the console and optionally to an error reporting service
 */
export function logError(error: unknown, context?: Record<string, unknown>): void {
  console.error('Application error:', error, context)
  
  // Here you could add integration with error reporting services
  // like Sentry, LogRocket, etc.
}

/**
 * Checks if an error is a network error
 */
export function isNetworkError(error: unknown): boolean {
  return (
    error instanceof TypeError && 
    (error.message.includes('network') || 
     error.message.includes('failed to fetch'))
  )
}

/**
 * Formats an error message for display to users
 */
export function getUserFriendlyErrorMessage(error: unknown): string {
  if (typeof error === 'string') {
    return error
  }
  
  if (error instanceof Error) {
    if (isNetworkError(error)) {
      return 'Network error. Please check your internet connection and try again.'
    }
    return error.message
  }
  
  return 'An unexpected error occurred. Please try again later.'
} 