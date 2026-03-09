"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { BlogPost, BlogSector } from "@/lib/blog-types"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [sectors, setSectors] = useState<BlogSector[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSector, setSelectedSector] = useState<string | null>(null)
  const [selectedSubsector, setSelectedSubsector] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [postsRes, sectorsRes] = await Promise.all([
          fetch("/api/blog/posts"),
          fetch("/api/blog/sectors"),
        ])
        const postsData = await postsRes.json()
        const sectorsData = await sectorsRes.json()
        setPosts(Array.isArray(postsData) ? postsData : [])
        setSectors(Array.isArray(sectorsData) ? sectorsData : [])
      } catch (err) {
        console.error("Error loading blog data:", err)
      }
      setLoading(false)
    }
    load()
  }, [])

  const currentSector = sectors.find(s => s.id === selectedSector)

  const filteredPosts = posts.filter(post => {
    if (selectedSector && post.sectorId !== selectedSector) return false
    if (selectedSubsector && post.subsectorId !== selectedSubsector) return false
    return true
  })

  function getSectorName(sectorId: string) {
    return sectors.find(s => s.id === sectorId)?.name || ""
  }

  function getSubsectorName(sectorId: string, subsectorId: string) {
    const sector = sectors.find(s => s.id === sectorId)
    return sector?.subsectors.find(sub => sub.id === subsectorId)?.name || ""
  }

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

        {/* Filtros de sectores */}
        {sectors.length > 0 && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedSector === null ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedSector(null)
                  setSelectedSubsector(null)
                }}
              >
                Todos
              </Button>
              {sectors.map(sector => (
                <Button
                  key={sector.id}
                  variant={selectedSector === sector.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedSector(sector.id)
                    setSelectedSubsector(null)
                  }}
                >
                  {sector.name}
                </Button>
              ))}
            </div>

            {/* Subsectores del sector seleccionado */}
            {currentSector && currentSector.subsectors.length > 0 && (
              <div className="flex flex-wrap gap-2 pl-4 border-l-2 border-primary/20">
                <Button
                  variant={selectedSubsector === null ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedSubsector(null)}
                >
                  Todos en {currentSector.name}
                </Button>
                {currentSector.subsectors.map(sub => (
                  <Button
                    key={sub.id}
                    variant={selectedSubsector === sub.id ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedSubsector(sub.id)}
                  >
                    {sub.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}

        {loading ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">Cargando artículos...</p>
          </Card>
        ) : filteredPosts.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              {selectedSector ? "No hay artículos en esta categoría." : "No hay artículos publicados aún."}
            </p>
          </Card>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
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
                      {(post.sectorId || post.subsectorId) && (
                        <div className="mb-2 flex gap-2 flex-wrap">
                          {post.sectorId && (
                            <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              {getSectorName(post.sectorId)}
                            </span>
                          )}
                          {post.subsectorId && (
                            <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                              {getSubsectorName(post.sectorId, post.subsectorId)}
                            </span>
                          )}
                        </div>
                      )}
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
