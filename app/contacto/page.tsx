import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Clock, Shield, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuentanos tu idea y te ayudamos a convertirla en una aplicacion con IA. Consulta gratuita y respuesta en menos de 24 horas.",
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
    icon: MessageSquare,
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
            Empezar mi proyecto
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Cuentanos que problema quieres resolver. Te respondemos en menos de 24 horas con una propuesta clara y sin compromiso.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-background p-6 lg:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6" >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {"Prefieres hablar con el asistente?"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Nuestro chatbot de IA te ayuda a definir los requisitos de tu
                proyecto de forma guiada. Haz clic en el boton flotante de la
                esquina inferior derecha.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {trustPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
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
