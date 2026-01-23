'use client'

import dynamic from 'next/dynamic'
// Render this page purely on the client to avoid SSR window usage
const FaceToFaceClient = dynamic(() => import('./Facetoface'), {
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" />
})

export default function FacePage() {
  return <FaceToFaceClient />
}