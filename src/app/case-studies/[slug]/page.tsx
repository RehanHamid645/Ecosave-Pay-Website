import { Metadata } from 'next';
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { caseStudiesPosts } from '@/data/case-studies-posts'
import Link from 'next/link'
import { getAllCaseStudiesSlugs, getCaseStudiesPost } from "@/lib/markdown"


export async function generateStaticParams() {
  return getAllCaseStudiesSlugs()
}


type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function CaseStudiesPostPage({ params }: Props) {
   const resolvedParams = await params
  const post = await getCaseStudiesPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 pt-24 md:pt-32">
      <Link 
        href="/case-studies"
        className="inline-flex items-center text-green-500 hover:text-green-600 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <div className="max-w-4xl mx-auto bg-gray-50 p-4 rounded-lg shadow-md">
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <post.icon className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-500">{post.category}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>

{/*         <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{post.description}</p> */}

        <div className="prose prose-lg max-w-none">
           <div dangerouslySetInnerHTML={{ __html: post.text }} />
        </div>

{/*         <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => 
                relatedPost.slug !== post.slug && 
                relatedPost.category === post.category
              )
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-green-500 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(relatedPost.date).toLocaleDateString()}
                  </p>
                </Link>
              ))}
          </div>
        </div> */}
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = caseStudiesPosts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return {
    title: `${post.title} | Ecosave Case Studies`,
    description: post.description,
  }
}