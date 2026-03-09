# Migración a Supabase Completada ✓

He actualizado tu blog para usar **Supabase** en lugar de archivos JSON locales. Esto permite que el blog funcione correctamente en producción.

## Próximos pasos:

### 1️⃣ Crear las tablas en Supabase

1. Ve a tu **[Dashboard de Supabase](https://supabase.com/dashboard)**
2. Entra en tu proyecto
3. Ve a **SQL Editor** → **New Query**
4. Copia y pega el siguiente SQL:

```sql
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_sector_id ON blog_posts(sector_id);
CREATE INDEX IF NOT EXISTS idx_blog_sectors_slug ON blog_sectors(slug);

-- Enable RLS
ALTER TABLE blog_sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public read access
CREATE POLICY "Public can read all sectors" ON blog_sectors FOR SELECT USING (true);
CREATE POLICY "Public can read published posts" ON blog_posts FOR SELECT USING (published = true);

-- RLS Policies - Service role full access (for admin operations)
CREATE POLICY "Service role full access posts" ON blog_posts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access sectors" ON blog_sectors FOR ALL USING (true) WITH CHECK (true);
```

5. Ejecuta la query (**Ctrl+Enter** o botón **Run**)

### 2️⃣ Verifica que todo funcione

- Vuelve al admin del blog (`/admin`)
- Intenta crear un nuevo sector - ¡ahora debería guardarse!
- Crea un artículo - se guardará en Supabase

### 3️⃣ Opcional: Migrar datos locales a Supabase

Si ya tienes datos en los archivos JSON locales, puedo ayudarte a migrarlos.

## ¿Tienes preguntas?

Si algo no funciona, revisa:
- Que las variables de entorno estén configuradas en Vercel
- Que las tablas estén creadas en Supabase
- Los logs de la consola del navegador (F12 → Console)
