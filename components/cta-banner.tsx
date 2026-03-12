import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaBannerProps {
  title?: string
  description?: string
}

export function CtaBanner({
  title = "Descubre cómo la IA puede transformar tu empresa",
  description = "Solicita un diagnóstico gratuito y te mostramos qué procesos puedes automatizar. Respuesta en menos de 24 horas.",
}: CtaBannerProps) {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/60 text-lg leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
  )
}
