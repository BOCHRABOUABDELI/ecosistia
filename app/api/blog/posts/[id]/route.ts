import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getPostById, savePost, deletePost } from "@/lib/blog-data"
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

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const cookieStore = await cookies()
  if (!isAdmin(cookieStore)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const post = getPostById(id)
  if (!post) return NextResponse.json({ error: "No encontrado" }, { status: 404 })
  return NextResponse.json(post)
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

  const existing = getPostById(id)
  if (!existing) return NextResponse.json({ error: "No encontrado" }, { status: 404 })

  const body = await request.json()
  const updated = {
    ...existing,
    ...body,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: new Date().toISOString(),
  }

  savePost(updated)
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

  const deleted = deletePost(id)
  if (!deleted) return NextResponse.json({ error: "No encontrado" }, { status: 404 })
  return NextResponse.json({ success: true })
}
