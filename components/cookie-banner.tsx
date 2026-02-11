"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  function reject() {
    localStorage.setItem("cookie_consent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-foreground/5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground">
              Este sitio web utiliza cookies
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Usamos cookies propias y de terceros para mejorar tu experiencia de navegacion
              y analizar el uso del sitio. Puedes aceptar todas, rechazar las no esenciales
              o consultar nuestra{" "}
              <Link href="/politica-cookies" className="text-accent font-medium hover:underline">
                Politica de Cookies
              </Link>{" "}
              para mas informacion.
            </p>
          </div>
          <button
            onClick={reject}
            className="shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar banner de cookies"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={reject}
            className="text-sm"
          >
            Solo esenciales
          </Button>
          <Button
            variant="success"
            size="sm"
            onClick={accept}
            className="text-sm"
          >
            Aceptar todas
          </Button>
        </div>
      </div>
    </div>
  )
}
