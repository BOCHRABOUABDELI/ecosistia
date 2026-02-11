"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatMessage {
  role: "bot" | "user"
  content: string
}

const initialMessages: ChatMessage[] = [
  {
    role: "bot",
    content:
      "Hola, soy el asistente de ValerIA. Te ayudo a definir tu proyecto con IA. Cuentame, que proceso de tu empresa te gustaria automatizar o mejorar?",
  },
]

const botResponses = [
  "Interesante! Cuantas personas usarian esta aplicacion en tu equipo?",
  "Perfecto. Que herramientas o sistemas usais actualmente que deberiamos integrar?",
  "Genial! Con esta informacion ya puedo hacerme una idea del proyecto. Te recomiendo que rellenes el formulario de contacto para que nuestro equipo te prepare una propuesta personalizada.",
  "Si tienes mas preguntas, no dudes en escribirme. Tambien puedes contactarnos directamente en la pagina de contacto.",
]

export default function ChatbotDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState("")
  const [responseIndex, setResponseIndex] = useState(0)

  function handleSend() {
    if (!input.trim()) return
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: input },
    ]
    setInput("")
    setMessages(newMessages)

    setTimeout(() => {
      const response = botResponses[responseIndex % botResponses.length]
      setMessages((prev) => [...prev, { role: "bot", content: response }])
      setResponseIndex((prev) => prev + 1)
    }, 800)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-border bg-accent text-accent-foreground">
          <DialogTitle className="flex items-center gap-2 text-accent-foreground">
            <Bot className="h-5 w-5" />
            Asistente de Requisitos
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={`msg-${i}-${msg.role}`}
                className={cn(
                  "flex gap-2 max-w-[85%]",
                  msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    msg.role === "bot"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {msg.role === "bot" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm leading-relaxed",
                    msg.role === "bot"
                      ? "bg-muted text-foreground"
                      : "bg-accent text-accent-foreground"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2 border-t border-border p-4"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90" aria-label="Enviar mensaje">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
