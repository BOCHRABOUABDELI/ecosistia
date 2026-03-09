import { NextResponse } from "next/server"
import { getSectorById, saveSector, deleteSector } from "@/lib/blog-data"

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const existing = getSectorById(id)
  if (!existing) return NextResponse.json({ error: "No encontrado" }, { status: 404 })
  const body = await request.json()
  const updated = { ...existing, ...body, id: existing.id }
  saveSector(updated)
  return NextResponse.json(updated)
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const deleted = deleteSector(id)
  if (!deleted) return NextResponse.json({ error: "No encontrado" }, { status: 404 })
  return NextResponse.json({ success: true })
}
