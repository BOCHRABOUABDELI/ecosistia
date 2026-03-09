import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const supabase = await createClient()
    
    const { data, error } = await supabase
      .from('blog_sectors')
      .update({
        name: body.name,
        slug: body.slug,
        subsectors: body.subsectors || [],
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    
    return NextResponse.json(data?.[0] || {})
  } catch (error) {
    console.error('Error updating sector:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    
    const { error } = await supabase
      .from('blog_sectors')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting sector:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
