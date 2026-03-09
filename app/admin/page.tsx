'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Plus, Trash2 } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-types'

type FormData = Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>

export default function AdminPage() {
  const [logged, setLogged] = useState(false)
  const [password, setPassword] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [form, setForm] = useState<FormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: '',
    sectorId: '',
    subsectorId: '',
    readingTime: 5,
    imageUrl: '',
    seoTitle: '',
    seoDescription: '',
    published: false,
  })

  useEffect(() => {
    const token = sessionStorage.getItem('admin-blog-token')
    if (token) {
      setLogged(true)
      loadPosts()
    }
  }, [])

  async function loadPosts() {
    const res = await fetch('/api/blog/posts?admin=true')
    const data = await res.json()
    setPosts(Array.isArray(data) ? data : [])
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'ecosistia-admin-2024') {
      sessionStorage.setItem('admin-blog-token', 'yes')
      setLogged(true)
      setPassword('')
      loadPosts()
    } else {
      alert('Contraseña incorrecta')
    }
  }

  function handleGenerateSlug() {
    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    setForm({ ...form, slug })
  }

  async function handleSave() {
    if (!form.title || !form.slug || !form.content || !form.sectorId) {
      alert('Rellena los campos obligatorios')
      return
    }

    const payload = {
      ...form,
      readingTime: Math.ceil(form.content.split(/\s+/).length / 200),
    }

    if (editing) {
      await fetch(`/api/blog/posts/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } else {
      await fetch('/api/blog/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    }

    setForm({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: '',
      sectorId: '',
      subsectorId: '',
      readingTime: 5,
      imageUrl: '',
      seoTitle: '',
      seoDescription: '',
      published: false,
    })
    setEditing(null)
    loadPosts()
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Eliminar este post?')) return
    await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' })
    loadPosts()
  }

  function handleEdit(post: BlogPost) {
    setEditing(post)
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      sectorId: post.sectorId,
      subsectorId: post.subsectorId,
      readingTime: post.readingTime,
      imageUrl: post.imageUrl,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      published: post.published,
    })
  }

  if (!logged) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-md p-8">
          <h1 className="font-heading text-2xl font-bold mb-6">Panel de Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Acceder
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-3xl font-bold">Administrador de Blog</h1>
        <Button
          variant="outline"
          onClick={() => {
            sessionStorage.removeItem('admin-blog-token')
            setLogged(false)
          }}
        >
          Cerrar sesión
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="font-heading text-xl font-bold mb-4">
              {editing ? 'Editar entrada' : 'Nueva entrada'}
            </h2>
            <div className="space-y-4">
              <Input
                placeholder="Título"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <div className="flex gap-2">
                <Input
                  placeholder="Slug (auto-generable)"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                />
                <Button type="button" onClick={handleGenerateSlug} variant="outline">
                  Auto
                </Button>
              </div>
              <Input
                placeholder="Extracto"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              />
              <Textarea
                placeholder="Contenido (Markdown)"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={6}
              />
              <Input
                placeholder="Autor"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
              <Input
                placeholder="ID del sector"
                value={form.sectorId}
                onChange={(e) => setForm({ ...form, sectorId: e.target.value })}
              />
              <Input
                placeholder="ID del subsector"
                value={form.subsectorId}
                onChange={(e) => setForm({ ...form, subsectorId: e.target.value })}
              />
              <Input
                placeholder="URL de imagen"
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              />
              <Input
                placeholder="SEO Title"
                value={form.seoTitle}
                onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
              />
              <Input
                placeholder="SEO Description"
                value={form.seoDescription}
                onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                />
                <span>Publicado</span>
              </label>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="flex-1">
                  <Plus className="mr-2 h-4 w-4" />
                  {editing ? 'Actualizar' : 'Crear'}
                </Button>
                {editing && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditing(null)
                      setForm({
                        title: '',
                        slug: '',
                        excerpt: '',
                        content: '',
                        author: '',
                        sectorId: '',
                        subsectorId: '',
                        readingTime: 5,
                        imageUrl: '',
                        seoTitle: '',
                        seoDescription: '',
                        published: false,
                      })
                    }}
                  >
                    Cancelar
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="font-heading text-lg font-bold mb-4">
              Entradas ({posts.length})
            </h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {posts.map((post) => (
                <div key={post.id} className="p-3 border rounded bg-muted/50">
                  <div className="font-medium text-sm line-clamp-2">{post.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {post.published ? '✓ Publicado' : '○ Borrador'}
                  </div>
                  <div className="flex gap-1 mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 h-7"
                      onClick={() => handleEdit(post)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
