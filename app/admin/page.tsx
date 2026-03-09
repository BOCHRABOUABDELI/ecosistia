'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { RichTextEditor } from '@/components/blog/rich-text-editor'
import { Plus, Trash2, Pencil, Eye, EyeOff, X, ChevronRight } from 'lucide-react'
import type { BlogPost, BlogSector, BlogSubsector } from '@/lib/blog-types'

const BLANK_POST = {
  title: '', slug: '', excerpt: '', content: '',
  author: '', sectorId: '', subsectorId: '',
  readingTime: 5, imageUrl: '', seoTitle: '', seoDescription: '', published: false,
}

const PASS = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'ecosistia-admin-2024'

export default function AdminPage() {
  const [logged, setLogged] = useState(false)
  const [password, setPassword] = useState('')
  const [tab, setTab] = useState('editor')
  const [postsSubTab, setPostsSubTab] = useState('editor')

  // Posts state
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [postForm, setPostForm] = useState<typeof BLANK_POST>({ ...BLANK_POST })

  // Sectors state
  const [sectors, setSectors] = useState<BlogSector[]>([])
  const [sectorName, setSectorName] = useState('')
  const [editingSector, setEditingSector] = useState<BlogSector | null>(null)
  const [subsectorName, setSubsectorName] = useState('')
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null)

  // Load on mount
  useEffect(() => {
    if (sessionStorage.getItem('admin-blog-token')) {
      setLogged(true)
      loadAll()
    }
  }, [])

  async function loadAll() {
    const [pr, sr] = await Promise.all([
      fetch('/api/blog/posts?admin=true'),
      fetch('/api/blog/sectors'),
    ])
    setPosts(Array.isArray(await pr.clone().json()) ? await pr.json() : [])
    setSectors(Array.isArray(await sr.clone().json()) ? await sr.json() : [])
  }

  async function loadPosts() {
    const r = await fetch('/api/blog/posts?admin=true')
    const d = await r.json()
    setPosts(Array.isArray(d) ? d : [])
  }

  async function loadSectors() {
    const r = await fetch('/api/blog/sectors')
    const d = await r.json()
    setSectors(Array.isArray(d) ? d : [])
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (password === PASS) {
      sessionStorage.setItem('admin-blog-token', 'yes')
      setLogged(true)
      setPassword('')
      loadAll()
    } else {
      alert('Contraseña incorrecta')
    }
  }

  // ---- POSTS ----
  function genSlug() {
    setPostForm(f => ({
      ...f,
      slug: f.title.toLowerCase().replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u').replace(/ñ/g,'n').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    }))
  }

  async function savePost() {
    if (!postForm.title || !postForm.slug || !postForm.content) {
      alert('Título, slug y contenido son obligatorios')
      return
    }
    const payload = { ...postForm, readingTime: Math.max(1, Math.ceil(postForm.content.replace(/<[^>]+>/g,'').split(/\s+/).length / 200)) }
    if (editingPost) {
      await fetch(`/api/blog/posts/${editingPost.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      })
    } else {
      await fetch('/api/blog/posts', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      })
    }
    setPostForm({ ...BLANK_POST })
    setEditingPost(null)
    loadPosts()
  }

  function startEditPost(post: BlogPost) {
    setEditingPost(post)
    setPostForm({
      title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.content,
      author: post.author, sectorId: post.sectorId, subsectorId: post.subsectorId,
      readingTime: post.readingTime, imageUrl: post.imageUrl,
      seoTitle: post.seoTitle, seoDescription: post.seoDescription, published: post.published,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function deletePost(id: string) {
    if (!confirm('¿Eliminar esta entrada?')) return
    await fetch(`/api/blog/posts/${id}`, { method: 'DELETE' })
    loadPosts()
  }

  async function togglePublish(post: BlogPost) {
    await fetch(`/api/blog/posts/${post.id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !post.published }),
    })
    loadPosts()
  }

  // ---- SECTORS ----
  async function saveSector() {
    if (!sectorName.trim()) return
    const slug = sectorName.toLowerCase().replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u').replace(/ñ/g,'n').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    if (editingSector) {
      await fetch(`/api/blog/sectors/${editingSector.id}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...editingSector, name: sectorName, slug }),
      })
      setEditingSector(null)
    } else {
      await fetch('/api/blog/sectors', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: sectorName, slug, subsectors: [] }),
      })
    }
    setSectorName('')
    loadSectors()
  }

  async function deleteSector(id: string) {
    if (!confirm('¿Eliminar este sector?')) return
    await fetch(`/api/blog/sectors/${id}`, { method: 'DELETE' })
    loadSectors()
  }

  async function addSubsector(sector: BlogSector) {
    if (!subsectorName.trim()) return
    const slug = subsectorName.toLowerCase().replace(/[áàä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i').replace(/[óòö]/g,'o').replace(/[úùü]/g,'u').replace(/ñ/g,'n').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    const newSub: BlogSubsector = {
      id: Math.random().toString(36).substring(2) + Date.now().toString(36),
      name: subsectorName, slug,
    }
    const updated = { ...sector, subsectors: [...sector.subsectors, newSub] }
    await fetch(`/api/blog/sectors/${sector.id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    setSubsectorName('')
    loadSectors()
  }

  async function deleteSubsector(sector: BlogSector, subId: string) {
    const updated = { ...sector, subsectors: sector.subsectors.filter(s => s.id !== subId) }
    await fetch(`/api/blog/sectors/${sector.id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    })
    loadSectors()
  }

  const selectedSector = sectors.find(s => s.id === postForm.sectorId)

  // --- LOGIN SCREEN ---
  if (!logged) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background px-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Panel de Administración</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
              />
              <Button type="submit" className="w-full">Acceder</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // --- ADMIN PANEL ---
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-heading font-bold text-foreground">Blog Admin · Ecosistia</span>
          <div className="flex items-center gap-3">
            <a href="/blog" target="_blank" className="text-sm text-muted-foreground hover:text-foreground">Ver blog</a>
            <Button variant="outline" size="sm" onClick={() => { sessionStorage.removeItem('admin-blog-token'); setLogged(false) }}>
              Salir
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="editor">{editingPost ? 'Editar entrada' : 'Nueva entrada'}</TabsTrigger>
            <TabsTrigger value="list">Entradas ({posts.length})</TabsTrigger>
            <TabsTrigger value="sectors">Sectores y temas</TabsTrigger>
          </TabsList>

          {/* ============ EDITOR TAB ============ */}
          <TabsContent value="editor">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-heading text-lg">
                  {editingPost ? `Editando: ${editingPost.title}` : 'Nueva entrada'}
                </CardTitle>
                {editingPost && (
                  <Button variant="outline" size="sm" onClick={() => { setEditingPost(null); setPostForm({ ...BLANK_POST }) }}>
                    <X className="h-4 w-4 mr-1" /> Nueva entrada
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-5">

                {/* Título + Slug */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Título *</label>
                    <Input placeholder="Título del artículo" value={postForm.title}
                      onChange={e => setPostForm(f => ({ ...f, title: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Slug *</label>
                    <div className="flex gap-2">
                      <Input placeholder="url-del-articulo" value={postForm.slug}
                        onChange={e => setPostForm(f => ({ ...f, slug: e.target.value }))} />
                      <Button type="button" variant="outline" onClick={genSlug}>Auto</Button>
                    </div>
                  </div>
                </div>

                {/* Extracto */}
                <div>
                  <label className="text-sm font-medium mb-1 block">Extracto</label>
                  <Textarea placeholder="Breve descripción del artículo..." value={postForm.excerpt}
                    onChange={e => setPostForm(f => ({ ...f, excerpt: e.target.value }))} rows={2} />
                </div>

                {/* Contenido (full width) */}
                <div>
                  <label className="text-sm font-medium mb-1 block">Contenido *</label>
                  <RichTextEditor value={postForm.content} onChange={v => setPostForm(f => ({ ...f, content: v }))} />
                </div>

                {/* Sector + Subsector + Autor + Imagen */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Sector</label>
                    <Select value={postForm.sectorId} onValueChange={v => setPostForm(f => ({ ...f, sectorId: v, subsectorId: '' }))}>
                      <SelectTrigger><SelectValue placeholder="Selecciona sector" /></SelectTrigger>
                      <SelectContent>
                        {sectors.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Subsector</label>
                    <Select value={postForm.subsectorId} onValueChange={v => setPostForm(f => ({ ...f, subsectorId: v }))}
                      disabled={!selectedSector || selectedSector.subsectors.length === 0}>
                      <SelectTrigger><SelectValue placeholder="Selecciona subsector" /></SelectTrigger>
                      <SelectContent>
                        {selectedSector?.subsectors.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Autor</label>
                    <Input placeholder="Nombre del autor" value={postForm.author}
                      onChange={e => setPostForm(f => ({ ...f, author: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Imagen de portada (URL)</label>
                    <Input placeholder="/Imagenes/foto.jpg" value={postForm.imageUrl}
                      onChange={e => setPostForm(f => ({ ...f, imageUrl: e.target.value }))} />
                    {postForm.imageUrl && (
                      <div className="mt-2 relative w-full h-24 bg-muted rounded-md overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={encodeURI(postForm.imageUrl)} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* SEO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">SEO Title</label>
                    <Input placeholder="Título para buscadores" value={postForm.seoTitle}
                      onChange={e => setPostForm(f => ({ ...f, seoTitle: e.target.value }))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">SEO Description</label>
                    <Textarea placeholder="Descripción para buscadores (máx 160 caracteres)" value={postForm.seoDescription}
                      onChange={e => setPostForm(f => ({ ...f, seoDescription: e.target.value }))} rows={2} />
                  </div>
                </div>

                {/* Publish + Save */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="checkbox" checked={postForm.published}
                      onChange={e => setPostForm(f => ({ ...f, published: e.target.checked }))} className="h-4 w-4" />
                    <span className="text-sm font-medium">Publicar ahora</span>
                  </label>
                  <Button onClick={savePost} size="lg">
                    {editingPost ? 'Guardar cambios' : 'Crear entrada'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ============ LIST TAB ============ */}
          <TabsContent value="list" className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-semibold text-foreground">Todas las entradas</h2>
              <Button onClick={() => { setEditingPost(null); setPostForm({ ...BLANK_POST }); setTab('editor') }}>
                <Plus className="h-4 w-4 mr-2" /> Nueva entrada
              </Button>
            </div>
            {posts.length === 0 && (
              <Card><CardContent className="py-12 text-center text-muted-foreground">No hay entradas aún.</CardContent></Card>
            )}
            {posts.map(post => (
              <Card key={post.id} className="p-4">
                <div className="flex items-start gap-3">
                  {post.imageUrl && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={encodeURI(post.imageUrl)} alt="" className="h-16 w-24 rounded object-cover shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{post.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={post.published ? 'default' : 'secondary'} className="text-xs">
                        {post.published ? 'Publicado' : 'Borrador'}
                      </Badge>
                      {post.sectorId && (
                        <span className="text-xs text-muted-foreground">
                          {sectors.find(s => s.id === post.sectorId)?.name}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => togglePublish(post)}
                      title={post.published ? 'Despublicar' : 'Publicar'}>
                      {post.published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { startEditPost(post); setTab('editor') }}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deletePost(post.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* ============ SECTORS TAB ============ */}
          <TabsContent value="sectors" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Add / edit sector */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    {editingSector ? `Editar: ${editingSector.name}` : 'Nuevo sector'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Ej: Servicios Profesionales" value={sectorName}
                      onChange={e => setSectorName(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && saveSector()} />
                    <Button onClick={saveSector}>
                      {editingSector ? 'Guardar' : <Plus className="h-4 w-4" />}
                    </Button>
                    {editingSector && (
                      <Button variant="outline" onClick={() => { setEditingSector(null); setSectorName('') }}>
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Los sectores agrupan los artículos. Dentro de cada sector puedes crear subsectores (ej: Abogados, Fisioterapeutas...).
                  </p>
                </CardContent>
              </Card>

              {/* Sectors list with subsectors */}
              <div className="space-y-3">
                <h2 className="font-heading font-semibold text-foreground">
                  Sectores ({sectors.length})
                </h2>
                {sectors.length === 0 && (
                  <p className="text-sm text-muted-foreground">No hay sectores aún.</p>
                )}
                {sectors.map(sector => (
                  <Card key={sector.id} className="overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-muted/30">
                      <div className="flex items-center gap-2">
                        <ChevronRight
                          className={`h-4 w-4 text-muted-foreground cursor-pointer transition-transform ${activeSectorId === sector.id ? 'rotate-90' : ''}`}
                          onClick={() => setActiveSectorId(activeSectorId === sector.id ? null : sector.id)}
                        />
                        <span className="font-medium text-sm">{sector.name}</span>
                        <Badge variant="outline" className="text-xs h-5">{sector.subsectors.length} subsectores</Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7"
                          onClick={() => { setEditingSector(sector); setSectorName(sector.name) }}>
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => deleteSector(sector.id)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>

                    {activeSectorId === sector.id && (
                      <div className="px-4 py-3 space-y-2 border-t">
                        {/* Subsectors */}
                        {sector.subsectors.map(sub => (
                          <div key={sub.id} className="flex items-center justify-between text-sm py-1">
                            <span className="text-foreground">{sub.name}</span>
                            <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive"
                              onClick={() => deleteSubsector(sector, sub.id)}>
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}

                        {/* Add subsector */}
                        <div className="flex gap-2 pt-1">
                          <Input
                            placeholder="Nuevo subsector (ej: Abogados)"
                            value={activeSectorId === sector.id ? subsectorName : ''}
                            onChange={e => setSubsectorName(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && addSubsector(sector)}
                            className="h-8 text-sm"
                          />
                          <Button size="sm" className="h-8" onClick={() => addSubsector(sector)}>
                            <Plus className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
