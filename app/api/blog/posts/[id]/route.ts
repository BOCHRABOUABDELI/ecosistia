import { NextResponse } from "next/server"
import { getPostById, savePost, deletePosts } from "@/lib/blog-data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const post = getPostById(params.id)
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }
  return NextResponse.json(post)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const existingPost = getPostById(params.id)
    
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

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    deletePosts(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting post:", error)
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 })
  }
}
