import dynamic from 'next/dynamic'

export const dynamicParams = true
export const revalidate = 0

const EPOSSolutionsClient = dynamic(() => import('./EposSystemsClient'), {
  ssr: false,
  loading: () => <div className="bg-black min-h-screen" />
})

export default function EposSystems(){
    return <EPOSSolutionsClient />;
}