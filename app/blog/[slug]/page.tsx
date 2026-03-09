import { getPostBySlug, getPublishedPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = getPublishedPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <article className="container max-w-3xl">
        <header className="mb-12">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>Por {post.author}</span>
            <span>{new Date(post.createdAt).toLocaleDateString('es-ES')}</span>
            <span>{post.readingTime} min de lectura</span>
          </div>
        </header>

        {post.imageUrl && (
          <div className="mb-12 rounded-lg overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        <div className="prose prose-sm md:prose-base max-w-none text-foreground space-y-4">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="mt-16 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Publicado por <strong>{post.author}</strong> en {' '}
            {new Date(post.createdAt).toLocaleDateString('es-ES')}
          </p>
        </footer>
      </article>
    </main>
  )
}
