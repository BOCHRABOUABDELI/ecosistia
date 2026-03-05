import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/blog-types"
import { MarkdownRenderer } from "./markdown-renderer"

interface BlogPostContentProps {
  post: BlogPost
  sectorName?: string
  subsectorName?: string
}

export function BlogPostContent({ post, sectorName, subsectorName }: BlogPostContentProps) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      {/* Back link */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
        </Button>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {sectorName && (
            <Badge variant="secondary">{sectorName}</Badge>
          )}
          {subsectorName && (
            <Badge variant="outline">{subsectorName}</Badge>
          )}
        </div>

        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(post.createdAt).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Featured image */}
      {post.imageUrl && (
        <div className="mb-8 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground">
        <MarkdownRenderer content={post.content} />
      </article>

      {/* CTA */}
      <div className="mt-12 rounded-xl bg-primary p-8 text-center">
        <h2 className="font-heading text-xl font-bold text-primary-foreground">
          Necesitas una solucion con IA para tu empresa?
        </h2>
        <p className="mt-2 text-sm text-primary-foreground/80">
          Te ayudamos a implementar inteligencia artificial en tus procesos.
        </p>
        <Button asChild variant="secondary" className="mt-4">
          <Link href="/contacto">Solicitar consulta gratuita</Link>
        </Button>
      </div>
    </main>
  )
}
