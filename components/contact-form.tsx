import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
      mensaje: formData.get("mensaje") as string,
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

      router.push("/contacto/gracias")
      return
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al enviar el mensaje."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="empresa">Empresa *</Label>
          <Input
            id="empresa"
            name="empresa"
            placeholder="Nombre de tu empresa"
            required
          />
        </div>
      </div>

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
        <Label htmlFor="mensaje">Cuéntanos tu situación *</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Describe tu empresa, qué procesos quieres automatizar o qué problemas quieres resolver con IA."
          rows={5}
          required
        />
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
            Solicitar diagnóstico gratuito
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
