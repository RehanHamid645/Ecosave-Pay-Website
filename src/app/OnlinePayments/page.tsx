'use client'

import dynamicImport from 'next/dynamic'

const OnlinePaymentsClient = dynamicImport(() => import('./OnlinePayments'), { 
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" /> 
})

export default function OnlinePage() {
  return <OnlinePaymentsClient />;
}