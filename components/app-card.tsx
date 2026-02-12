"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import type { AppItem } from "@/lib/data"
import { AppIcon } from "@/components/app-icon"
import { AppScreenshot } from "@/components/app-screenshot"

const MAX_VISIBLE_TAGS = 3

export function AppCard({ app }: { app: AppItem }) {
  const visibleTags = app.tags.slice(0, MAX_VISIBLE_TAGS)
  const extraCount = app.tags.length - MAX_VISIBLE_TAGS

  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-accent/20 overflow-hidden">
      {/* Image header */}
      <div className="relative">
        <AppScreenshot
          src={app.image}
          alt={app.name}
          variant="card"
          slug={app.slug}
        />
        <div className="absolute top-10 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge className="bg-success text-success-foreground hover:bg-success/90 border-0 text-[10px] font-bold uppercase tracking-wide shadow-sm">
            Demo Funcional
          </Badge>
          <Badge
            variant="secondary"
            className="bg-background/90 text-foreground backdrop-blur-sm border-0 text-[10px] font-medium shadow-sm"
          >
            {app.sector}
          </Badge>
        </div>
        <AppIcon name={app.icon} color={app.iconColor} className="absolute bottom-3 left-3 z-10" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
          {app.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{app.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {app.description}
        </p>

        <div className="mt-4">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
            {"Caracteristicas clave"}
          </p>
          <ul className="mt-1.5 flex flex-col gap-1">
            {app.features.slice(0, 2).map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="px-1 py-0.5 text-[10px] text-muted-foreground">
              +{extraCount} mas
            </span>
          )}
        </div>

        <div className="mt-5 flex gap-3">
          {app.demoUrl && (
            <a
              href={app.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center rounded-lg bg-success px-3 py-2 text-sm font-medium text-success-foreground transition-colors hover:bg-[#2563EB]"
            >
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              Ver Demo
            </a>
          )}
          <Link
            href={`/aplicaciones/${app.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {"Mas Info"}
          </Link>
        </div>
      </div>
    </div>
  )
}
