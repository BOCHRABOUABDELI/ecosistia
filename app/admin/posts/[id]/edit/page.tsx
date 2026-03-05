"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { PostForm } from "@/components/blog/post-form"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import type { BlogPost } from "@/lib/blog-types"

export default function EditPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/blog/posts/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!post) {
    return <p className="text-muted-foreground">Post no encontrado.</p>
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="font-heading text-2xl font-bold text-foreground">Editar entrada</h1>
      </div>
      <PostForm post={post} isEdit />
    </div>
  )
}
