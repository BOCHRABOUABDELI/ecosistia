export interface BlogSubsector {
  id: string
  name: string
  slug: string
}

export interface BlogSector {
  id: string
  name: string
  slug: string
  subsectors: BlogSubsector[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  sectorId: string
  subsectorId: string
  author: string
  readingTime: number
  imageUrl: string
  published: boolean
  seoTitle: string
  seoDescription: string
  createdAt: string
  updatedAt: string
}
