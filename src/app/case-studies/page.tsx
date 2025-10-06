import { Metadata } from 'next'
import CaseStudiesContent from '@/components/features/CaseStudiesContent'

export const metadata: Metadata = {
  title: 'Case Studies | Ecosave',
  description: 'Stay informed about energy management, sustainability, and industry trends with our latest articles and guides.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesContent />
} 