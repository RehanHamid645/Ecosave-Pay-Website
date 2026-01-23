'use client'

import dynamic from 'next/dynamic'


const EPOSSolutionsClient = dynamic(() => import('./EposSystemsClient'), { 
  ssr: false 
})

export default function EposSystems(){
    return <EPOSSolutionsClient />;
}