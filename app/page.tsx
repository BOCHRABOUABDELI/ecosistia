import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IntegrationsGrid } from "@/components/integrations-grid"
import { PricingCards } from "@/components/pricing-cards"
import { AppsCarousel } from "@/components/apps-carousel"
import {
  ArrowRight,
  Cog,
  FileText,
  MessageSquare,
  Bot,
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
    icon: Bot,
    title: "Asistentes internos con IA",
    description:
      "Crea asistentes que responden preguntas frecuentes de tu equipo al instante, consultan bases de datos internas y generan resumenes de documentacion tecnica. Menos interrupciones, mas productividad.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots para atencion al cliente",
    description:
      "Atiende a tus clientes las 24 horas del dia con chatbots que entienden contexto, resuelven incidencias comunes y escalan al equipo humano cuando es necesario. Mejora la satisfaccion sin aumentar costes.",
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pb-20 pt-24 lg:pb-32 lg:pt-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(345_82%_55%_/_0.08),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Desarrollo de software con IA
            </div>
            <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              Creamos aplicaciones inteligentes que hacen crecer tu empresa
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Desarrollamos software con inteligencia artificial que automatiza tus procesos,
              conecta tus sistemas y elimina tareas manuales. Desde la idea hasta produccion,
              con un equipo senior dedicado y por un{" "}
              <span className="font-semibold text-foreground">precio cerrado de 899{"\u00A0\u20AC"}</span>.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base px-8 shadow-lg shadow-primary/20">
                <Link href="/contacto">
                  Hablemos de tu proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8 bg-transparent"
              >
                <Link href="/aplicaciones">Ver demos funcionales</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Sin coste inicial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Prototipo en 5 dias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Codigo 100% tuyo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {[
              { value: "899\u00A0\u20AC", label: "Precio cerrado" },
              { value: "2-6 sem.", label: "Tiempo de entrega" },
              { value: "100%", label: "Tu propiedad" },
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
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Casos de exito
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Aplicaciones que ya estan en produccion
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Cada proyecto resuelve un problema real de negocio con inteligencia artificial.
              Explora demos funcionales que puedes probar ahora mismo, y usarlas como inspiracion
              para tu propio proyecto personalizado.
            </p>
          </div>
          <AppsCarousel />
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/aplicaciones">
                Ver todas las aplicaciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Soluciones
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              {"Que problemas resolvemos con inteligencia artificial"}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              La inteligencia artificial bien aplicada transforma la operativa de cualquier empresa.
              Estas son las areas donde generamos mayor impacto en los negocios de nuestros clientes,
              reduciendo costes operativos y multiplicando la productividad de los equipos.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="group rounded-xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
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
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {"Por que elegirnos"}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
                Tecnologia de primer nivel aplicada a tu negocio
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                No somos una consultora que promete y subcontrata. Somos un equipo tecnico especializado
                en inteligencia artificial aplicada a negocios reales. Trabajamos directamente contigo
                para entender tu operativa, identificar donde la IA aporta mas valor y construir
                soluciones que funcionan desde el primer dia de despliegue.
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
            <div className="flex flex-col gap-6">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Proceso
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-background lg:text-4xl text-balance">
              De tu idea a una aplicacion en produccion
            </h2>
            <p className="mt-4 text-background/50 text-lg leading-relaxed">
              Un proceso transparente en 4 fases. Tu decides en cada paso y tienes visibilidad
              completa del avance. Sin sorpresas, sin letra pequena, sin tecnicismos innecesarios.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-background/10 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden">
            {steps.map((step) => (
              <div key={step.number} className="bg-foreground p-8">
                <span className="font-heading text-4xl font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-background">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-background/20 text-background bg-transparent hover:bg-background/10">
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
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Precios transparentes
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Sin sorpresas ni costes ocultos
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {"Desarrollo completo de tu aplicacion con IA por un pago unico de "}
              <span className="font-semibold text-foreground">{"899\u00A0\u20AC"}</span>
              {". Despues, un plan de mantenimiento mensual adaptado al tamano de tu equipo. Sin permanencias, cancelacion en cualquier momento."}
            </p>
          </div>
          <PricingCards compact />
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {"Todos los planes incluyen hosting, soporte y actualizaciones. Facturacion anual disponible con 15% de descuento."}
          </p>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/precios">
                Ver precios detallados
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Sectors block */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Sectores
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Inteligencia artificial aplicada a cada sector
            </h2>
          </div>
          <div className="mt-10 flex flex-col gap-6 text-muted-foreground leading-relaxed">
            <p>
              En Ecosistia desarrollamos aplicaciones con inteligencia artificial adaptadas a las necesidades
              reales de cada industria. Ya sea en el sector salud, legal, inmobiliario, industrial,
              administracion publica o servicios profesionales, nuestras soluciones se integran con los
              sistemas que ya utilizas y automatizan los procesos que mas tiempo consumen a tu equipo.
            </p>
            <p>
              Desde asistentes virtuales que atienden consultas de clientes de forma autonoma hasta
              sistemas de extraccion automatica de datos de documentos complejos, pasando por paneles
              de control inteligentes que analizan metricas en tiempo real, cada aplicacion que
              construimos esta pensada para generar un retorno tangible desde el primer mes de uso.
            </p>
            <p>
              Trabajamos con tecnologias lider en inteligencia artificial: procesamiento de lenguaje
              natural (NLP), vision por computador, modelos predictivos, reconocimiento de patrones
              y automatizacion de flujos de trabajo. Todo integrado con plataformas como Google Workspace,
              Microsoft 365, Salesforce, HubSpot, Slack, WhatsApp y mas de 60 herramientas adicionales.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <div key={sector} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                {sector}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/contacto">
                Solicitar consulta gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-background lg:text-4xl text-balance">
            {"Tu proxima aplicacion con IA empieza aqui"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/50 text-lg leading-relaxed">
            Cuentanos que problema quieres resolver. Sin compromiso, sin tecnicismos.
            Te respondemos en menos de 24 horas con una propuesta clara y personalizada.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base px-8 shadow-lg shadow-primary/20">
              <Link href="/contacto">
                Empezar mi proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 border-background/20 text-background bg-transparent hover:bg-background/10"
            >
              <Link href="/aplicaciones">Ver aplicaciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
