import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import { blogPosts } from '@/data/blog-posts'
import { caseStudiesPosts } from '@/data/case-studies-posts'

export async function getBlogPost(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return null

  const filePath = path.join(process.cwd(), 'src','content', `${post.markdown}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const processed = await remark().use(html).process(fileContent)

  return {
    ...post,
    blogtext: processed.toString(),
  }
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function getCaseStudiesPost(slug: string) {
  const post = caseStudiesPosts.find((p) => p.slug === slug)
  if (!post) return null

  const filePath = path.join(process.cwd(), 'src','content', `${post.markdown}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const processed = await remark().use(html).process(fileContent)

  return {
    ...post,
    text: processed.toString(),
  }
}

export function getAllCaseStudiesSlugs() {
  return caseStudiesPosts.map((p) => ({ slug: p.slug }))
}