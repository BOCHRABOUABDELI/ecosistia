"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Eye, EyeOff, Loader2 } from "lucide-react"
import type { BlogPost, BlogSector } from "@/lib/blog-types"

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [sectors, setSectors] = useState<BlogSector[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const [postsRes, sectorsRes] = await Promise.all([
        fetch("/api/blog/posts?admin=true"),
        fetch("/api/blog/sectors"),
      ])
      setPosts(await postsRes.json())
      setSectors(await sectorsRes.json())
      setLoading(false)
    }
    load()
  }, [])

  function getSectorName(sectorId: string) {
    return sectors.find((s) => s.id === sectorId)?.name || "-"
  }

  async function handleDelete(id: string) {
    if (!confirm("Seguro que quieres eliminar este post?")) return
    await fetch(`/api/blog/posts/${id}`, { method: "DELETE" })
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  async function togglePublished(post: BlogPost) {
    const res = await fetch(`/api/blog/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !post.published }),
    })
    const updated = await res.json()
    setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Entradas del blog</h1>
          <p className="text-sm text-muted-foreground">{posts.length} entradas en total</p>
        </div>
        <Button asChild>
          <Link href="/admin/posts/new">
            <Plus className="mr-2 h-4 w-4" />
            Nueva entrada
          </Link>
        </Button>
      </div>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-muted-foreground">No hay entradas todavia.</p>
            <Button asChild className="mt-4">
              <Link href="/admin/posts/new">
                <Plus className="mr-2 h-4 w-4" />
                Crear primera entrada
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {posts
            .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
            .map((post) => (
              <Card key={post.id}>
                <CardContent className="flex items-center gap-4 py-4">
                  {post.imageUrl && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="h-14 w-20 shrink-0 rounded-md object-cover"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate font-medium text-foreground">{post.title}</h3>
                      <Badge variant={post.published ? "default" : "secondary"} className="shrink-0 text-xs">
                        {post.published ? "Publicado" : "Borrador"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span>{getSectorName(post.sectorId)}</span>
                      <span>{post.author}</span>
                      <span>{new Date(post.updatedAt).toLocaleDateString("es-ES")}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => togglePublished(post)}
                      title={post.published ? "Despublicar" : "Publicar"}
                    >
                      {post.published ? (
                        <Eye className="h-4 w-4 text-success" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      )}
    </div>
  )
}
