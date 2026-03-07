import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSectors, saveSector } from "@/lib/blog-data"
import type { BlogSector } from "@/lib/blog-types"

function isAdmin(cookieStore: Awaited<ReturnType<typeof cookies>>): boolean {
  const session = cookieStore.get("admin-session")
  return session?.value === "authenticated"
}

export async function GET() {
  return NextResponse.json(getSectors())
}

export async function POST(request: Request) {
  const cookieStore = await cookies()
  if (!isAdmin(cookieStore)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const body = await request.json()

  const sector: BlogSector = {
    id: Math.random().toString(36).substring(2) + Date.now().toString(36),
    name: body.name || "",
    slug: body.slug || "",
    subsectors: body.subsectors || [],
  }

  saveSector(sector)
  return NextResponse.json(sector, { status: 201 })
}
