import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type ServiceType = 'gas' | 'electricity' | 'water' | 'waste' | 'telecom' | 'merchant' | 'insurance'

interface EnergyQuoteState {
  // Step 1
  selectedServices: ServiceType[]
  setSelectedServices: (types: ServiceType[]) => void
  
  // Step 2
  postcode: string
  setPostcode: (postcode: string) => void
  
  // Step 3
  name: string
  setName: (name: string) => void
  businessName: string
  setBusinessName: (businessName: string) => void
  phoneNumber: string
  setPhoneNumber: (phoneNumber: string) => void
  preferredContactTime: string
  setPreferredContactTime: (time: string) => void
  
  // Form completed status
  isSubmitted: boolean
  submitForm: () => void
  
  // Reset
  resetForm: () => void
}

// Initial state
const initialState = {
  selectedServices: [] as ServiceType[],
  postcode: '',
  name: '',
  businessName: '',
  phoneNumber: '',
  preferredContactTime: '',
  isSubmitted: false,
}

// Create a separate store instance for client-side only
// This prevents hydration issues with server components
export const useEnergyQuoteStore = create<EnergyQuoteState>()(
  persist(
    (set) => ({
      // Initial values
      ...initialState,
      
      // Actions - using immutable updates
      setSelectedServices: (selectedServices: ServiceType[]) => 
        set(state => ({ ...state, selectedServices: [...selectedServices] })),
        
      setPostcode: (postcode: string) => 
        set(state => ({ ...state, postcode })),
        
      setName: (name: string) => 
        set(state => ({ ...state, name })),

      setBusinessName: (businessName: string) =>
        set(state => ({ ...state, businessName })),
        
      setPhoneNumber: (phoneNumber: string) => 
        set(state => ({ ...state, phoneNumber })),
        
      setPreferredContactTime: (preferredContactTime: string) => 
        set(state => ({ ...state, preferredContactTime })),
      
      // Mark form as submitted
      submitForm: () => 
        set(state => ({ ...state, isSubmitted: true })),
      
      // Reset form
      resetForm: () => set({ ...initialState }),
    }),
    {
      name: 'energy-quote-storage',
      // Use sessionStorage instead of localStorage to avoid persisting across sessions
      storage: createJSONStorage(() => sessionStorage),
      // Only run in client environment to prevent SSR issues
      skipHydration: true,
    }
  )
) 