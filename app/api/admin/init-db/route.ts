import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function POST() {
  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    })

    // Create tables using SQL
    const { error } = await supabase
      .from('_sql')
      .select('*')
      .limit(1)

    // Since direct SQL execution isn't available, we'll create tables through schema operations
    // First, ensure blog_sectors table exists
    const sectorsSQL = `
      CREATE TABLE IF NOT EXISTS blog_sectors (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        subsectors JSONB DEFAULT '[]'::jsonb,
        created_at TIMESTAMP DEFAULT now()
      );
      
      ALTER TABLE blog_sectors ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "blog_sectors_select_public" ON blog_sectors;
      CREATE POLICY "blog_sectors_select_public" ON blog_sectors FOR SELECT USING (true);
    `

    const postsSQL = `
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        excerpt TEXT,
        content TEXT NOT NULL,
        sector_id UUID,
        subsector_id UUID,
        author TEXT,
        image_url TEXT,
        seo_title TEXT,
        seo_description TEXT,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );
      
      ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
      
      DROP POLICY IF EXISTS "blog_posts_select_public" ON blog_posts;
      CREATE POLICY "blog_posts_select_public" ON blog_posts FOR SELECT USING (true);
    `

    // Since we can't execute raw SQL directly, return instructions
    return NextResponse.json({
      success: false,
      message: 'Please run these SQL commands in your Supabase dashboard:',
      sectorsSQL,
      postsSQL,
    })
  } catch (error) {
    console.error('Init DB error:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
