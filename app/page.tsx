import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IntegrationsGrid } from "@/components/integrations-grid"
import { PricingCards } from "@/components/pricing-cards"
import { AppsCarousel } from "@/components/apps-carousel"
import { HeroSection } from "@/components/hero-section"
import {
  ArrowRight,
  Cog,
  FileText,
  RefreshCw,
  BarChart3,
  Shield,
  Zap,
  Users,
  CheckCircle2,
} from "lucide-react"

const problems = [
  {
    icon: Cog,
    title: "Automatizacion de procesos",
    description:
      "Elimina tareas repetitivas que consumen horas de tu equipo cada semana. Desde la entrada de datos hasta la generacion de informes, la IA automatiza flujos de trabajo completos para que tu equipo se centre en lo que realmente importa.",
  },
  {
    icon: FileText,
    title: "Lectura inteligente de documentos",
    description:
      "Extrae datos de facturas, contratos, albaranes y formularios de forma automatica. Nuestra IA reconoce patrones, clasifica documentos y vuelca la informacion directamente en tus sistemas sin intervencion manual.",
  },
  {
    icon: RefreshCw,
    title: "Sincronizacion entre sistemas",
    description:
      "Conecta tu CRM, ERP, email y herramientas de gestion para que los datos fluyan entre ellos de forma automatica. Elimina la doble entrada de datos y reduce errores de sincronizacion.",
  },
  {
    icon: BarChart3,
    title: "Paneles inteligentes y reportes",
    description:
      "Dashboards con IA que analizan tus metricas, detectan anomalias y te sugieren acciones concretas. Toma mejores decisiones con datos actualizados en tiempo real y predicciones basadas en historicos.",
  },
]

const whyUs = [
  {
    icon: Zap,
    title: "Entrega en semanas, no meses",
    description:
      "Tu aplicacion lista en 2-6 semanas. Trabajamos con metodologia agil y entregas parciales para que veas resultados desde el primer sprint.",
  },
  {
    icon: Shield,
    title: "Infraestructura segura y escalable",
    description:
      "Cloud con encriptacion, backups automaticos y cumplimiento normativo RGPD. Tus datos protegidos bajo estandares empresariales.",
  },
  {
    icon: Users,
    title: "Equipo senior dedicado",
    description:
      "Trabajas directamente con desarrolladores especializados en IA aplicada. Sin intermediarios, sin agencias, sin esperas.",
  },
]

const steps = [
  {
    number: "01",
    title: "Nos cuentas tu idea",
    description:
      "Una conversacion para entender tu negocio, tus procesos y el resultado que buscas. No necesitas saber de tecnologia. Consulta gratuita y sin compromiso.",
  },
  {
    number: "02",
    title: "Creamos el prototipo",
    description:
      "En 5 dias laborables tienes un mock funcional para validar la idea con tu equipo antes de invertir en el desarrollo completo.",
  },
  {
    number: "03",
    title: "Desarrollamos la app",
    description:
      "Construimos tu aplicacion con IA conectada a tus sistemas. Entregas parciales semanales para que sigas el progreso en todo momento.",
  },
  {
    number: "04",
    title: "Produccion y soporte",
    description:
      "Despliegue en infraestructura segura, monitorizacion 24/7, actualizaciones continuas y soporte tecnico incluido.",
  },
]

