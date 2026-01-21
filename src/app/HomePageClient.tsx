'use client'

import HeroSection from '@/components/features/HeroSection'
import PaymentsInfo from '@/components/features/PaymentsInfo'
import OnlineVirtualSection from '@/components/features/OnlineVirtualSection'
import CardMachines from '@/components/features/CardMachines'
import FAQSection from '@/components/features/FaqSection'
import PaymentSolutionsSection from '@/components/features/FeaturesSection'
import EposSolutionsGrid from '@/components/features/EposSolutions'
import WhyChooseEcosave from '@/components/features/WhyChooseEP'




export default function HomePageClient() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PaymentSolutionsSection />
      <PaymentsInfo />
      <CardMachines />
      <OnlineVirtualSection />
      <EposSolutionsGrid />
      <WhyChooseEcosave />
      <FAQSection />
    </main>
  )
}
