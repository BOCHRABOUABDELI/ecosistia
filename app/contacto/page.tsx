import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Clock, Shield, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | Consulta gratuita para tu proyecto con IA",
  description:
    "Solicita una consulta gratuita para tu proyecto de inteligencia artificial. Te respondemos en menos de 24 horas con una propuesta personalizada. Desarrollo de apps con IA por 899 €.",
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

          <div className="flex flex-col gap-6">
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
          </div>
        </div>
      </div>
    </section>
  )
}
