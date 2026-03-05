"use client"

import { useEffect, useState } from "react"
import { PostCard } from "@/components/blog/post-card"
import { PostFilters } from "@/components/blog/post-filters"
import { Loader2, FileText } from "lucide-react"
import type { BlogPost, BlogSector } from "@/lib/blog-types"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [sectors, setSectors] = useState<BlogSector[]>([])
  const [loading, setLoading] = useState(true)
  const [activeSector, setActiveSector] = useState("")
  const [activeSubsector, setActiveSubsector] = useState("")

  useEffect(() => {
    async function load() {
      const [postsRes, sectorsRes] = await Promise.all([
        fetch("/api/blog/posts"),
        fetch("/api/blog/sectors"),
      ])
      setPosts(await postsRes.json())
      setSectors(await sectorsRes.json())
      setLoading(false)
    }
    load()
  }, [])

  const filtered = posts.filter((post) => {
    if (activeSector && post.sectorId !== activeSector) return false
    if (activeSubsector && post.subsectorId !== activeSubsector) return false
    return true
  })

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-32">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-32">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Blog de Ecosistia
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Articulos sobre inteligencia artificial, automatizacion de procesos y transformacion digital para empresas.
        </p>
      </div>

      {/* Filters */}
      {sectors.length > 0 && (
        <div className="mb-8">
          <PostFilters
            sectors={sectors}
            activeSector={activeSector}
            activeSubsector={activeSubsector}
            onSectorChange={setActiveSector}
            onSubsectorChange={setActiveSubsector}
          />
        </div>
      )}

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <FileText className="h-12 w-12 text-muted-foreground/30" />
          <p className="mt-4 text-muted-foreground">
            {posts.length === 0
              ? "Proximamente publicaremos nuevos articulos."
              : "No hay articulos en esta categoria."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              sector={sectors.find((s) => s.id === post.sectorId)}
            />
          ))}
        </div>
      )}
    </main>
  )
}
