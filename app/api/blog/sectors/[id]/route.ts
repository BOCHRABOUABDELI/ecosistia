import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSectorById, saveSector, deleteSector } from "@/lib/blog-data"

function isAdmin(cookieStore: Awaited<ReturnType<typeof cookies>>): boolean {
  const session = cookieStore.get("admin-session")
  return session?.value === "authenticated"
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const cookieStore = await cookies()
  if (!isAdmin(cookieStore)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

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
  const cookieStore = await cookies()
  if (!isAdmin(cookieStore)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const deleted = deleteSector(id)
  if (!deleted) return NextResponse.json({ error: "No encontrado" }, { status: 404 })
  return NextResponse.json({ success: true })
}
