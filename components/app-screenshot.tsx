"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { X, Maximize2, Monitor } from "lucide-react"

interface AppScreenshotProps {
  src?: string | null
  alt: string
  variant?: "card" | "carousel" | "detail"
  slug?: string
  className?: string
}

export function AppScreenshot({
  src,
  alt,
  variant = "card",
  slug,
  className,
}: AppScreenshotProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  const showPlaceholder = !src || imgError

  if (variant === "carousel") {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden bg-muted/50", className)}>
        {showPlaceholder ? (
          <Placeholder />
        ) : (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain p-2"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden rounded-t-2xl bg-muted/30", className)}>
        <div className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />
          <span className="ml-2 text-[10px] text-muted-foreground/50 font-mono truncate">
            {slug ? `${slug}.ecosistia.com` : "app.ecosistia.com"}
          </span>
        </div>
        {showPlaceholder ? (
          <Placeholder />
        ) : (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    )
  }

  // variant === "detail"
  return (
    <>
      <div className={cn("relative", className)}>
        <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl shadow-black/20 bg-muted/10">
          <div className="flex items-center gap-1.5 bg-black/30 px-4 py-2.5 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 text-[11px] text-primary-foreground/40 font-mono">
              {slug ? `${slug}.ecosistia.com` : "app.ecosistia.com"}
            </span>
          </div>
          <div className="relative aspect-video w-full bg-muted/5">
            {showPlaceholder ? (
              <PlaceholderDetail />
            ) : (
              <>
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full object-contain p-3"
                  loading="eager"
                  onError={() => setImgError(true)}
                />
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-black/70"
                  aria-label="Ver en grande"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Ver en grande
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && src && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${alt}`}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

function Placeholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6">
      <Monitor className="h-8 w-8 text-muted-foreground/30" />
      <p className="text-xs font-medium text-muted-foreground/50 text-center">
        Vista previa disponible pronto
      </p>
    </div>
  )
}

function PlaceholderDetail() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-10">
      <Monitor className="h-12 w-12 text-primary-foreground/20" />
      <p className="text-sm font-medium text-primary-foreground/30 text-center">
        Vista previa disponible pronto
      </p>
    </div>
  )
}
