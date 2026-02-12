import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { apps } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"
import { AppIcon } from "@/components/app-icon"

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const app = apps.find((a) => a.slug === slug)
  if (!app) return { title: "Aplicacion no encontrada" }
  return {
    title: `${app.name} - Software con IA para ${app.sector} | 899 EUR | Ecosistia`,
    description: `${app.description} ${app.seoContent?.paragraphs[0]?.substring(0, 120) ?? ""} Desarrollo a medida por 899 EUR. Demo funcional disponible.`,
    openGraph: {
      title: `${app.name} - Aplicacion con inteligencia artificial para ${app.sector}`,
      description: app.description,
      images: app.image ? [{ url: app.image }] : undefined,
    },
  }
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const app = apps.find((a) => a.slug === slug)
  if (!app) notFound()

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "899",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Ecosistia",
      },
    },
    featureList: app.features.join(", "),
    screenshot: app.image,
  }

  return (
    <section className="py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/aplicaciones"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a aplicaciones
        </Link>

        {/* Hero image */}
        <div className="mt-8 relative h-64 w-full overflow-hidden rounded-2xl lg:h-80 bg-muted">
          <img
            src={app.image || "/placeholder.svg"}
            alt={app.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge className="bg-success text-success-foreground hover:bg-success/90 border-0 text-[10px] font-bold uppercase tracking-wide">
              Demo Funcional
            </Badge>
            <Badge
              variant="secondary"
              className="bg-background/90 text-foreground backdrop-blur-sm border-0 text-[10px] font-medium"
            >
              {app.sector}
            </Badge>
          </div>
          <AppIcon name={app.icon} color={app.iconColor} size="lg" className="absolute bottom-4 left-4" />
        </div>

        {/* Title */}
        <div className="mt-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            {app.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{app.subtitle}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {app.description}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Problema que resuelve
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {app.problem}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {"Para quien es"}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {app.audience}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Funcionalidades
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {app.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-foreground"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Tecnologias
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {app.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Ver Demo button */}
        {app.demoUrl && (
          <div className="mt-12 flex justify-center">
            <Button asChild variant="success" size="lg" className="text-base px-8">
              <a href={app.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Demo en vivo
              </a>
            </Button>
          </div>
        )}

        {/* SEO Content Section */}
        {app.seoContent && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
              {app.seoContent.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-muted-foreground leading-relaxed">
              {app.seoContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 rounded-2xl bg-primary p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground">
            {"Quiero algo asi"}
          </h2>
          <p className="mt-2 text-primary-foreground/60">
            Cuentanos tu caso y te preparamos una solucion a medida.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="success" size="lg">
              <Link href="/contacto">
                Empezar mi proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
              <Link href="/aplicaciones">
                Ver mas aplicaciones
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
