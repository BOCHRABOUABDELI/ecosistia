"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, X, Loader2, FolderTree } from "lucide-react"
import type { BlogSector, BlogSubsector } from "@/lib/blog-types"
import crypto from "crypto"

function genId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default function SectorsPage() {
  const [sectors, setSectors] = useState<BlogSector[]>([])
  const [loading, setLoading] = useState(true)
  const [newSectorName, setNewSectorName] = useState("")
  const [newSubsector, setNewSubsector] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/blog/sectors")
      .then((r) => r.json())
      .then((data) => { setSectors(data); setLoading(false) })
  }, [])

  async function addSector() {
    if (!newSectorName.trim()) return
    setSaving(true)
    const res = await fetch("/api/blog/sectors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newSectorName.trim(),
        slug: slugify(newSectorName.trim()),
        subsectors: [],
      }),
    })
    const sector = await res.json()
    setSectors((prev) => [...prev, sector])
    setNewSectorName("")
    setSaving(false)
  }

  async function deleteSector(id: string) {
    if (!confirm("Eliminar este sector y todos sus subsectores?")) return
    await fetch(`/api/blog/sectors/${id}`, { method: "DELETE" })
    setSectors((prev) => prev.filter((s) => s.id !== id))
  }

  async function addSubsector(sectorId: string) {
    const name = newSubsector[sectorId]?.trim()
    if (!name) return
    const sector = sectors.find((s) => s.id === sectorId)
    if (!sector) return

    const sub: BlogSubsector = { id: genId(), name, slug: slugify(name) }
    const updated = { ...sector, subsectors: [...sector.subsectors, sub] }

    await fetch(`/api/blog/sectors/${sectorId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
    setSectors((prev) => prev.map((s) => (s.id === sectorId ? updated : s)))
    setNewSubsector((prev) => ({ ...prev, [sectorId]: "" }))
  }

  async function removeSubsector(sectorId: string, subId: string) {
    const sector = sectors.find((s) => s.id === sectorId)
    if (!sector) return

    const updated = { ...sector, subsectors: sector.subsectors.filter((sub) => sub.id !== subId) }
    await fetch(`/api/blog/sectors/${sectorId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
    setSectors((prev) => prev.map((s) => (s.id === sectorId ? updated : s)))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Sectores</h1>
        <p className="text-sm text-muted-foreground">Gestiona los sectores y subsectores del blog</p>
      </div>

      {/* Add sector */}
      <Card>
        <CardContent className="flex items-end gap-3 pt-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Nuevo sector</label>
            <Input
              value={newSectorName}
              onChange={(e) => setNewSectorName(e.target.value)}
              placeholder="Nombre del sector"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSector())}
            />
          </div>
          <Button onClick={addSector} disabled={saving || !newSectorName.trim()}>
            <Plus className="mr-2 h-4 w-4" />
            Anadir
          </Button>
        </CardContent>
      </Card>

      {/* Sector list */}
      {sectors.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FolderTree className="h-10 w-10 text-muted-foreground/50" />
            <p className="mt-3 text-muted-foreground">No hay sectores todavia.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {sectors.map((sector) => (
            <Card key={sector.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div>
                  <CardTitle className="text-base">{sector.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">/{sector.slug}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={() => deleteSector(sector.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {/* Subsectors */}
                <div className="flex flex-wrap gap-2">
                  {sector.subsectors.map((sub) => (
                    <Badge key={sub.id} variant="secondary" className="gap-1 pr-1">
                      {sub.name}
                      <button
                        type="button"
                        onClick={() => removeSubsector(sector.id, sub.id)}
                        className="ml-1 rounded-full p-0.5 hover:bg-destructive/20 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                {/* Add subsector */}
                <div className="flex items-center gap-2">
                  <Input
                    className="h-8 text-sm"
                    value={newSubsector[sector.id] || ""}
                    onChange={(e) => setNewSubsector((prev) => ({ ...prev, [sector.id]: e.target.value }))}
                    placeholder="Nuevo subsector"
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSubsector(sector.id))}
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 shrink-0"
                    onClick={() => addSubsector(sector.id)}
                    disabled={!newSubsector[sector.id]?.trim()}
                  >
                    <Plus className="mr-1 h-3 w-3" />
                    Anadir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
