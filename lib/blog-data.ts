import fs from "fs"
import path from "path"
import type { BlogPost, BlogSector } from "./blog-types"

const POSTS_FILE = path.join(process.cwd(), "data", "blog-posts.json")
const SECTORS_FILE = path.join(process.cwd(), "data", "blog-sectors.json")

function ensureFile(filePath: string) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]", "utf-8")
}

// --- Posts ---

export function getPosts(): BlogPost[] {
  ensureFile(POSTS_FILE)
  const raw = fs.readFileSync(POSTS_FILE, "utf-8")
  return JSON.parse(raw) as BlogPost[]
}

export function getPublishedPosts(): BlogPost[] {
  return getPosts()
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getPostById(id: string): BlogPost | undefined {
  return getPosts().find((p) => p.id === id)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug && p.published)
}

export function savePost(post: BlogPost): BlogPost {
  const posts = getPosts()
  const idx = posts.findIndex((p) => p.id === post.id)
  if (idx >= 0) {
    posts[idx] = { ...post, updatedAt: new Date().toISOString() }
  } else {
    posts.push(post)
  }
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2), "utf-8")
  return post
}

export function deletePost(id: string): boolean {
  const posts = getPosts()
  const filtered = posts.filter((p) => p.id !== id)
  if (filtered.length === posts.length) return false
  fs.writeFileSync(POSTS_FILE, JSON.stringify(filtered, null, 2), "utf-8")
  return true
}

// --- Sectors ---

export function getSectors(): BlogSector[] {
  ensureFile(SECTORS_FILE)
  const raw = fs.readFileSync(SECTORS_FILE, "utf-8")
  return JSON.parse(raw) as BlogSector[]
}

export function getSectorById(id: string): BlogSector | undefined {
  return getSectors().find((s) => s.id === id)
}

export function saveSector(sector: BlogSector): BlogSector {
  const sectors = getSectors()
  const idx = sectors.findIndex((s) => s.id === sector.id)
  if (idx >= 0) {
    sectors[idx] = sector
  } else {
    sectors.push(sector)
  }
  fs.writeFileSync(SECTORS_FILE, JSON.stringify(sectors, null, 2), "utf-8")
  return sector
}

export function deleteSector(id: string): boolean {
  const sectors = getSectors()
  const filtered = sectors.filter((s) => s.id !== id)
  if (filtered.length === sectors.length) return false
  fs.writeFileSync(SECTORS_FILE, JSON.stringify(filtered, null, 2), "utf-8")
  return true
}
