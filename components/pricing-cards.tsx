import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Hasta 10 usuarios",
    price: "150",
    perUser: "15",
    features: [
      "Aplicacion con IA a medida",
      "Soporte por email",
      "Actualizaciones mensuales",
      "Hosting incluido",
    ],
    popular: false,
  },
  {
    name: "Hasta 20 usuarios",
    price: "250",
    perUser: "12,5",
    features: [
      "Todo del plan anterior",
      "Soporte prioritario",
      "Integraciones avanzadas",
      "Metricas y reportes",
    ],
    popular: true,
  },
  {
    name: "Hasta 30 usuarios",
    price: "350",
    perUser: "11,7",
    features: [
      "Todo del plan anterior",
      "Soporte dedicado",
      "SLA garantizado",
      "Formacion del equipo",
    ],
    popular: false,
  },
  {
    name: "Mas usuarios",
    price: "Personalizado",
    perUser: null,
    features: [
      "Todo del plan anterior",
      "Infraestructura dedicada",
      "Desarrollo continuo",
      "Account manager",
    ],
    popular: false,
  },
]

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-5",
        compact
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "relative flex flex-col rounded-xl border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
            plan.popular
              ? "border-primary ring-1 ring-primary/20"
              : "border-border"
          )}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                Popular
              </span>
            </div>
          )}
          <h3 className="font-heading text-base font-semibold text-foreground">
            {plan.name}
          </h3>
          <div className="mt-4">
            {plan.perUser ? (
              <>
                <span className="font-heading text-4xl font-bold text-foreground">
                  {plan.price}
                  {"\u20AC"}
                </span>
                <span className="text-muted-foreground">/mes</span>
                <p className="mt-1 text-sm text-muted-foreground">
                  {"~"}{plan.perUser}
                  {"\u20AC/usuario/mes"}
                </p>
              </>
            ) : (
              <span className="font-heading text-2xl font-bold text-foreground">
                Plan empresa
              </span>
            )}
          </div>
          <ul className="mt-6 flex flex-col gap-2.5 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={cn(
              "mt-6 w-full",
              plan.popular
                ? "shadow-sm shadow-primary/20"
                : "bg-foreground text-background hover:bg-foreground/90"
            )}
          >
            <Link href="/contacto">
              {plan.perUser ? "Empezar" : "Contactar"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
