"use client"

import { useState, useMemo } from "react"
import { apps, type Sector } from "@/lib/data"
import { AppCard } from "@/components/app-card"
import { AppFilters } from "@/components/app-filters"

export default function AplicacionesPage() {
  const [sector, setSector] = useState<Sector | "all">("all")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    let result = apps
    if (sector !== "all") {
      result = result.filter((a) => a.sector === sector)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [sector, search])

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent" >
            Portfolio
          </span>
          <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            Nuestras aplicaciones con IA
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Descubre las soluciones que hemos creado. Cada una resuelve un
            problema real de negocio con inteligencia artificial.
          </p>
        </div>

        <div className="mt-12">
          <AppFilters
            activeSector={sector}
            onSectorChange={setSector}
            search={search}
            onSearchChange={setSearch}
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              No hay aplicaciones con este filtro. Prueba con otro sector o
              termino de busqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
