import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { apps } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  AlertTriangle,
  Target,
  Zap,
  Building2,
  TrendingUp,
  Shield,
  Star,
} from "lucide-react"
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

  const sectorKeywords = app.targetSectors?.slice(0, 5).join(", ") ?? ""
  const descriptionSeo = `${app.name}: ${app.description} Ideal para ${sectorKeywords}. Desarrollo a medida con inteligencia artificial por 899 €. Demo funcional disponible.`

  return {
    title: `${app.name} | Software con IA para ${app.sector} | 899 € | Ecosistia`,
    description: descriptionSeo.substring(0, 320),
    keywords: [
      app.name,
      `software IA ${app.sector}`,
      `aplicacion inteligencia artificial ${app.sector}`,
      ...app.tags,
      ...(app.targetSectors?.slice(0, 5) ?? []).map((s) => `software IA ${s}`),
      "desarrollo software IA",
      "automatizacion con IA",
      "Ecosistia",
      "899 €",
    ],
    openGraph: {
      title: `${app.name} - Software con inteligencia artificial para ${app.sector}`,
      description: descriptionSeo.substring(0, 200),
      images: app.image ? [{ url: app.image }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} | IA para ${app.sector}`,
      description: app.subtitle,
    },
    alternates: {
      canonical: `/aplicaciones/${app.slug}`,
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

  const relatedApps = apps.filter((a) => a.slug !== app.slug).slice(0, 3)

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
      priceCurrency: "€",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Ecosistia",
        url: "https://ecosistia.com",
      },
    },
    featureList: app.features.join(", "),
    screenshot: app.image,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "24",
      bestRating: "5",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Que es ${app.name} y para que sirve?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: app.description,
        },
      },
      {
        "@type": "Question",
        name: `Cuanto cuesta desarrollar ${app.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El desarrollo completo de ${app.name} tiene un precio cerrado de 899 €. Incluye analisis, prototipo, desarrollo, integraciones y despliegue. Mantenimiento mensual desde 150 € sin permanencia.`,
        },
      },
      {
        "@type": "Question",
        name: `Para que sectores es util ${app.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${app.name} esta disenado para ${app.targetSectors?.join(", ")}. Es una solucion flexible que se adapta a las necesidades de cada tipo de negocio dentro del sector ${app.sector}.`,
        },
      },
      {
        "@type": "Question",
        name: `Puedo ver una demo funcional de ${app.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Si, ${app.name} cuenta con una demo funcional totalmente operativa que puedes probar antes de contratar. Solicita acceso a traves de nuestra web o contacta con nosotros para una demostracion guiada.`,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* =========================================
           HERO - Full-width con imagen y overlay
         ========================================= */}
      <section className="relative overflow-hidden bg-primary pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(263_83%_58%_/_0.15),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/aplicaciones"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a aplicaciones
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Texto hero */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-success text-success-foreground hover:bg-success/90 border-0 text-xs font-bold uppercase tracking-wide">
                  Demo Funcional
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-0 text-xs">
                  {app.sector}
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground border-0 text-xs">
                  899 €
                </Badge>
              </div>

              <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance leading-[1.1]">
                {app.name}
              </h1>

              <p className="mt-4 text-lg text-primary-foreground/70 leading-relaxed lg:text-xl">
                {app.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {app.demoUrl && (
                  <Button asChild variant="success" size="lg" className="text-base px-8 shadow-lg shadow-success/20">
                    <a href={app.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Probar demo en vivo
                    </a>
                  </Button>
                )}
                <Button asChild size="lg" className="text-base px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/contacto">
                    Solicitar presupuesto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl shadow-black/20">
                <div className="flex items-center gap-1.5 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-[11px] text-primary-foreground/40 font-mono">{app.slug}.ecosistia.com</span>
                </div>
                <img
                  src={app.image || "/placeholder.svg"}
                  alt={`Captura de pantalla de ${app.name} - software con inteligencia artificial para ${app.sector}`}
                  className="w-full object-cover"
                  loading="eager"
                />
              </div>
              <AppIcon name={app.icon} color={app.iconColor} size="lg" className="absolute -bottom-4 -left-4 shadow-xl ring-4 ring-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
           METRICAS CLAVE - Key Benefits
         ========================================= */}
      {app.keyBenefits && app.keyBenefits.length > 0 && (
        <section className="relative -mt-8 z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {app.keyBenefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-lg"
              >
                <p className="font-heading text-3xl font-bold tracking-tight text-accent lg:text-4xl">
                  {benefit.metric}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground leading-snug">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-6">

        {/* =========================================
             DESCRIPCION + PROBLEMA + AUDIENCIA
           ========================================= */}
        <section className="mt-20 lg:mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
              {"Que es"} <strong className="text-accent">{app.name}</strong> {"y como ayuda a tu negocio"}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {app.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Problema */}
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  El problema que resuelve
                </h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {app.problem}
              </p>
            </div>

            {/* Audiencia */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {"Para quien esta disenado"}
                </h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {app.audience}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
             FUNCIONALIDADES - Grid visual
           ========================================= */}
        <section className="mt-20 lg:mt-28">
          <div className="text-center">
            <Badge variant="secondary" className="text-xs font-medium uppercase tracking-wide">
              Funcionalidades clave
            </Badge>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
              Todo lo que incluye <strong className="text-accent">{app.name}</strong>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cada funcionalidad ha sido disenada con <strong className="text-foreground">inteligencia artificial integrada</strong> para maximizar la productividad
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {app.features.map((feature, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-relaxed">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
             SECTORES DE NEGOCIO - SEO/GEO section
           ========================================= */}
        {app.targetSectors && app.targetSectors.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="rounded-2xl bg-muted/50 p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Sectores y tipos de negocio
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong className="text-foreground">{app.name}</strong> se adapta a las necesidades de cada sector
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {app.targetSectors.map((sector) => (
                  <div
                    key={sector}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Star className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{sector}</p>
                      <p className="text-xs text-muted-foreground">
                        Software con IA para {sector.toLowerCase()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">{app.name}</strong> es una <strong className="text-foreground">solucion de software con inteligencia artificial</strong> adaptable
                a cualquier tipo de empresa dentro del sector <strong className="text-foreground">{app.sector}</strong>.
                Tanto si eres una <strong className="text-foreground">pyme</strong>, una <strong className="text-foreground">startup</strong> o una <strong className="text-foreground">empresa consolidada</strong>,
                el sistema se configura para adaptarse a tus procesos, tu equipo y tus objetivos de negocio.
                Ecosistia desarrolla cada proyecto por un <strong className="text-foreground">precio cerrado de 899 €</strong> con
                entrega funcional en <strong className="text-foreground">2 a 12 semanas</strong>.
              </p>
            </div>
          </section>
        )}

        {/* =========================================
             TECNOLOGIAS E INTEGRACIONES
           ========================================= */}
        <section className="mt-20 lg:mt-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Tecnologias utilizadas
                </h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-semibold text-foreground shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10">
                  <Shield className="h-5 w-5 text-success" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  Integraciones disponibles
                </h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {app.allIntegrations.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-lg border border-success/20 bg-success/5 px-3.5 py-2 text-sm font-medium text-foreground"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
             PRECIO INLINE
           ========================================= */}
        <section className="mt-20 lg:mt-28">
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  Desarrollo completo por <span className="text-accent">899{"\u00A0\u20AC"}</span>
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Precio cerrado, sin sorpresas. Incluye <strong className="text-foreground">analisis de requisitos</strong>,{" "}
                  <strong className="text-foreground">prototipo funcional en 5 dias</strong>,{" "}
                  <strong className="text-foreground">desarrollo completo</strong>,{" "}
                  <strong className="text-foreground">integraciones con tus sistemas</strong>,{" "}
                  <strong className="text-foreground">testing</strong> y{" "}
                  <strong className="text-foreground">despliegue en produccion</strong>.
                  Mantenimiento mensual desde 150{"\u00A0\u20AC"}/mes sin permanencia.
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {["Prototipo funcional en 5 dias", "Entrega completa en 2-12 semanas", "Sin permanencia en mantenimiento"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="font-heading text-6xl font-bold tracking-tight text-accent lg:text-7xl">
                  899{"\u00A0\u20AC"}
                </p>
                <p className="text-muted-foreground text-sm">precio cerrado por proyecto</p>
                <Button asChild variant="success" size="lg" className="mt-2 text-base px-10 shadow-lg shadow-success/20">
                  <Link href="/contacto">
                    Empezar mi proyecto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
             SEO CONTENT - Contenido largo
           ========================================= */}
        {app.seoContent && (
          <section className="mt-20 lg:mt-28">
            <article className="mx-auto max-w-4xl">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl text-balance">
                {app.seoContent.heading}
              </h2>
              <div className="mt-8 flex flex-col gap-6">
                {app.seoContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-[1.8] text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </section>
        )}

        {/* =========================================
             PREGUNTAS FRECUENTES - FAQ Schema
           ========================================= */}
        <section className="mt-20 lg:mt-28">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Preguntas frecuentes sobre {app.name}
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl flex flex-col gap-4">
            {[
              {
                q: `Que es ${app.name} y para que sirve?`,
                a: app.description,
              },
              {
                q: `Cuanto cuesta el desarrollo de ${app.name}?`,
                a: `El desarrollo completo de ${app.name} tiene un precio cerrado de 899 €. Este precio incluye analisis de requisitos, prototipo funcional, desarrollo completo, integraciones con tus sistemas, testing y despliegue en produccion. El mantenimiento mensual posterior parte de 150 €/mes sin permanencia.`,
              },
              {
                q: `Para que tipos de empresa es util ${app.name}?`,
                a: `${app.name} esta disenado para ${app.targetSectors?.slice(0, 5).join(", ")} y muchos mas tipos de negocio dentro del sector ${app.sector}. Es una solucion flexible que se adapta a pymes, startups y empresas consolidadas.`,
              },
              {
                q: `Puedo probar ${app.name} antes de contratarlo?`,
                a: `Si. ${app.name} cuenta con una demo funcional totalmente operativa que puedes probar sin compromiso. Ademas, en los primeros 5 dias de desarrollo entregamos un prototipo funcional para que valides que el producto se ajusta a tus necesidades antes de continuar.`,
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 open:border-accent/30 open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-bold text-foreground">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* =========================================
             CTA FINAL
           ========================================= */}
        <section className="mt-20 mb-20 lg:mt-28 lg:mb-28">
          <div className="rounded-2xl bg-primary p-8 text-center lg:p-14">
            <TrendingUp className="mx-auto h-10 w-10 text-primary-foreground/40" />
            <h2 className="mt-5 font-heading text-2xl font-bold text-primary-foreground lg:text-3xl text-balance">
              {"Quieres una solucion como"} {app.name} {"para tu empresa?"}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/60 leading-relaxed">
              Cuentanos tu caso y te preparamos una <strong className="text-primary-foreground">solucion a medida con inteligencia artificial</strong> por un precio cerrado de 899{"\u00A0\u20AC"}.
              Prototipo funcional en 5 dias. Entrega completa en 2-12 semanas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="success" size="lg" className="text-base px-8 shadow-lg shadow-success/20">
                <Link href="/contacto">
                  Hablemos de tu proyecto
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
        </section>

        {/* =========================================
             APPS RELACIONADAS
           ========================================= */}
        <section className="mb-20 lg:mb-28">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
              Otras aplicaciones con IA de Ecosistia
            </h2>
            <p className="mt-2 text-muted-foreground">
              Descubre mas soluciones de <strong className="text-foreground">software con inteligencia artificial</strong> para empresas
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedApps.map((related) => (
              <Link
                key={related.slug}
                href={`/aplicaciones/${related.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <AppIcon name={related.icon} color={related.iconColor} size="sm" />
                  <Badge variant="secondary" className="text-[10px]">{related.sector}</Badge>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {related.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {related.subtitle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Ver detalle <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
