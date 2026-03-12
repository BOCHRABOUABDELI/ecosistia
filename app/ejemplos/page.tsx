import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Scale,
  Building2,
  BarChart3,
  Headphones,
  ShoppingCart,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ejemplos de Inteligencia Artificial en empresas | Ecosistia",
  description:
    "Descubre casos reales de cómo empresas están utilizando IA para automatizar procesos, reducir costes y mejorar resultados.",
  openGraph: {
    title: "Ejemplos de Inteligencia Artificial en empresas",
    description:
      "Casos reales de cómo la IA transforma diferentes sectores empresariales.",
  },
}

const useCases = [
  {
    icon: Scale,
    sector: "Despachos jurídicos",
    problem:
      "Revisar contratos y jurisprudencia consume decenas de horas cada semana. Los abogados dedican más tiempo a lectura de documentos que a estrategia legal.",
    solution:
      "IA analiza contratos automáticamente, identifica cláusulas clave, detecta riesgos legales y resume jurisprudencia relevante.",
    result:
      "Reducción del 80% en tiempo de análisis de documentos. Los abogados se concentran en la estrategia, no en la lectura.",
  },
  {
    icon: Building2,
    sector: "Administradores de fincas",
    problem:
      "Cientos de incidencias de propietarios llegan por email, WhatsApp y teléfono. La gestión manual es caótica y los tiempos de respuesta son lentos.",
    solution:
      "IA clasifica automáticamente incidencias por tipo, prioridad y urgencia. Genera respuestas automáticas para consultas frecuentes.",
    result:
      "Reducción del 60% en tiempo de gestión de incidencias. Los propietarios reciben respuestas inmediatas.",
  },
  {
    icon: BarChart3,
    sector: "ERP empresariales",
    problem:
      "Analizar datos de ventas, inventario y márgenes requiere horas de trabajo manual. Los reportes llegan tarde y sin insights accionables.",
    solution:
      "IA analiza automáticamente datos del ERP, detecta tendencias, genera reportes y sugiere acciones de negocio.",
    result:
      "Reportes generados en minutos en lugar de días. Decisiones basadas en datos en tiempo real.",
  },
  {
    icon: Headphones,
    sector: "Empresas de servicios",
    problem:
      "El equipo de atención al cliente está saturado de consultas repetitivas: estados de pedidos, horarios, políticas de devolución.",
    solution:
      "Chatbot con IA atiende consultas frecuentes 24/7, clasifica tickets y solo escala casos complejos al equipo humano.",
    result:
      "Reducción del 70% de consultas al equipo humano. Satisfacción del cliente mejorada con respuestas inmediatas.",
  },
  {
    icon: ShoppingCart,
    sector: "Ecommerce",
    problem:
      "Entender por qué los clientes compran, qué abandonan en el carrito y cuáles son propensos a retornar es información dispersa.",
    solution:
      "IA analiza comportamiento de clientes, predice compras futuras, detecta productos complementarios y personaliza recomendaciones.",
    result:
      "Incremento del 35% en ventas promedio. Reducción del 20% en tasa de abandono de carrito.",
  },
  {
    icon: Building2,
    sector: "Construcción y reformas",
    problem:
      "Presupuestos, cronogramas y cambios de proyecto se gestionan en Excel. Fácil perder información y surgen conflictos con clientes.",
    solution:
      "Sistema con IA que genera presupuestos automáticos, rastrea cambios, calcula impacto en cronograma y comunica con clientes.",
    result:
      "Reducción del 50% en tiempo de administración de proyectos. Clientes informados en tiempo real de cambios.",
  },
]

export default function EjemplosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-transparent py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Casos de uso reales
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
              Cómo las empresas utilizan Inteligencia Artificial
            </h1>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Descubre ejemplos reales de cómo la IA puede transformar diferentes sectores. Desde
              despachos jurídicos hasta ecommerce, empresas están automatizando procesos, reduciendo
              costes y mejorando resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:gap-10">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.sector}
                className="group grid gap-6 items-center lg:grid-cols-2 p-8 rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              >
                {/* Left side: Icon and sector */}
                <div
                  className={`flex flex-col gap-6 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                    <useCase.icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {useCase.sector}
                    </h3>
                  </div>

                  {/* Problem */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      El problema
                    </p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      La solución
                    </p>
                    <p className="mt-2 text-foreground font-medium leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="rounded-xl bg-success/5 border border-success/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-success mb-2">
                      El resultado
                    </p>
                    <p className="text-foreground font-semibold leading-relaxed">
                      {useCase.result}
                    </p>
                  </div>
                </div>

                {/* Right side: Visual indicator */}
                <div
                  className={`hidden lg:flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative w-full h-64 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <useCase.icon className="h-24 w-24 text-accent/30 mx-auto mb-4" />
                      <p className="text-sm font-semibold text-muted-foreground">
                        {useCase.sector}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl text-balance">
            Descubre cómo aplicar IA en tu empresa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/60 text-lg leading-relaxed">
            Cada negocio es único. Realizamos un análisis personalizado para identificar dónde la
            inteligencia artificial puede generar mayor impacto en tu operativa.
          </p>
          <div className="mt-10">
            <Button
              asChild
              variant="success"
              size="lg"
              className="text-base px-8 shadow-lg shadow-success/20"
            >
              <Link href="/contacto">
                Solicitar diagnóstico gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
