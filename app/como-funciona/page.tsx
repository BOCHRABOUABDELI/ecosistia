import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, MessageCircle, Palette, Code, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Como funciona el desarrollo de aplicaciones con IA | Proceso en 4 pasos",
  description:
    "Asi desarrollamos tu aplicacion con inteligencia artificial: consulta gratuita, prototipo en 5 dias, desarrollo agil y despliegue en produccion. De tu idea a una app con IA en 2-12 semanas por 899 EUR.",
}

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Nos cuentas tu idea o problema",
    description:
      "Todo empieza con una conversacion. Queremos entender tu negocio, los procesos que te quitan tiempo y el resultado que buscas. No necesitas saber de tecnologia: tu nos cuentas el problema y nosotros pensamos en la solucion. Esta primera consulta es gratuita y sin compromiso.",
    details: [
      "Llamada o reunion inicial de 30 minutos",
      "Analisis del flujo de trabajo actual",
      "Identificacion de oportunidades de automatizacion",
      "Definicion de objetivos medibles",
    ],
  },
  {
    icon: Palette,
    number: "02",
    title: "Te hacemos el mock / demo",
    description:
      "Creamos un prototipo visual y funcional de tu aplicacion para que veas exactamente como funcionara antes de desarrollarla. Asi puedes validar la idea con tu equipo, pedir cambios y asegurarte de que es lo que necesitas antes de invertir en el desarrollo completo.",
    details: [
      "Prototipo interactivo en 5 dias laborables",
      "Flujos de usuario completos",
      "Validacion con tu equipo antes de desarrollar",
      "Iteraciones ilimitadas sobre el mock",
    ],
  },
  {
    icon: Code,
    number: "03",
    title: "Desarrollamos tu proyecto",
    description:
      "Construimos tu aplicacion con las mejores tecnologias, integrando IA donde realmente aporta valor. Conectamos con tus sistemas existentes (CRM, ERP, email, bases de datos) y nos aseguramos de que todo funcione de forma fiable y segura.",
    details: [
      "Desarrollo agil con entregas parciales",
      "Integracion con tus herramientas actuales",
      "Modelos de IA entrenados para tu caso",
      "Testing exhaustivo antes de cada entrega",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lo ponemos en produccion y lo mantenemos",
    description:
      "Desplegamos tu aplicacion en un entorno seguro y escalable. Monitorizamos su rendimiento las 24 horas, corregimos incidencias y la mejoramos continuamente para que siempre funcione al maximo rendimiento.",
    details: [
      "Despliegue en infraestructura cloud segura",
      "Monitorizacion 24/7 automatica",
      "Actualizaciones y mejoras mensuales",
      "Soporte tecnico incluido en el mantenimiento",
    ],
  },
]

const faqs = [
  {
    question: "Cuanto tiempo tarda el desarrollo de una aplicacion?",
    answer:
      "Depende de la complejidad, pero la mayoria de proyectos se completan entre 2 y 6 semanas. El mock/demo lo tienes en 5 dias laborables para que valides la idea rapidamente.",
  },
  {
    question: "Necesito conocimientos tecnicos para trabajar con vosotros?",
    answer:
      "No, en absoluto. Tu nos cuentas el problema de negocio y nosotros nos encargamos de toda la parte tecnica. Te guiamos en cada paso del proceso.",
  },
  {
    question: "Puedo pedir cambios durante el desarrollo?",
    answer:
      "Si. Trabajamos con metodologia agil, lo que significa que hacemos entregas parciales y puedes pedir ajustes en cada fase. El mock inicial es precisamente para validar antes de desarrollar.",
  },
  {
    question: "Que pasa si necesito una funcionalidad nueva despues del lanzamiento?",
    answer:
      "El plan de mantenimiento incluye mejoras continuas. Si necesitas funcionalidades adicionales importantes, te hacemos un presupuesto transparente y las desarrollamos.",
  },
  {
    question: "Mis datos estan seguros?",
    answer:
      "Si. Usamos infraestructura cloud con encriptacion, backups automaticos y cumplimiento de normativas de proteccion de datos. La seguridad es una prioridad en cada proyecto.",
  },
]

export default function ComoFuncionaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Proceso</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            {"Como desarrollamos aplicaciones con inteligencia artificial en 4 pasos"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Un proceso agil, transparente y sin complicaciones tecnicas. Te acompanamos desde la primera consulta gratuita
            hasta el despliegue en produccion, con entregas parciales y visibilidad completa en cada fase del desarrollo.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-8 md:block" />
            <div className="flex flex-col gap-16">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-6 md:gap-10">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm shadow-accent/20 md:h-16 md:w-16">
                    <step.icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="font-heading text-sm font-bold text-accent">
                      {"Paso "}{step.number}
                    </span>
                    <h2 className="mt-1 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-center lg:text-4xl text-balance">
            Preguntas frecuentes
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
            {"Listo para empezar?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/60 text-lg leading-relaxed">
            Cuentanos tu idea y te preparamos una propuesta sin compromiso. Respondemos en menos de 24 horas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="success" size="lg" className="text-base px-8 shadow-lg shadow-success/20">
              <Link href="/contacto">
                Empezar mi proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/aplicaciones">Ver aplicaciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
