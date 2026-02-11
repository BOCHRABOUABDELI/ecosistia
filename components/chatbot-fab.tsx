"use client"

import { useState, lazy, Suspense } from "react"
import { MessageSquare } from "lucide-react"

const ChatbotDialog = lazy(() => import("@/components/chatbot-dialog"))

export function ChatbotFab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95"
        aria-label="Abrir asistente"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      {open && (
        <Suspense fallback={null}>
          <ChatbotDialog open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </>
  )
}
