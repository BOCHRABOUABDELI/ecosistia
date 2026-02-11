"use client"

import { cn } from "@/lib/utils"
import { sectors, type Sector } from "@/lib/data"
import { Search } from "lucide-react"

export function AppFilters({
  activeSector,
  onSectorChange,
  search,
  onSearchChange,
}: {
  activeSector: Sector | "all"
  onSectorChange: (value: Sector | "all") => void
  search: string
  onSearchChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search icon button */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground">
          <Search className="h-4 w-4" />
        </div>

        {/* Sector pills */}
        <button
          type="button"
          role="tab"
          aria-selected={activeSector === "all"}
          onClick={() => onSectorChange("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all",
            activeSector === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"
          )}
        >
          Todos los Sectores
        </button>
        {sectors.map((sector) => (
          <button
            key={sector}
            type="button"
            role="tab"
            aria-selected={activeSector === sector}
            onClick={() => onSectorChange(sector)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              activeSector === sector
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"
            )}
          >
            {sector}
          </button>
        ))}
      </div>

      {/* Search input (expanded when clicked) */}
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Buscar aplicaciones..."
        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary sm:max-w-xs"
      />
    </div>
  )
}
