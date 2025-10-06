import { Metadata } from 'next'
import BlogContent from '@/components/features/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | Ecosave',
  description: 'Stay informed about energy management, sustainability, and industry trends with our latest articles and guides.',
}

export default function BlogPage() {
  return <BlogContent />
} 