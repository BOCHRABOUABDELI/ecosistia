"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Bold, Italic, Heading2, Heading3, List, ListOrdered, Link2, ImageIcon, Loader2, ChevronDown, Save } from "lucide-react"
import type { BlogPost, BlogSector } from "@/lib/blog-types"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

interface PostFormProps {
  post?: BlogPost
  isEdit?: boolean
}

export function PostForm({ post, isEdit }: PostFormProps) {
  const router = useRouter()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [saving, setSaving] = useState(false)
  const [sectors, setSectors] = useState<BlogSector[]>([])
  const [seoOpen, setSeoOpen] = useState(false)

  const [title, setTitle] = useState(post?.title || "")
  const [slug, setSlug] = useState(post?.slug || "")
  const [excerpt, setExcerpt] = useState(post?.excerpt || "")
  const [content, setContent] = useState(post?.content || "")
  const [sectorId, setSectorId] = useState(post?.sectorId || "")
  const [subsectorId, setSubsectorId] = useState(post?.subsectorId || "")
  const [author, setAuthor] = useState(post?.author || "Equipo Ecosistia")
  const [readTime, setReadTime] = useState(post?.readTime || "5 min")
  const [imageUrl, setImageUrl] = useState(post?.imageUrl || "")
  const [published, setPublished] = useState(post?.published || false)
  const [seoTitle, setSeoTitle] = useState(post?.seoTitle || "")
  const [seoDescription, setSeoDescription] = useState(post?.seoDescription || "")
  const [keywords, setKeywords] = useState(post?.keywords || "")

  useEffect(() => {
    fetch("/api/blog/sectors")
      .then((r) => r.json())
      .then(setSectors)
  }, [])

  useEffect(() => {
    if (!isEdit) {
      setSlug(slugify(title))
    }
  }, [title, isEdit])

  const selectedSector = sectors.find((s) => s.id === sectorId)

  function insertMarkdown(prefix: string, suffix: string = "") {
    const ta = textareaRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const selected = content.substring(start, end)
    const newText = content.substring(0, start) + prefix + selected + suffix + content.substring(end)
    setContent(newText)
    setTimeout(() => {
      ta.focus()
      ta.setSelectionRange(start + prefix.length, start + prefix.length + selected.length)
    }, 0)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    const body = {
      title,
      slug,
      excerpt,
      content,
      sectorId,
      subsectorId,
      author,
      readTime,
      imageUrl,
      published,
      seoTitle,
      seoDescription,
      keywords,
    }

    if (isEdit && post) {
      await fetch(`/api/blog/posts/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    } else {
      await fetch("/api/blog/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    }

    router.push("/admin")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Content Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contenido</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Titulo *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titulo del articulo"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="url-del-articulo"
            />
            <p className="text-xs text-muted-foreground">
              Se genera automaticamente desde el titulo. URL: /blog/{slug || "url-articulo"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="excerpt">Extracto</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Breve descripcion del articulo (aparece en listados)"
              rows={2}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Contenido *</Label>
            <div className="flex flex-wrap gap-1 rounded-t-lg border border-b-0 border-border bg-muted/50 p-1.5">
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("**", "**")} title="Negrita">
                <Bold className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("*", "*")} title="Cursiva">
                <Italic className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("\n## ")} title="H2">
                <Heading2 className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("\n### ")} title="H3">
                <Heading3 className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("\n- ")} title="Lista">
                <List className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("\n1. ")} title="Lista numerada">
                <ListOrdered className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("[", "](url)")} title="Enlace">
                <Link2 className="h-4 w-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => insertMarkdown("![alt](", ")")} title="Imagen">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe el contenido del articulo en Markdown..."
              className="min-h-[300px] rounded-t-none border-t-0 font-mono text-sm"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Metadata Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Metadatos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label>Sector</Label>
              <Select value={sectorId} onValueChange={(v) => { setSectorId(v); setSubsectorId("") }}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((s) => (
                    <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedSector && selectedSector.subsectors.length > 0 && (
              <div className="flex flex-col gap-2">
                <Label>Subsector</Label>
                <Select value={subsectorId} onValueChange={setSubsectorId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un subsector" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedSector.subsectors.map((sub) => (
                      <SelectItem key={sub.id} value={sub.id}>{sub.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="author">Autor</Label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Equipo Ecosistia" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="readTime">Tiempo de lectura</Label>
              <Input id="readTime" value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="5 min" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="imageUrl">URL imagen destacada</Label>
            <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
          </div>

          <div className="flex items-center gap-3">
            <Switch id="published" checked={published} onCheckedChange={setPublished} />
            <Label htmlFor="published" className="cursor-pointer">Publicar inmediatamente</Label>
          </div>
        </CardContent>
      </Card>

      {/* SEO Card */}
      <Collapsible open={seoOpen} onOpenChange={setSeoOpen}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">SEO (opcional)</CardTitle>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${seoOpen ? "rotate-180" : ""}`} />
              </div>
              <p className="text-xs text-muted-foreground">
                Si dejas estos campos en blanco se usaran el titulo y extracto del articulo.
              </p>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="flex flex-col gap-4 pt-0">
              <div className="flex flex-col gap-2">
                <Label htmlFor="seoTitle">SEO Title</Label>
                <Input id="seoTitle" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder="Titulo para buscadores (recomendado: 50-60 caracteres)" />
                <p className="text-xs text-muted-foreground">{seoTitle.length}/60 caracteres</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="seoDescription">SEO Description</Label>
                <Textarea id="seoDescription" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} placeholder="Descripcion para buscadores (recomendado: 150-160 caracteres)" rows={2} />
                <p className="text-xs text-muted-foreground">{seoDescription.length}/160 caracteres</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="keywords">Palabras clave</Label>
                <Input id="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="erp, software, gestion empresarial" />
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => router.push("/admin")}>
          Cancelar
        </Button>
        <Button type="submit" disabled={saving}>
          {saving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Guardando...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              {isEdit ? "Guardar cambios" : "Crear entrada"}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
