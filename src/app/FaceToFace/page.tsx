'use client'

import dynamicImport from 'next/dynamic'

const FaceToFaceClient = dynamicImport(() => import('./Facetoface'), {
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" />
})

export default function FacePage() {
  return <FaceToFaceClient />
}