import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string
  author: string
  reading_time: string
  sector_id: string
  subsector_id: string
  seo_title: string
  seo_description: string
  published: boolean
  created_at: string
}

interface BlogSector {
  id: string
  name: string
  slug: string
  subsectors: { id: string; name: string; slug: string }[]
}

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()
  return data
}

async function getSectors(): Promise<BlogSector[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_sectors')
    .select('*')
    .order('name')
  return data || []
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      images: post.image_url ? [{ url: post.image_url }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post || !post.published) {
    notFound()
  }

  const sectors = await getSectors()
  const sector = sectors.find(s => s.id === post.sector_id)
  const subsector = sector?.subsectors.find(sub => sub.id === post.subsector_id)

  const formattedDate = new Date(post.created_at).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      {post.image_url && (
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={encodeURI(post.image_url)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        </section>
      )}

      <article className={`mx-auto max-w-4xl px-6 ${post.image_url ? '-mt-32 relative z-10' : 'pt-16 md:pt-24'}`}>
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/10">
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Button>
          </Link>
        </div>

        {/* Header Card */}
        <header className={`rounded-2xl p-8 md:p-12 mb-12 ${post.image_url ? 'bg-card shadow-xl' : ''}`}>
          {/* Categories */}
          {(sector || subsector) && (
            <div className="mb-6 flex gap-2 flex-wrap">
              {sector && (
                <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  {sector.name}
                </span>
              )}
              {subsector && (
                <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                  {subsector.name}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="mt-8 pt-6 border-t flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium text-foreground">{post.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.reading_time} de lectura
            </span>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-accent
            prose-img:rounded-xl prose-img:shadow-lg
            prose-blockquote:border-l-accent prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl [&_iframe]:my-6
            [&_video]:w-full [&_video]:rounded-xl [&_video]:my-6
            [&_.video-wrapper]:my-6
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Publicado por <span className="font-medium text-foreground">{post.author}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                {formattedDate}
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Compartir
            </Button>
          </div>

          {/* More Posts CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-primary/5 text-center">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Descubre mas contenido
            </h3>
            <p className="mt-2 text-muted-foreground">
              Explora todos nuestros articulos sobre IA y digitalizacion
            </p>
            <Link href="/blog">
              <Button className="mt-4">
                Ver todos los articulos
              </Button>
            </Link>
          </div>
        </footer>
      </article>

      {/* Bottom Spacing */}
      <div className="h-16 md:h-24" />
    </main>
  )
}
