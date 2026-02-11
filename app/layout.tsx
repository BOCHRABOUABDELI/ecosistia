import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotFab } from "@/components/chatbot-fab"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "ValerIA - Desarrollo de aplicaciones con inteligencia artificial a medida | 899 EUR",
    template: "%s | ValerIA - Software con IA a medida",
  },
  description:
    "ValerIA desarrolla aplicaciones con inteligencia artificial a medida para empresas por 899 EUR. Automatizacion de procesos, chatbots, lectura de documentos con IA y mas. Entrega en 2-6 semanas. Consulta gratuita.",
  keywords: [
    "desarrollo aplicaciones inteligencia artificial",
    "software con IA a medida",
    "automatizacion de procesos con IA",
    "aplicaciones IA para empresas",
    "chatbot IA empresas",
    "desarrollo software IA Espana",
    "inteligencia artificial para pymes",
    "app con IA precio",
    "ValerIA",
    "Ecosistia",
  ],
  authors: [{ name: "ValerIA del grupo Ecosistia" }],
  creator: "ValerIA del grupo Ecosistia",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "ValerIA",
    title: "ValerIA - Aplicaciones con inteligencia artificial a medida por 899 EUR",
    description:
      "Desarrollamos software con IA que automatiza procesos, conecta sistemas y elimina tareas manuales. Precio cerrado de 899 EUR. Entrega en 2-6 semanas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValerIA - Aplicaciones con IA a medida | 899 EUR",
    description:
      "Software con inteligencia artificial para empresas. Automatiza procesos, crea chatbots y lee documentos con IA. Desde 899 EUR.",
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
        <ChatbotFab />
      </body>
    </html>
  )
}
