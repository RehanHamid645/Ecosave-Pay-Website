'use client'

import dynamic from 'next/dynamic'

const VirtualTerminalClient = dynamic(() => import('./VirtualPaymentsClient'), { 
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" /> 
})

export default function VirtualPayments() {
    return <VirtualTerminalClient />;
}