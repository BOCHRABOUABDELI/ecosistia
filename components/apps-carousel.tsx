"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { apps } from "@/lib/data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AppScreenshot } from "@/components/app-screenshot"

const INTERVAL = 4000
const VISIBLE = 3

export function AppsCarousel() {
  const total = apps.length
  // Duplicate items: [clone last VISIBLE] + [originals] + [clone first VISIBLE]
  const extendedApps = [
    ...apps.slice(-VISIBLE),
    ...apps,
    ...apps.slice(0, VISIBLE),
  ]
  // Start at the first "real" item (offset by VISIBLE clones)
  const [index, setIndex] = useState(VISIBLE)
  const [transitioning, setTransitioning] = useState(true)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const jumpWithoutTransition = useCallback((newIndex: number) => {
    setTransitioning(false)
    setIndex(newIndex)
    // Re-enable transition after the browser paints the jump
    timeoutRef.current = setTimeout(() => {
      setTransitioning(true)
    }, 30)
  }, [])

  const next = useCallback(() => {
    setTransitioning(true)
    setIndex((prev) => prev + 1)
  }, [])

  const prev = useCallback(() => {
    setTransitioning(true)
    setIndex((prev) => prev - 1)
  }, [])

  // After a transition ends, check if we need to silently loop
  const handleTransitionEnd = useCallback(() => {
    if (index >= total + VISIBLE) {
      // Went past the end clones -> jump to start
      jumpWithoutTransition(VISIBLE)
    } else if (index < VISIBLE) {
      // Went before the start clones -> jump to end
      jumpWithoutTransition(total + VISIBLE - 1)
    }
  }, [index, total, jumpWithoutTransition])

  // Auto-play
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // The "real" index for dot indicators (0-based within original apps)
  const realIndex = ((index - VISIBLE) % total + total) % total

  const goTo = (i: number) => {
    setTransitioning(true)
    setIndex(i + VISIBLE)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "flex",
            transitioning && "transition-transform duration-500 ease-in-out",
          )}
          style={{
            transform: `translateX(-${index * (100 / VISIBLE)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedApps.map((app, i) => (
            <Link
              key={`${app.slug}-${i}`}
              href={`/aplicaciones/${app.slug}`}
              className="w-1/3 shrink-0 px-2"
            >
              <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-accent/20">
                <div className="relative">
                  <AppScreenshot
                    src={app.image}
                    alt={app.name}
                    variant="carousel"
                  />
                  <div className="absolute top-2 left-2 flex gap-1.5 z-10">
                    <span className="rounded-full bg-success px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-success-foreground shadow">
                      Demo
                    </span>
                    <span className="rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-medium text-foreground backdrop-blur-sm shadow">
                      {app.sector}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-heading text-sm font-semibold text-foreground leading-tight truncate">
                    {app.name}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {app.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {apps.map((app, i) => (
          <button
            key={app.slug}
            type="button"
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              i === realIndex
                ? "w-6 bg-primary"
                : "w-2 bg-border hover:bg-muted-foreground",
            )}
            aria-label={`Ir a ${app.name}`}
          />
        ))}
      </div>
    </div>
  )
}
