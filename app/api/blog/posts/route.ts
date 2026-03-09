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
    
    // Map snake_case to camelCase for frontend compatibility
    const mappedData = (data || []).map(post => ({
      ...post,
      imageUrl: post.image_url,
      sectorId: post.sector_id,
      subsectorId: post.subsector_id,
      readingTime: post.reading_time,
      seoTitle: post.seo_title,
      seoDescription: post.seo_description,
      createdAt: post.created_at,
      updatedAt: post.updated_at,
    }))
    
    return NextResponse.json(mappedData)
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
