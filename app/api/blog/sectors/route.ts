import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getSectors, saveSector } from "@/lib/blog-data"
import type { BlogSector } from "@/lib/blog-types"
import crypto from "crypto"

function isAdmin(cookieStore: Awaited<ReturnType<typeof cookies>>): boolean {
  const session = cookieStore.get("admin-session")
  if (!session?.value) return false
  const expected = crypto
    .createHash("sha256")
    .update(process.env.ADMIN_PASSWORD || "ecosistia-admin-2024")
    .digest("hex")
  return session.value === expected
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
    id: crypto.randomUUID(),
    name: body.name || "",
    slug: body.slug || "",
    subsectors: body.subsectors || [],
  }

  saveSector(sector)
  return NextResponse.json(sector, { status: 201 })
}
