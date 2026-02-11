import Link from "next/link"

const footerLinks = {
  Producto: [
    { href: "/aplicaciones", label: "Aplicaciones" },
    { href: "/integraciones", label: "Integraciones" },
    { href: "/como-funciona", label: "Como funciona" },
    { href: "/precios", label: "Precios" },
  ],
  Empresa: [
    { href: "/contacto", label: "Contacto" },
    { href: "/contacto", label: "Empezar mi proyecto" },
  ],
  Legal: [
    { href: "#", label: "Politica de privacidad" },
    { href: "#", label: "Terminos de uso" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading text-xl font-bold text-background"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-black">E</span>
              Ecosistia
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-background/40">
              Creamos aplicaciones con inteligencia artificial a medida para empresas que quieren automatizar
              procesos, integrar sistemas y crecer con tecnologia de primer nivel.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-background/30">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/40 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-background/10 pt-6">
          <p className="text-center text-xs text-background/25">
            {"\u00A9"} {new Date().getFullYear()} Ecosistia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
