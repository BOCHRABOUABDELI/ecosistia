import { NextResponse } from "next/server"
import { getSectors, saveSector } from "@/lib/blog-data"
import type { BlogSector } from "@/lib/blog-types"

export async function GET() {
  return NextResponse.json(getSectors())
}

export async function POST(request: Request) {
  const body = await request.json()
  const sector: BlogSector = {
    id: Math.random().toString(36).substring(2) + Date.now().toString(36),
    name: body.name || "",
    slug: body.slug || (body.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    subsectors: body.subsectors || [],
  }
  saveSector(sector)
  return NextResponse.json(sector, { status: 201 })
}
