'use client'

import dynamic from 'next/dynamic'

const OnlinePaymentsClient = dynamic(() => import('./OnlinePayments'), { 
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" /> 
})

export default function OnlinePage() {
  return <OnlinePaymentsClient />;
}