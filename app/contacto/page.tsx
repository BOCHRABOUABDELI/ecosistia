import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Clock, Shield, Sparkles, MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contacto | Consulta gratuita para tu proyecto con IA",
  description:
    "Solicita una consulta gratuita para tu proyecto de inteligencia artificial. Te respondemos en menos de 24 horas con una propuesta personalizada. Desarrollo de apps con IA desde 899 €.",
}

const trustPoints = [
  {
    icon: Clock,
    title: "Respuesta rapida",
    description: "Te respondemos en menos de 24 horas con una propuesta inicial personalizada.",
  },
  {
    icon: Shield,
    title: "Sin compromiso",
    description: "La consulta es gratuita. Solo pagas si decides avanzar con el proyecto.",
  },
  {
    icon: Sparkles,
    title: "Te ayudamos a definir",
    description: "No necesitas tener todo claro. Te guiamos para concretar la solucion ideal.",
  },
]

export default function ContactoPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{'Contacto'}</p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
            Solicita tu consulta gratuita para desarrollo con IA
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Cuentanos que proceso quieres automatizar o mejorar con inteligencia artificial.
            Te respondemos en menos de 24 horas con una propuesta personalizada, clara y sin compromiso.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Trust points */}
            <div className="flex flex-col gap-5">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-foreground">
                      {point.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
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
    </section>
  )
}
