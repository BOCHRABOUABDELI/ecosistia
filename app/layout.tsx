import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "Ecosistia - Desarrollo de aplicaciones con inteligencia artificial a medida | 899 EUR",
    template: "%s | Ecosistia - Software con IA a medida",
  },
  description:
    "Ecosistia desarrolla aplicaciones con inteligencia artificial a medida para empresas por 899 EUR. Automatizacion de procesos, lectura inteligente de documentos, paneles de datos con IA y mas. Entrega en 2-12 semanas. Consulta gratuita.",
  keywords: [
    "desarrollo aplicaciones inteligencia artificial",
    "software con IA a medida",
    "automatizacion de procesos con IA",
    "aplicaciones IA para empresas",
    "software IA empresas",
    "desarrollo software IA Espana",
    "inteligencia artificial para pymes",
    "app con IA precio",
    "Ecosistia",
  ],
  authors: [{ name: "Ecosistia" }],
  creator: "Ecosistia",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Ecosistia",
    title: "Ecosistia - Aplicaciones con inteligencia artificial a medida por 899 EUR",
    description:
      "Desarrollamos software con IA que automatiza procesos, conecta sistemas y elimina tareas manuales. Precio cerrado de 899 EUR. Entrega en 2-6 semanas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosistia - Aplicaciones con IA a medida | 899 EUR",
    description:
      "Software con inteligencia artificial para empresas. Automatiza procesos, lee documentos y analiza datos con IA. Desde 899 EUR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#1E1B4B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
