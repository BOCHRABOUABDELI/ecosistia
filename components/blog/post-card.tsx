import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User } from "lucide-react"
import type { BlogPost, BlogSector } from "@/lib/blog-types"

interface PostCardProps {
  post: BlogPost
  sector?: BlogSector
}

export function PostCard({ post, sector }: PostCardProps) {
  const subsector = sector?.subsectors.find((s) => s.id === post.subsectorId)
  const imageUrl = post.imageUrl ? encodeURI(post.imageUrl) : null

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-accent/30">
        {imageUrl && (
          <div className="aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardContent className="flex flex-col gap-3 p-5">
          <div className="flex flex-wrap items-center gap-2">
            {sector && (
              <Badge variant="secondary" className="text-xs">{sector.name}</Badge>
            )}
            {subsector && (
              <Badge variant="outline" className="text-xs">{subsector.name}</Badge>
            )}
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground leading-tight line-clamp-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-2 border-t border-border">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
            <span className="ml-auto">
              {new Date(post.createdAt).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
