interface User {
  id: string
  email: string
  name?: string
  role: 'user' | 'admin'
}

interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

interface AuthResponse {
  user: User
  token: string
}

interface ResetPasswordRequest {
  email: string
}

interface ResetPasswordConfirm {
  token: string
  newPassword: string
}

interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
}

// Simulated token storage
const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'
const RESET_TOKEN_KEY = 'reset_token'

export const auth = {
  // Login function
  async login({ email, password, remember = false }: LoginCredentials): Promise<AuthResponse> {
    try {
      // TODO: Replace with actual API call
      const response = await simulateApiCall({ email, password })

      if (response.token) {
        // Store auth data
        if (remember) {
          localStorage.setItem(TOKEN_KEY, response.token)
          localStorage.setItem(USER_KEY, JSON.stringify(response.user))
        } else {
          sessionStorage.setItem(TOKEN_KEY, response.token)
          sessionStorage.setItem(USER_KEY, JSON.stringify(response.user))
        }
        return response
      }

      throw new Error('Invalid credentials')
    } catch (error) {
      console.error('Login error:', error)
      throw new Error('Login failed')
    }
  },

  // Logout function
  logout() {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(USER_KEY)
    window.location.href = '/login'
  },

  // Get current user
  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY)
      return userStr ? JSON.parse(userStr) : null
    } catch {
      return null
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
    return !!token
  },

  // Get auth token
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
  },

  // Social login
  async socialLogin(provider: 'google' | 'microsoft'): Promise<void> {
    // TODO: Implement social login
    console.log(`Social login with ${provider}`)
  },

  // Request password reset
  async requestPasswordReset({ email }: ResetPasswordRequest): Promise<void> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Store email for demo purposes
      localStorage.setItem('reset_email', email)
      
      // In a real implementation, this would send an email with a reset token
      const resetToken = `reset_${Math.random().toString(36).substring(7)}`
      localStorage.setItem(RESET_TOKEN_KEY, resetToken)
      
      console.log('Reset token generated for email:', email)
    } catch (error) {
      console.error('Password reset request failed:', error)
      throw new Error('Failed to request password reset')
    }
  },

  // Confirm password reset
  async confirmPasswordReset({ token, newPassword }: ResetPasswordConfirm): Promise<void> {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const storedToken = localStorage.getItem(RESET_TOKEN_KEY)
      if (token !== storedToken) {
        throw new Error('Invalid or expired reset token')
      }
      
      // In a real implementation, this would update the password
      console.log('Password updated to:', newPassword)
      
      // Clear reset token
      localStorage.removeItem(RESET_TOKEN_KEY)
      
      console.log('Password reset successful')
    } catch (error) {
      console.error('Password reset confirmation failed:', error)
      throw new Error('Failed to reset password')
    }
  },

  // Change password (for logged-in users)
  async changePassword({ currentPassword, newPassword }: ChangePasswordRequest): Promise<void> {
    try {
      if (!this.isAuthenticated()) {
        throw new Error('User not authenticated')
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real implementation, this would verify currentPassword and update to newPassword
      console.log('Verifying current password:', currentPassword)
      console.log('Updating to new password:', newPassword)
      
      console.log('Password changed successfully')
    } catch (error) {
      console.error('Password change failed:', error)
      throw new Error('Failed to change password')
    }
  },

  // Check user role
  hasRole(role: User['role']): boolean {
    const user = this.getCurrentUser()
    return user?.role === role
  },

  // Refresh token
  async refreshToken(): Promise<string | null> {
    try {
      const currentToken = this.getToken()
      if (!currentToken) return null

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newToken = `refreshed_${Math.random().toString(36).substring(7)}`
      localStorage.setItem(TOKEN_KEY, newToken)
      
      return newToken
    } catch (error) {
      console.error('Token refresh failed:', error)
      throw new Error('Failed to refresh token')
    }
  }
}

// Temporary function to simulate API call
async function simulateApiCall({ email }: LoginCredentials): Promise<AuthResponse> {
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay

  // Simulate successful login
  return {
    user: {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'user'
    },
    token: 'mock_jwt_token_' + Math.random()
  }
} 