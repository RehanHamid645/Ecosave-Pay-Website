import dynamic from 'next/dynamic'

export const revalidate = 0

const VirtualTerminalClient = dynamic(() => import('./VirtualPaymentsClient'), { 
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" /> 
})

export const dynamicConfig = 'force-dynamic'

export default function VirtualPayments() {
    return <VirtualTerminalClient />;
}