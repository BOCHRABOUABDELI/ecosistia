"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { BlogSector } from "@/lib/blog-types"

interface PostFiltersProps {
  sectors: BlogSector[]
  activeSector: string
  activeSubsector: string
  onSectorChange: (id: string) => void
  onSubsectorChange: (id: string) => void
}

export function PostFilters({
  sectors,
  activeSector,
  activeSubsector,
  onSectorChange,
  onSubsectorChange,
}: PostFiltersProps) {
  const selectedSector = sectors.find((s) => s.id === activeSector)

  return (
    <div className="flex flex-col gap-3">
      {/* Sector pills */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeSector === "" ? "default" : "outline"}
          size="sm"
          className="rounded-full text-xs"
          onClick={() => { onSectorChange(""); onSubsectorChange("") }}
        >
          Todos
        </Button>
        {sectors.map((sector) => (
          <Button
            key={sector.id}
            variant={activeSector === sector.id ? "default" : "outline"}
            size="sm"
            className="rounded-full text-xs"
            onClick={() => { onSectorChange(sector.id); onSubsectorChange("") }}
          >
            {sector.name}
          </Button>
        ))}
      </div>

      {/* Subsector pills */}
      {selectedSector && selectedSector.subsectors.length > 0 && (
        <div className="flex flex-wrap gap-2 pl-2">
          <Button
            variant={activeSubsector === "" ? "secondary" : "ghost"}
            size="sm"
            className="rounded-full text-xs h-7"
            onClick={() => onSubsectorChange("")}
          >
            Todo {selectedSector.name}
          </Button>
          {selectedSector.subsectors.map((sub) => (
            <Button
              key={sub.id}
              variant={activeSubsector === sub.id ? "secondary" : "ghost"}
              size="sm"
              className="rounded-full text-xs h-7"
              onClick={() => onSubsectorChange(sub.id)}
            >
              {sub.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
