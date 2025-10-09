
'use client'

import { metadata } from './metadata'

import HeroSection from '@/components/features/HeroSection'
import ServiceGrid from '@/components/features/ServiceGrid'
import TrustSection from '@/components/features/TrustSection'
import PartnerSection from '@/components/features/PartnerSection'
import StatsCounter from '@/components/features/StatsCounter'
import ContactSection from '@/components/features/ContactSection'



export const metadataExport = metadata;

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PartnerSection />
      <ServiceGrid />
      <TrustSection />
      <StatsCounter />
      <ContactSection />
    </main>
  )
}
