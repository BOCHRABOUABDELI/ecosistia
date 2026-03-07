import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getPosts, getPublishedPosts, savePost } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-types"

function isAdmin(cookieStore: Awaited<ReturnType<typeof cookies>>): boolean {
  const session = cookieStore.get("admin-session")
  return session?.value === "authenticated"
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const admin = searchParams.get("admin") === "true"
  const cookieStore = await cookies()

  if (admin && isAdmin(cookieStore)) {
    return NextResponse.json(getPosts())
  }

  return NextResponse.json(getPublishedPosts())
}

export async function POST(request: Request) {
  const cookieStore = await cookies()
  if (!isAdmin(cookieStore)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const body = await request.json()
  const now = new Date().toISOString()

  const post: BlogPost = {
    id: Math.random().toString(36).substring(2) + Date.now().toString(36),
    title: body.title || "",
    slug: body.slug || "",
    excerpt: body.excerpt || "",
    content: body.content || "",
    sectorId: body.sectorId || "",
    subsectorId: body.subsectorId || "",
    author: body.author || "Equipo Ecosistia",
    readTime: body.readTime || "5 min",
    imageUrl: body.imageUrl || "",
    published: body.published || false,
    seoTitle: body.seoTitle || "",
    seoDescription: body.seoDescription || "",
    keywords: body.keywords || "",
    createdAt: now,
    updatedAt: now,
  }

  savePost(post)
  return NextResponse.json(post, { status: 201 })
}
