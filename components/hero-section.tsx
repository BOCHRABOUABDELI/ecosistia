"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  "Sin coste inicial",
  "Prototipo en 5 dias",
  "Codigo 100% tuyo",
]

const rotatingWords = [
  "automatizar procesos",
  "reducir costes",
  "escalar operaciones",
  "eliminar tareas manuales",
]

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isWordChanging, setIsWordChanging] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWordChanging(true)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsWordChanging(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pb-20 pt-20 lg:pb-32 lg:pt-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(263_83%_58%_/_0.08),transparent)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-success/[0.03] blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy */}
          <div
            className={cn(
              "transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Inteligencia artificial aplicada a empresa
            </div>

            {/* H1 */}
            <h1 className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-balance">
              Aplicaciones con IA a medida para{" "}
              <span className="relative">
                <span
                  className={cn(
                    "text-accent transition-all duration-300",
                    isWordChanging
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  )}
                >
                  {rotatingWords[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Desarrollamos software con IA que transforma tu operativa:
              automatiza lo repetitivo, conecta tus sistemas y libera a tu
              equipo para crecer. Resultados medibles desde la primera semana.
            </p>

            {/* Price - elegant integration */}
            <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl border border-border bg-card/80 px-6 py-4 shadow-sm backdrop-blur-sm">
              <span className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                899{"\u00A0\u20AC"}
              </span>
              <span className="text-sm text-muted-foreground font-medium leading-tight">
                por proyecto
                <br />
                <span className="text-xs">precio cerrado, sin sorpresas</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                variant="success"
                size="lg"
                className="group relative text-base px-8 shadow-lg shadow-success/25 transition-all duration-300 hover:shadow-xl hover:shadow-success/30 hover:scale-[1.02]"
              >
                <Link href="/contacto">
                  Hablemos de tu proyecto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group text-base px-8 transition-all duration-300 hover:border-accent/30"
              >
                <Link href="/aplicaciones">
                  Ver proyectos reales
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className={cn(
              "relative hidden lg:block transition-all duration-700 ease-out delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-success/10 blur-2xl" />

            {/* Dashboard mockup */}
            <div className="relative rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/10 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 border-b border-border/50 bg-muted/50 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-success/60" />
                <div className="ml-3 h-4 w-48 rounded-md bg-border/50" />
              </div>
              <Image
                src="/hero-dashboard.jpg"
                alt="Panel de control inteligente con IA - Ecosistia"
                width={700}
                height={480}
                className="w-full"
                priority
              />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -left-8 top-1/4 animate-float rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Proceso automatizado
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    -70% tiempo operativo
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -right-6 bottom-1/4 animate-float-delayed rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    IA integrada
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Prediccion y analisis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
