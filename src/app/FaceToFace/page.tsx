import dynamicImport from 'next/dynamic'

// Force dynamic rendering to stop Next.js from attempting prerender (window is client-only)
export const dynamic = 'force-dynamic'
export const revalidate = 0

const FaceToFaceClient = dynamicImport(() => import('./Facetoface'), {
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" />
})

export default function FacePage() {
  return <FaceToFaceClient />
}