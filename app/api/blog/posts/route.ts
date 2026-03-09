import { NextResponse } from "next/server"
import { getPosts, getPublishedPosts, savePost } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const admin = searchParams.get("admin") === "true"

  if (admin) {
    return NextResponse.json(getPosts())
  }

  return NextResponse.json(getPublishedPosts())
}

export async function POST(request: Request) {
  try {
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
      readingTime: body.readingTime || 5,
      imageUrl: body.imageUrl || "",
      published: body.published || false,
      seoTitle: body.seoTitle || "",
      seoDescription: body.seoDescription || "",
      createdAt: now,
      updatedAt: now,
    }

    savePost(post)
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error("Error creating post:", error)
    return NextResponse.json({ error: "Error creating post" }, { status: 500 })
  }
}
