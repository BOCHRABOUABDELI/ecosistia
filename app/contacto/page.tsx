import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Clock, Shield, Sparkles, MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Diagnóstico gratuito de IA | Ecosistia",
  description:
    "Solicita un diagnóstico gratuito de IA para tu empresa. Analizamos tus procesos y te mostramos cómo automatizar con Inteligencia Artificial. Respuesta en menos de 24 horas.",
}

const trustPoints = [
  {
    icon: Clock,
    title: "Análisis de procesos",
    description: "Estudiamos tu operativa actual y flujos de trabajo para identificar oportunidades de automatización.",
  },
  {
    icon: Shield,
    title: "Identificación de automatizaciones",
    description: "Te mostramos qué procesos pueden ser automatizados con IA y qué impacto generarían.",
  },
  {
    icon: Sparkles,
    title: "Propuesta de soluciones IA",
    description: "Recibe una propuesta clara con las soluciones de IA recomendadas para tu empresa.",
  },
  {
    icon: Sparkles,
    title: "Estimación de ahorro de tiempo",
    description: "Calcula cuántas horas/mes podrías ahorrar automatizando tus procesos con IA.",
  },
]

export default function ContactoPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{'Diagnóstico'}</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            Solicita tu diagnóstico gratuito de IA
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Analizamos tu empresa y te mostramos qué procesos puedes automatizar con Inteligencia Artificial.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Qué incluye el diagnóstico */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-5">
                Qué incluye el diagnóstico
              </h3>
              <ul className="flex flex-col gap-4">
                {trustPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
                      <point.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{point.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Información de contacto */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Información de Contacto
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Avinguda Diagonal 449, 4º<br />Barcelona, España
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-4 w-4" />
                  </div>
                  <Link href="tel:+34930422796" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    +34 930 42 27 96
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Link href="mailto:hola@softwareopium.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    hola@softwareopium.com
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">Lun - Vie: 10:00 - 19:00</p>
                </li>
              </ul>

              {/* Redes sociales */}
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Síguenos
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.instagram.com/ecosistia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    title="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/ecosistia-ia-para-empresas/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 border-t pt-20">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Empieza a transformar tu empresa con IA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Tu diagnóstico gratuito nos ayudará a entender tus necesidades y crear un plan personalizado para automatizar tu negocio.
          </p>
        </div>
      </div>
    </section>
  )
}
