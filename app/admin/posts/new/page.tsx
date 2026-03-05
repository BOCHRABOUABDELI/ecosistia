import { PostForm } from "@/components/blog/post-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="font-heading text-2xl font-bold text-foreground">Nueva entrada</h1>
      </div>
      <PostForm />
    </div>
  )
}
