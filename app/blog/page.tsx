import { getPublishedPosts } from "@/lib/blog-data"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Ecosistia",
  description: "Artículos sobre inteligencia artificial y desarrollo de software.",
}

export default function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Blog Ecosistia
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Artículos sobre inteligencia artificial, desarrollo y tecnología
          </p>
        </div>

        {posts.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No hay artículos publicados aún.</p>
          </Card>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary cursor-pointer">
                  <CardContent className="flex flex-col h-full p-0">
                    {post.imageUrl && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={encodeURI(post.imageUrl)}
                        alt={post.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="font-heading text-xl font-bold text-foreground line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
