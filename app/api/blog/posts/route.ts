import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const adminMode = searchParams.get('admin') === 'true'
    
    const supabase = await createClient()
    
    let query = supabase.from('blog_posts').select('*')
    
    if (!adminMode) {
      query = query.eq('published', true)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })
    
    if (error) throw error
    
    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{
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
      }])
      .select()
    
    if (error) throw error
    
    return NextResponse.json(data?.[0] || {})
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
