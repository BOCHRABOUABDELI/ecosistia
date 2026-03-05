"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-8 mb-4 text-2xl font-bold">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-6 mb-3 text-xl font-semibold">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc pl-6 space-y-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal pl-6 space-y-1">{children}</ol>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || ""} className="rounded-lg my-6 w-full" />
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-4">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">{children}</code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
