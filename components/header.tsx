"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/aplicaciones", label: "Aplicaciones" },
  { href: "/integraciones", label: "Integraciones" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-sm shadow-foreground/[0.03] py-2"
          : "bg-background/80 backdrop-blur-xl py-3"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-foreground"
        >
          <Logo />
          Ecosistia
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm transition-colors",
                pathname === link.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="success" size="sm" className="px-5">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-lg p-2 text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 pb-6 lg:hidden shadow-lg">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Navegacion movil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm transition-colors",
                  pathname === link.href
                    ? "text-foreground font-semibold bg-muted"
                    : "text-muted-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <Button asChild variant="success" className="w-full">
              <Link href="/contacto" onClick={() => setMobileOpen(false)}>
                Contactar
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
