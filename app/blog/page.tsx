"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, User, Filter } from "lucide-react"
import type { BlogPost, BlogSector } from "@/lib/blog-types"
import { CtaBanner } from "@/components/cta-banner"

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
    const sectorId = post.sectorId || post.sector_id
    const subsectorId = post.subsectorId || post.subsector_id
    if (selectedSector && sectorId !== selectedSector) return false
    if (selectedSubsector && subsectorId !== selectedSubsector) return false
    return true
  })

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  function getSectorName(sectorId: string) {
    return sectors.find(s => s.id === sectorId)?.name || ""
  }

  function getSubsectorName(sectorId: string, subsectorId: string) {
    const sector = sectors.find(s => s.id === sectorId)
    return sector?.subsectors.find(sub => sub.id === subsectorId)?.name || ""
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-transparent py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-medium text-sm mb-4 tracking-wide uppercase">
              Blog Ecosistia
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Conocimiento que impulsa tu negocio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Descubre las ultimas tendencias en inteligencia artificial, estrategias de digitalizacion y casos de exito para profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-6xl px-6 py-6">
          {sectors.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
                  <Filter className="h-4 w-4" />
                  <span>Filtrar:</span>
                </div>
                <Button
                  variant={selectedSector === null ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
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
                    className="rounded-full"
                    onClick={() => {
                      setSelectedSector(sector.id)
                      setSelectedSubsector(null)
                    }}
                  >
                    {sector.name}
                  </Button>
                ))}
              </div>

              {currentSector && currentSector.subsectors.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-6 border-l-2 border-accent/30">
                  <Button
                    variant={selectedSubsector === null ? "secondary" : "ghost"}
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => setSelectedSubsector(null)}
                  >
                    Todo {currentSector.name}
                  </Button>
                  {currentSector.subsectors.map(sub => (
                    <Button
                      key={sub.id}
                      variant={selectedSubsector === sub.id ? "secondary" : "ghost"}
                      size="sm"
                      className="rounded-full text-xs"
                      onClick={() => setSelectedSubsector(sub.id)}
                    >
                      {sub.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse text-muted-foreground">Cargando articulos...</div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <Card className="p-12 text-center border-dashed">
              <p className="text-muted-foreground">
                {selectedSector ? "No hay articulos en esta categoria." : "No hay articulos publicados aun."}
              </p>
            </Card>
          ) : (
            <div className="space-y-16">
              {/* Featured Post */}
              {featuredPost && (
                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <article className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                      {featuredPost.imageUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={encodeURI(featuredPost.imageUrl)}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          Sin imagen
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      {(featuredPost.sectorId || featuredPost.subsectorId) && (
                        <div className="flex gap-2 flex-wrap">
                          {featuredPost.sectorId && (
                            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                              {getSectorName(featuredPost.sectorId)}
                            </span>
                          )}
                          {featuredPost.subsectorId && (
                            <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                              {getSubsectorName(featuredPost.sectorId, featuredPost.subsectorId)}
                            </span>
                          )}
                        </div>
                      )}
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readingTime} min
                        </span>
                      </div>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                          Leer articulo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              )}

              {/* Other Posts Grid */}
              {otherPosts.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                    Mas articulos
                  </h2>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {otherPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                        <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-card">
                          <CardContent className="flex flex-col h-full p-0">
                            <div className="relative aspect-[16/10] overflow-hidden">
                              {post.imageUrl ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={encodeURI(post.imageUrl)}
                                  alt={post.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
                                  Sin imagen
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col flex-1 p-6">
                              {(post.sectorId || post.subsectorId) && (
                                <div className="mb-3 flex gap-2 flex-wrap">
                                  {post.sectorId && (
                                    <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                                      {getSectorName(post.sectorId)}
                                    </span>
                                  )}
                                </div>
                              )}
                              <h3 className="font-heading text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground border-t border-border/50">
                                <span className="flex items-center gap-1">
                                  <User className="h-3 w-3" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {post.readingTime} min
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="¿Quieres saber cómo aplicar esto en tu empresa?"
        description="Solicita un diagnóstico gratuito y analizamos juntos qué procesos puedes automatizar con IA."
      />
    </main>
  )
}
