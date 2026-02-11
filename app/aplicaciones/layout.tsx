import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aplicaciones",
  description:
    "Descubre nuestro catalogo de aplicaciones con IA: chatbots, automatizacion, lectores de documentos, paneles inteligentes y mas.",
}

export default function AplicacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
