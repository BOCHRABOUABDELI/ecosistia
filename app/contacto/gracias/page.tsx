import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Mensaje enviado | Ecosistia",
  description:
    "Tu consulta ha sido recibida correctamente. Te contactamos en menos de 24 horas para hablar de tu proyecto con inteligencia artificial.",
  robots: { index: false, follow: false },
}

const nextSteps = [
  {
    icon: Mail,
    title: "Revisa tu email",
    description:
      "Te hemos enviado un email de confirmacion con los detalles de tu consulta.",
  },
  {
    icon: Phone,
    title: "Te llamamos en menos de 24h",
    description:
      "Un especialista en IA te contactara para entender tu caso y resolver todas tus dudas.",
  },
  {
    icon: Clock,
    title: "Propuesta personalizada",
    description:
      "Recibiras una propuesta clara con alcance, plazos y precio adaptado a tu proyecto.",
  },
]

export default function GraciasPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Success icon + heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 ring-8 ring-success/5">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>

          <h1 className="mt-8 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
            Tu mensaje ha sido enviado correctamente
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Gracias por confiar en{" "}
            <strong className="text-foreground">Ecosistia</strong>. Hemos
            recibido tu consulta y un especialista en{" "}
            <strong className="text-foreground">
              inteligencia artificial
            </strong>{" "}
            se pondra en contacto contigo lo antes posible.
          </p>
        </div>

        {/* Next steps */}
        <div className="mt-14">
          <h2 className="text-center font-heading text-lg font-semibold text-foreground">
            Proximos pasos
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="success" className="shadow-sm shadow-success/20">
            <Link href="/aplicaciones">
              Ver nuestras aplicaciones con IA
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>


      </div>
    </section>
  )
}
