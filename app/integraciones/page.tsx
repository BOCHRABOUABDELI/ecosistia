"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  allIntegrations,
  categories,
  type IntegrationCategory,
  type SortOption,
} from "@/lib/integrations-data"
import { Search, ArrowRight, Grid3X3, LayoutList } from "lucide-react"
import { cn } from "@/lib/utils"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Mas populares" },
  { value: "name", label: "Nombre A-Z" },
  { value: "premium", label: "Premium" },
  { value: "beta", label: "Beta" },
  { value: "recent", label: "Recientes" },
]

export default function IntegracionesPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] =
    useState<IntegrationCategory | null>(null)
  const [sort, setSort] = useState<SortOption>("popular")
  const [view, setView] = useState<"grid" | "list">("grid")

  const filtered = useMemo(() => {
    let results = allIntegrations

    if (search.trim()) {
      const q = search.toLowerCase()
      results = results.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q),
      )
    }

    if (selectedCategory) {
      results = results.filter((i) => i.category === selectedCategory)
    }

    switch (sort) {
      case "popular":
        results = [...results].sort(
          (a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0),
        )
        break
      case "name":
        results = [...results].sort((a, b) => a.name.localeCompare(b.name))
        break
      case "premium":
        results = [...results].sort(
          (a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0),
        )
        break
      case "beta":
        results = [...results].sort(
          (a, b) => (b.beta ? 1 : 0) - (a.beta ? 1 : 0),
        )
        break
      case "recent":
        results = [...results].sort(
          (a, b) =>
            (b.recentlyLaunched ? 1 : 0) - (a.recentlyLaunched ? 1 : 0),
        )
        break
    }

    return results
  }, [search, selectedCategory, sort])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    const source = search.trim()
      ? allIntegrations.filter(
          (i) =>
            i.name.toLowerCase().includes(search.toLowerCase()) ||
            i.description.toLowerCase().includes(search.toLowerCase()),
        )
      : allIntegrations
    for (const cat of categories) {
      counts[cat] = source.filter((i) => i.category === cat).length
    }
    return counts
  }, [search])

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Ecosistema</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            Integraciones
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Conectamos tu aplicacion con mas de 60 herramientas que ya usas. Explora
            todas las plataformas disponibles y descubre como automatizar tu flujo de trabajo.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar integraciones..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-wrap items-center gap-1 rounded-md border border-border p-1">
              {sortOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setSort(opt.value)}
                  className={cn(
                    "rounded px-2.5 py-1.5 text-xs font-medium transition-colors",
                    sort === opt.value
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 rounded-md border border-border p-1">
              <button
                type="button"
                onClick={() => setView("grid")}
                className={cn(
                  "rounded p-1.5 transition-colors",
                  view === "grid"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground",
                )}
                aria-label="Vista cuadricula"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className={cn(
                  "rounded p-1.5 transition-colors",
                  view === "list"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground",
                )}
                aria-label="Vista lista"
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Categories */}
          <aside className="shrink-0 lg:w-60">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Categorias
            </h3>
            <nav className="flex flex-row flex-wrap gap-1.5 lg:flex-col lg:gap-0.5">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                  !selectedCategory
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                Todas ({allIntegrations.length})
              </button>
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                    selectedCategory === cat
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  {cat}{" "}
                  <span className="text-xs opacity-60">
                    ({categoryCounts[cat] || 0})
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <p className="mb-4 text-sm text-muted-foreground">
              {filtered.length}{" "}
              {filtered.length === 1 ? "integracion" : "integraciones"}{" "}
              {selectedCategory ? `en ${selectedCategory}` : "disponibles"}
            </p>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-lg font-medium text-muted-foreground">
                  No se encontraron integraciones
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prueba con otra busqueda o categoria.
                </p>
              </div>
            ) : view === "grid" ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item) => (
                  <div
                    key={item.slug}
                    className="group flex flex-col rounded-xl border border-border bg-background p-5 transition-all hover:shadow-lg hover:border-primary/30"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted p-2">
                        <img
                          src={item.logo}
                          alt={item.name}
                          width={28}
                          height={28}
                          loading="lazy"
                          className="h-7 w-7 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading text-sm font-semibold text-foreground truncate">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <Badge
                              variant="secondary"
                              className="shrink-0 text-[10px] px-1.5 py-0"
                            >
                              Popular
                            </Badge>
                          )}
                          {item.premium && (
                            <Badge className="shrink-0 text-[10px] px-1.5 py-0 bg-amber-500/10 text-amber-700 hover:bg-amber-500/20 border-0">
                              Premium
                            </Badge>
                          )}
                          {item.beta && (
                            <Badge
                              variant="outline"
                              className="shrink-0 text-[10px] px-1.5 py-0"
                            >
                              Beta
                            </Badge>
                          )}
                          {item.recentlyLaunched && (
                            <Badge className="shrink-0 text-[10px] px-1.5 py-0 bg-success/10 text-success hover:bg-success/20 border-0">
                              Nuevo
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground leading-tight">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {filtered.map((item) => (
                  <div
                    key={item.slug}
                    className="group flex items-center gap-4 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted p-2">
                      <img
                        src={item.logo}
                        alt={item.name}
                        width={24}
                        height={24}
                        loading="lazy"
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-sm font-semibold text-foreground">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0"
                          >
                            Popular
                          </Badge>
                        )}
                        {item.premium && (
                          <Badge className="text-[10px] px-1.5 py-0 bg-amber-500/10 text-amber-700 hover:bg-amber-500/20 border-0">
                            Premium
                          </Badge>
                        )}
                        {item.beta && (
                          <Badge
                            variant="outline"
                            className="text-[10px] px-1.5 py-0"
                          >
                            Beta
                          </Badge>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground truncate">
                        {item.description}
                      </p>
                    </div>
                    <span className="hidden text-xs text-muted-foreground sm:block">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-foreground p-8 text-center">
              <h2 className="font-heading text-xl font-bold text-background">
                {"No encuentras la integracion que necesitas?"}
              </h2>
              <p className="mt-2 text-sm text-background/60">
                Podemos conectar tu app con cualquier sistema que tenga API.
                Cuentanos tu caso y lo resolvemos.
              </p>
              <div className="mt-6">
                <Button asChild variant="success">
                  <Link href="/contacto">
                    Contactar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
