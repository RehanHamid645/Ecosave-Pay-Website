'use client'

import dynamic from 'next/dynamic'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function VirtualPayments() {
    return <VirtualTerminalClient />;
}