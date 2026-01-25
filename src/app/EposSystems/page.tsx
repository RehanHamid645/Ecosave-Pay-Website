'use client'

import dynamic from 'next/dynamic'

const EPOSSolutionsClient = dynamic(() => import('./EposSystemsClient'), {
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" />
})

export default function EposSystems(){
    return <EPOSSolutionsClient />;
}