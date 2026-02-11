"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usuarios, setUsuarios] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const body = {
      nombre: formData.get("nombre") as string,
      empresa: formData.get("empresa") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      idea: formData.get("idea") as string,
      usuarios,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Error al enviar el mensaje.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al enviar el mensaje."
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
          {"Mensaje enviado"}
        </h3>
        <p className="mt-2 text-muted-foreground max-w-sm">
          Te llamamos en menos de 24 horas para hablar de tu proyecto. Revisa
          tambien tu email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            id="empresa"
            name="empresa"
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="telefono">Telefono *</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+34 600 000 000"
            required
          />
          <p className="text-xs text-muted-foreground">
            Te llamamos para aclarar los detalles de tu proyecto.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="idea">
          {"Describe tu idea o problema a resolver *"}
        </Label>
        <Textarea
          id="idea"
          name="idea"
          placeholder="Cuentanos que proceso quieres automatizar, que problema quieres resolver o que aplicacion necesitas. No hace falta que tengas todo claro, te ayudamos a definirlo."
          rows={5}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="usuarios">Numero de usuarios estimado</Label>
        <Select value={usuarios} onValueChange={setUsuarios}>
          <SelectTrigger id="usuarios">
            <SelectValue placeholder="Selecciona un rango" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1 - 10 usuarios</SelectItem>
            <SelectItem value="11-20">11 - 20 usuarios</SelectItem>
            <SelectItem value="21-30">21 - 30 usuarios</SelectItem>
            <SelectItem value="31+">31+ usuarios</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent cursor-pointer"
          required
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          He leido y acepto la{" "}
          <Link href="/politica-privacidad" target="_blank" className="text-accent font-medium hover:underline">
            Politica de Privacidad
          </Link>
          {" "}y consiento el tratamiento de mis datos para gestionar mi consulta. *
        </label>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="success"
        size="lg"
        className="mt-2 shadow-sm shadow-success/20"
        disabled={loading || !privacyAccepted}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