const sectors = [
  "Clinicas y centros de salud",
  "Despachos de abogados",
  "Inmobiliarias y promotoras",
  "Fabricantes y talleres industriales",
  "Administraciones publicas",
  "Consultoras y servicios profesionales",
  "Comercio electronico y retail",
  "Logistica y distribucion",
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ecosistia",
  alternateName: "Ecosistia",
  description:
    "Ecosistia es una empresa especializada en el desarrollo de aplicaciones con inteligencia artificial a medida para empresas. Ofrecemos automatizacion de procesos, lectura inteligente de documentos, sincronizacion de sistemas y paneles de datos inteligentes por un precio cerrado de 899 EUR.",
  url: "https://ecosistia.com",
  foundingDate: "2024",
  areaServed: "ES",
  knowsLanguage: "es",
  serviceType: "Desarrollo de software con inteligencia artificial",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de desarrollo con IA",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Desarrollo de aplicacion con IA a medida",
        description:
          "Desarrollo completo de una aplicacion personalizada con inteligencia artificial, incluyendo analisis, prototipo, desarrollo, integraciones, testing y despliegue en produccion.",
        price: "899",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Mantenimiento mensual",
        description:
          "Plan de mantenimiento con hosting, soporte tecnico, actualizaciones y mejoras continuas. Desde 150 EUR/mes sin permanencia.",
        price: "150",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    ],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cuanto cuesta desarrollar una aplicacion con inteligencia artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Ecosistia, el desarrollo completo de una aplicacion con IA a medida tiene un precio cerrado de 899 EUR. Este precio incluye analisis, prototipo, desarrollo, integraciones, testing y despliegue. Despues, el mantenimiento mensual empieza desde 150 EUR/mes sin permanencia.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto tiempo tarda en desarrollarse una aplicacion con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoria de proyectos se completan entre 2 y 6 semanas. Entregamos un prototipo funcional en los primeros 5 dias laborables para validar la idea antes del desarrollo completo.",
      },
    },
    {
      "@type": "Question",
      name: "Que tipo de aplicaciones con IA desarrolla Ecosistia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Desarrollamos aplicaciones de automatizacion de procesos, sistemas de lectura inteligente de documentos (OCR con IA), paneles de datos con predicciones, gestion comercial con IA, plataformas de analisis forense y sincronizacion entre sistemas empresariales como CRM, ERP y herramientas de gestion.",
      },
    },
    {
      "@type": "Question",
      name: "Ecosistia trabaja con empresas de cualquier sector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Hemos desarrollado proyectos para clinicas, despachos de abogados, inmobiliarias, fabricantes, administraciones publicas, consultoras, comercio electronico y empresas de logistica, entre otros sectores.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <HeroSection />

      {/* Metrics bar */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {[
              { value: "899\u00A0\u20AC", label: "Precio cerrado" },
              { value: "2-12 sem.", label: "Tiempo de entrega" },
              { value: "100%", label: "Acompañamiento completo" },
              { value: "24h", label: "Tiempo de respuesta" },
            ].map((metric) => (
              <div key={metric.label} className="py-8 text-center lg:py-10">
                <p className="font-heading text-2xl font-bold text-foreground lg:text-3xl">{metric.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Carousel */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-10">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Casos de exito
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Aplicaciones con IA en produccion: casos de exito reales
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Cada proyecto resuelve un problema real de negocio con inteligencia artificial aplicada.
              Explora demos funcionales de aplicaciones con IA que puedes probar ahora mismo,
              y usarlas como punto de partida para tu propio software personalizado.
            </p>
          </div>
          <AppsCarousel />
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/aplicaciones">
                Ver todas las aplicaciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Soluciones
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Soluciones de inteligencia artificial para automatizar tu negocio
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              La inteligencia artificial aplicada a empresas transforma la operativa diaria y reduce costes hasta un 60%.
              Desde la automatizacion de procesos repetitivos hasta paneles de datos inteligentes,
              estas son las soluciones de IA que mas impacto generan en los negocios de nuestros clientes.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-accent/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <problem.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ecosistia */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {"Por que elegirnos"}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
                {"Por que elegir Ecosistia para desarrollar software con IA"}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                No somos una consultora generica que promete y subcontrata. Somos un equipo de desarrolladores
                senior especializados en inteligencia artificial aplicada a empresas. Trabajamos directamente contigo
                para entender tu operativa, identificar donde la IA genera mayor retorno y construir
                aplicaciones que funcionan desde el primer dia en produccion.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cada proyecto arranca con un prototipo funcional que puedes probar antes de comprometerte
                con el desarrollo completo. Asi reduces el riesgo, validas la idea con tu equipo
                y te aseguras de que la solucion resuelve tu problema real antes de invertir.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/como-funciona">
                    {"Conoce nuestro proceso"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-accent/20">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <IntegrationsGrid />

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Proceso
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl text-balance">
              {"Como desarrollamos tu aplicacion con IA en 4 pasos"}
            </h2>
            <p className="mt-4 text-primary-foreground/60 text-lg leading-relaxed">
              Un proceso agil y transparente: de tu idea a una aplicacion con inteligencia artificial
              en produccion en 2-6 semanas. Sin sorpresas, sin letra pequena, sin tecnicismos innecesarios.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
            {steps.map((step) => (
              <div key={step.number} className="bg-primary p-8">
                <span className="font-heading text-4xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-primary-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/como-funciona">
                Ver proceso completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Precios transparentes
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              {"Precio de desarrollo de software con IA: 899\u00A0\u20AC"}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {"Desarrollo completo de tu aplicacion con inteligencia artificial por un pago unico de "}
              <span className="font-semibold text-foreground">{"899\u00A0\u20AC"}</span>
              {". Despues, planes de mantenimiento desde 150\u00A0\u20AC/mes adaptados al tamano de tu equipo. Sin permanencias, cancelas cuando quieras."}
            </p>
          </div>
          <PricingCards compact />
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {"Todos los planes incluyen hosting, soporte y actualizaciones. Facturacion anual disponible con 15% de descuento."}
          </p>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/precios">
                Ver precios detallados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Sectors block */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Sectores
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Desarrollo de aplicaciones con IA para cada sector empresarial
            </h2>
          </div>
          <div className="mt-10 flex flex-col gap-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Ecosistia es una empresa de desarrollo de software con inteligencia artificial</strong>,
              especializada en crear aplicaciones a medida para empresas de cualquier sector y tamano.
              Nuestras soluciones de IA se integran con los sistemas que ya utilizas (CRM, ERP, email, bases de datos)
              y automatizan los procesos que mas tiempo consumen a tu equipo, desde la primera semana de uso.
            </p>
            <p>
              Ofrecemos <strong className="text-foreground">automatizacion de procesos empresariales con IA</strong>,
              sistemas de <strong className="text-foreground">lectura inteligente de documentos (OCR con inteligencia artificial)</strong>,
              plataformas de gestion comercial con IA, paneles de datos con predicciones en tiempo real
              y sincronizacion entre sistemas de negocio. Cada aplicacion se desarrolla por un
              precio cerrado de 899{"\u00A0\u20AC"} y se entrega en un plazo de 2 a 6 semanas.
            </p>
            <p>
              Trabajamos con tecnologias lider: procesamiento de lenguaje natural (NLP), modelos de lenguaje (LLM),
              vision por computador, modelos predictivos y automatizacion con IA. Integramos con
              Google Workspace, Microsoft 365, Salesforce, HubSpot, Slack, WhatsApp, SAP,
              Notion y mas de 60 herramientas empresariales adicionales.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <div key={sector} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground">
                <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                {sector}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="success">
              <Link href="/contacto">
                Solicitar consulta gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl text-balance">
            {"Tu proxima aplicacion con IA empieza aqui"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/60 text-lg leading-relaxed">
            Cuentanos que problema quieres resolver. Sin compromiso, sin tecnicismos.
            Te respondemos en menos de 24 horas con una propuesta clara y personalizada.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="success" size="lg" className="text-base px-8 shadow-lg shadow-success/20">
              <Link href="/contacto">
                Empezar mi proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/aplicaciones">Ver aplicaciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
