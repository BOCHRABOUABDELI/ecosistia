import { NextResponse } from "next/server"
import { getPostById, savePost, deletePosts } from "@/lib/blog-data"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getPostById(id)
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }
  return NextResponse.json(post)
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await request.json()
    const existingPost = getPostById(id)
    
    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    const updated = {
      ...existingPost,
      ...body,
      updatedAt: new Date().toISOString(),
    }

    savePost(updated)
    return NextResponse.json(updated)
  } catch (error) {
    console.error("Error updating post:", error)
    return NextResponse.json({ error: "Error updating post" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    deletePosts(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting post:", error)
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 })
  }
}
