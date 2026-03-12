"use client"

import { useState, useMemo } from "react"
import { apps, type Sector } from "@/lib/data"
import { AppCard } from "@/components/app-card"
import { AppFilters } from "@/components/app-filters"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Cog,
  FileText,
  Users,
  BarChart3,
  RefreshCw,
  Zap,
  ArrowRight,
  Smartphone,
  Brain,
} from "lucide-react"

const aiSolutions = [
  {
    icon: Cog,
    title: "Automatización de procesos empresariales",
    description:
      "La IA automatiza flujos de trabajo complejos, eliminando tareas repetitivas y mejorando la eficiencia operativa.",
    example:
      "Empresas que procesan pedidos, facturas y expedientes de forma automática en segundos.",
  },
  {
    icon: FileText,
    title: "Procesamiento inteligente de documentos",
    description:
      "La IA puede leer facturas, contratos o informes y extraer automáticamente la información relevante.",
    example:
      "Despachos profesionales que automatizan la revisión de documentos y extracción de datos clave.",
  },
  {
    icon: Users,
    title: "IA para atención al cliente",
    description:
      "Chatbots inteligentes que atienden consultas 24/7, clasifican tickets y escalan casos complejos a tu equipo.",
    example:
      "Empresas que reducen un 70% el volumen de consultas repetitivas con respuestas automáticas.",
  },
  {
    icon: BarChart3,
    title: "IA para análisis de datos",
    description:
      "Dashboards inteligentes que detectan patrones, anomalías y sugieren acciones para mejorar resultados.",
    example:
      "Equipos de ventas que identifican clientes en riesgo de fuga y oportunidades de upsell automáticamente.",
  },
  {
    icon: RefreshCw,
    title: "Integración de IA con ERP y CRM",
    description:
      "Conecta sistemas de información para que los datos fluyan automáticamente entre herramientas sin duplicación.",
    example:
      "Empresas que sincronizaban datos manualmente ahora lo hacen de forma automática en tiempo real.",
  },
  {
    icon: Brain,
    title: "Desarrollo de aplicaciones con IA a medida",
    description:
      "Creamos soluciones personalizadas de IA que se adaptan a tus procesos específicos y objetivos de negocio.",
    example:
      "Apps que integran modelos de IA específicos para casos de uso únicos en tu industria.",
  },
]

// Metadata is set via generateMetadata in a separate file or layout for client components

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
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-transparent py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Soluciones de IA
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Aplicaciones reales de Inteligencia Artificial para empresas
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Desarrollamos soluciones de IA que automatizan procesos, analizan datos y mejoran la
              productividad empresarial.
            </p>
            <div className="mt-8">
              <Button asChild variant="success" size="lg" className="text-base px-8">
                <Link href="/contacto">
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Cards */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiSolutions.map((solution) => (
              <div
                key={solution.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                  {solution.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Ejemplo
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {solution.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Nuestras aplicaciones con IA
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Descubre las soluciones que hemos creado. Cada una resuelve un problema real de negocio
              con inteligencia artificial.
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
                No hay aplicaciones con este filtro. Prueba con otro sector o término de búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
