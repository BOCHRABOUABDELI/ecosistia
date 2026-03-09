import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    
    // Map snake_case to camelCase for frontend compatibility
    const mappedData = data ? {
      ...data,
      imageUrl: data.image_url,
      sectorId: data.sector_id,
      subsectorId: data.subsector_id,
      readingTime: data.reading_time,
      seoTitle: data.seo_title,
      seoDescription: data.seo_description,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    } : null
    
    return NextResponse.json(mappedData)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: String(error) }, { status: 404 })
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await request.json()
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        sector_id: body.sectorId || null,
        subsector_id: body.subsectorId || null,
        author: body.author,
        image_url: body.imageUrl,
        seo_title: body.seoTitle,
        seo_description: body.seoDescription,
        published: body.published || false,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    
    const post = data?.[0]
    const mappedData = post ? {
      ...post,
      imageUrl: post.image_url,
      sectorId: post.sector_id,
      subsectorId: post.subsector_id,
      readingTime: post.reading_time,
      seoTitle: post.seo_title,
      seoDescription: post.seo_description,
      createdAt: post.created_at,
      updatedAt: post.updated_at,
    } : {}
    
    return NextResponse.json(mappedData)
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = await createClient()
    
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
