import { notFound } from 'next/navigation'

export default function CatchAllPage() {
  // This will trigger the custom not-found.tsx page
  notFound()
} 