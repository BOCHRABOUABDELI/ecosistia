import { getPostBySlug, getPublishedPosts, getSectors } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const sectors = getSectors()
  const sector = sectors.find(s => s.id === post.sectorId)
  const subsector = sector?.subsectors.find(sub => sub.id === post.subsectorId)

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <article className="container max-w-3xl">
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-primary hover:underline">
            &larr; Volver al blog
          </Link>
        </div>

        <header className="mb-12">
          {(sector || subsector) && (
            <div className="mb-4 flex gap-2">
              {sector && (
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {sector.name}
                </span>
              )}
              {subsector && (
                <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {subsector.name}
                </span>
              )}
            </div>
          )}
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
              src={encodeURI(post.imageUrl)}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        <div 
          className="prose prose-sm md:prose-base max-w-none text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

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
