import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Integraciones",
  description:
    "Explora todas las integraciones disponibles para tu aplicacion con IA. Conectamos con WhatsApp, Gmail, Slack, Salesforce, Shopify y muchas mas.",
}

export default function IntegracionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
