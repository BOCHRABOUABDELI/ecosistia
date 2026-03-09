# Panel de Administración de Blog

Accede a `/admin` para gestionar el blog de Ecosistia.

## Como usar

1. **Acceder al panel**: Ve a `https://tu-sitio.com/admin`
2. **Inicia sesión**: Usa la contraseña configurada en `ADMIN_PASSWORD`
3. **Crea nuevas entradas**: 
   - Rellena título, slug, contenido, autor, sector, etc.
   - El slug se puede generar automáticamente desde el título
   - El contenido acepta **Markdown**
4. **Publica o guarda como borrador**: Usa el checkbox "Publicado"
5. **Gestiona entradas**: Edita, elimina o cambia estado de publicación

## Campos de cada entrada

- **Título**: Nombre del artículo
- **Slug**: URL única (ej: `mi-primer-articulo`)
- **Extracto**: Resumen corto para el listado del blog
- **Contenido**: Texto completo en Markdown
- **Autor**: Nombre del autor
- **Sector/Subsector**: Categoría del artículo
- **URL de imagen**: Portada del artículo
- **SEO Title/Description**: Meta tags para buscadores
- **Publicado**: Checkbox para publicar o guardar como borrador

## Variables de entorno

Configura en Vercel Settings > Vars:
- `ADMIN_PASSWORD`: Contraseña para acceder al panel (default: `ecosistia-admin-2024`)

## Formato Markdown soportado

El contenido de los artículos acepta:
- **Negrita**: `**texto**`
- *Cursiva*: `*texto*`
- # Encabezados: `# H1`, `## H2`, `### H3`
- - Listas: `- item`
- [Links](url): `[texto](url)`
- Código: `` `código` ``
- Y más...
