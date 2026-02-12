import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PricingCards } from "@/components/pricing-cards"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Precios de desarrollo de aplicaciones con IA | Desde 899 €",
  description:
    "Cuanto cuesta desarrollar una aplicacion con inteligencia artificial? Precio cerrado de 899 € con todo incluido. Mantenimiento desde 150 €/mes sin permanencia. Consulta gratuita.",
}

const developmentFeatures = [
  "Aplicacion personalizada con IA",
  "Integracion con tus sistemas",
  "Mock / demo antes de desarrollar",
  "Testing y despliegue incluido",
  "Formacion basica del equipo",
  "Acompañamiento completo",
]

const faqs = [
  {
    question: "Que incluye el precio de 899 €?",
    answer:
      "Incluye todo el desarrollo de tu aplicacion con IA: analisis de requisitos, mock/demo, desarrollo, integraciones, testing, despliegue en produccion y formacion basica de tu equipo. Es un pago unico, no una suscripcion.",
  },
  {
    question: "Hay costes ocultos?",
    answer:
      "No. El precio de desarrollo es 899 € y el mantenimiento mensual es el que elijas segun el numero de usuarios. Si necesitas funcionalidades extra despues del lanzamiento, te damos un presupuesto cerrado antes de empezar.",
  },
  {
    question: "Puedo cancelar el mantenimiento en cualquier momento?",
    answer:
      "Si, el mantenimiento es mensual y sin permanencia. Puedes cancelar cuando quieras. Tu aplicacion seguira funcionando, pero no tendras soporte ni actualizaciones.",
  },
  {
    question: "Que pasa si mi equipo crece y necesito mas usuarios?",
    answer:
      "Simplemente pasas al plan de mantenimiento del siguiente nivel. El cambio es inmediato y el precio por usuario disminuye a medida que crece tu equipo.",
  },
  {
    question: "Ofreceis facturacion anual con descuento?",
    answer:
      "Si, si pagas el mantenimiento anual te aplicamos un 15% de descuento. Contactanos para mas detalles.",
  },
]

export default function PreciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Precios</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            {"Cuanto cuesta una aplicacion con inteligencia artificial"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Desarrollo completo de tu aplicacion con IA por un pago unico de 899{"\u00A0\u20AC"}.
            Mantenimiento mensual desde 150{"\u00A0\u20AC"}/mes. Sin permanencias, sin costes ocultos
            y sin letra pequena.
          </p>
        </div>
      </section>

      {/* Development price */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-8 lg:p-12 shadow-sm">
            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Desarrollo
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground lg:text-4xl">
                  {"Aplicacion con IA a medida"}
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Pago unico. Sin suscripciones de desarrollo. El codigo es tuyo.
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {developmentFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center shrink-0">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading text-6xl font-bold text-foreground">
                    899
                  </span>
                  <span className="font-heading text-2xl font-bold text-muted-foreground">
                    {"\u20AC"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">pago unico</p>
                <Button asChild variant="success" size="lg" className="mt-6 px-8 shadow-sm shadow-success/20">
                  <Link href="/contacto">
                    Empezar mi proyecto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance plans */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              Planes de mantenimiento mensual
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Elige el plan que mejor se adapte al tamano de tu equipo. Incluye
              hosting, soporte, actualizaciones y mejoras continuas.
            </p>
          </div>
          <PricingCards />
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {"Facturacion anual disponible con 15% de descuento. Sin permanencia."}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-center lg:text-4xl text-balance">
            Preguntas sobre precios
          </h2>
          <div className="mt-12">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={`faq-${i}`}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl text-balance">
            {"Hablemos de tu proyecto"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/60 text-lg leading-relaxed">
            Te ayudamos a elegir el plan perfecto para tu equipo y tus
            necesidades. Consulta gratuita y sin compromiso.
          </p>
          <Button asChild variant="success" size="lg" className="mt-10 text-base px-8 shadow-lg shadow-success/20">
            <Link href="/contacto">
              Contactar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
