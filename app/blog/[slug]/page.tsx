import { notFound } from "next/navigation"
import { getPublishedPosts, getPostBySlug, getSectors } from "@/lib/blog-data"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const posts = getPublishedPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Articulo no encontrado" }
  }

  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt

  return {
    title: `${title} | Blog Ecosistia`,
    description,
    keywords: post.keywords || undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.imageUrl ? [post.imageUrl] : undefined,
    },
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const sectors = getSectors()
  const sector = sectors.find((s) => s.id === post.sectorId)
  const subsector = sector?.subsectors.find((s) => s.id === post.subsectorId)

  return <BlogPostContent post={post} sectorName={sector?.name} subsectorName={subsector?.name} />
}
