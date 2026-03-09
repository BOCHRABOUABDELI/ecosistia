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
    
    return NextResponse.json(data)
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
    
    return NextResponse.json(data?.[0] || {})
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
