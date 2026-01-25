// 'use client'

// import dynamic from 'next/dynamic'


// const EPOSSolutionsClient = dynamic(() => import('./EposSystemsClient'), { 
//   ssr: false 
// })
import EPOSSolutionsPage from "./EposSystemsClient";
export default function EposSystems(){
    return <EPOSSolutionsPage />;
}