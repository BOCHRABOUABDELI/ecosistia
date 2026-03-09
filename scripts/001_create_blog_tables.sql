-- Create blog_sectors table
CREATE TABLE IF NOT EXISTS blog_sectors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  subsectors JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT DEFAULT 'Ecosistia',
  reading_time INTEGER DEFAULT 5,
  published BOOLEAN DEFAULT FALSE,
  sector_id UUID REFERENCES blog_sectors(id) ON DELETE SET NULL,
  subsector_id TEXT,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_sector_id ON blog_posts(sector_id);
CREATE INDEX IF NOT EXISTS idx_blog_sectors_slug ON blog_sectors(slug);

-- Disable RLS for blog tables (public content, admin managed)
ALTER TABLE blog_sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published posts
CREATE POLICY "Public can read published posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Allow public read access to all sectors
CREATE POLICY "Public can read all sectors" ON blog_sectors
  FOR SELECT USING (true);

-- Allow service role full access (for admin operations)
CREATE POLICY "Service role full access to posts" ON blog_posts
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access to sectors" ON blog_sectors
  FOR ALL USING (true) WITH CHECK (true);
