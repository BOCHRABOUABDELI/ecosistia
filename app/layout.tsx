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
    default: "Ecosistia - Aplicaciones con IA a medida para tu empresa",
    template: "%s | Ecosistia",
  },
  description:
    "Creamos aplicaciones con IA a medida para tu empresa por 899 EUR. Automatiza procesos, integra tus sistemas y gana eficiencia.",
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
