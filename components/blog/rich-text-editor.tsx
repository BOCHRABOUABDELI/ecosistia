'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import Image from '@tiptap/extension-image'
import { useEffect, useRef, useState } from 'react'
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading2, Heading3, List, ListOrdered, Link as LinkIcon,
  Quote, Code, Undo, Redo, Type, ImageIcon, Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
}

const COLORS = ['#000000', '#374151', '#dc2626', '#2563eb', '#16a34a', '#d97706', '#7c3aed', '#db2777']
const FONTS = ['Inter', 'Georgia', 'Times New Roman', 'Courier New', 'Arial']

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      FontFamily,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: false }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false)
    }
  }, [value, editor])

  if (!editor) return null

  function setLink() {
    const url = window.prompt('URL del enlace:')
    if (url) {
      editor!.chain().focus().setLink({ href: url }).run()
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Upload failed')

      const { url } = await res.json()
      editor!.chain().focus().setImage({ src: url }).run()
    } catch (err) {
      alert('Error al subir la imagen')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-0.5 p-2 border-b bg-muted/40">
        {/* History */}
        <ToolBtn onClick={() => editor.chain().focus().undo().run()} title="Deshacer">
          <Undo className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()} title="Rehacer">
          <Redo className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Text format */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Negrita">
          <Bold className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Cursiva">
          <Italic className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Subrayado">
          <UnderlineIcon className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Tachado">
          <Strikethrough className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Headings */}
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Titulo 2">
          <Heading2 className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Titulo 3">
          <Heading3 className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Lists */}
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Lista">
          <List className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Lista numerada">
          <ListOrdered className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Cita">
          <Quote className="h-3.5 w-3.5" />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Codigo">
          <Code className="h-3.5 w-3.5" />
        </ToolBtn>

        <Divider />

        {/* Link */}
        <ToolBtn onClick={setLink} active={editor.isActive('link')} title="Enlace">
          <LinkIcon className="h-3.5 w-3.5" />
        </ToolBtn>

        {/* Image Upload */}
        <ToolBtn onClick={() => fileInputRef.current?.click()} title="Insertar imagen" disabled={uploading}>
          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ImageIcon className="h-3.5 w-3.5" />}
        </ToolBtn>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />

        <Divider />

        {/* Colors */}
        <div className="flex items-center gap-0.5">
          <Type className="h-3.5 w-3.5 text-muted-foreground ml-1 mr-0.5" />
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              className="h-5 w-5 rounded-sm border border-border/50 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => editor.chain().focus().setColor(color).run()}
              title={color}
            />
          ))}
        </div>

        <Divider />

        {/* Font family */}
        <select
          className="h-7 px-1 text-xs rounded border border-input bg-background"
          onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
          defaultValue=""
        >
          <option value="" disabled>Fuente</option>
          {FONTS.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Editor area */}
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none p-4 min-h-[220px] focus-within:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[200px] [&_.ProseMirror_img]:max-w-full [&_.ProseMirror_img]:rounded-md [&_.ProseMirror_img]:my-4"
      />
    </div>
  )
}

function ToolBtn({ onClick, active, title, disabled, children }: {
  onClick: () => void
  active?: boolean
  title?: string
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <Button
      type="button"
      variant={active ? 'secondary' : 'ghost'}
      size="icon"
      className="h-7 w-7"
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

function Divider() {
  return <div className="w-px h-6 bg-border mx-1" />
}
