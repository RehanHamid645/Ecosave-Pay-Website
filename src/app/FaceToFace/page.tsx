'use client'

import dynamic from 'next/dynamic'

// Force dynamic rendering to stop Next.js from attempting prerender (window is client-only)
export const dynamicParams = true
export const revalidate = 0

const FaceToFaceClient = dynamic(() => import('./Facetoface'), {
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" />
})

export default function FacePage() {
  return <FaceToFaceClient />
}