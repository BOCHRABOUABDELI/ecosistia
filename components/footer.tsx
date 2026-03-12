import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook } from "lucide-react"

const footerLinks = {
  Producto: [
    { href: "/aplicaciones", label: "Aplicaciones" },
    { href: "/ejemplos", label: "Ejemplos" },
    { href: "/integraciones", label: "Integraciones" },
    { href: "/como-funciona", label: "Como funciona" },
    { href: "/precios", label: "Precios" },
  ],
  Empresa: [
    { href: "/contacto", label: "Contacto" },
    { href: "/contacto", label: "Empezar mi proyecto" },
  ],
  Legal: [
    { href: "/politica-privacidad", label: "Politica de privacidad" },
    { href: "/politica-cookies", label: "Politica de cookies" },
  ],
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Avinguda Diagonal 449, 4º Barcelona España",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+34 930 42 27 96",
    href: "tel:+34930422796",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hola@softwareopium.com",
    href: "mailto:hola@softwareopium.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 10:00 - 19:00",
  },
]

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/ecosistia",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ecosistia",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/ecosistia-ia-para-empresas/?viewAsMember=true",
    label: "LinkedIn",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + Description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary-foreground"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-ecosistia.png"
                alt="Ecosistia - AI Software & Solutions"
                width={180}
                height={48}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/50">
              Creamos aplicaciones con inteligencia artificial a medida para empresas que quieren automatizar
              procesos, integrar sistemas y crecer con tecnologia de primer nivel.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
                {title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/50 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-2">
                    <Icon className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                    <div className="text-sm">
                      <p className="text-primary-foreground/40 text-xs">{item.label}</p>
                      <p className="text-primary-foreground/70">{item.value}</p>
                    </div>
                  </div>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} className="transition-colors hover:text-accent">
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          {/* Social Links */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-primary-foreground/30">
              {"\u00A9"} {new Date().getFullYear()} Ecosistia. Todos los derechos reservados.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/50 transition-all hover:bg-accent hover:text-accent-foreground"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
