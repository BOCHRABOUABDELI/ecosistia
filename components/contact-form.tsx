"use client"

import { useState } from "react"
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
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

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
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input id="nombre" placeholder="Tu nombre" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="empresa">Empresa</Label>
          <Input id="empresa" placeholder="Nombre de tu empresa" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="tu@email.com" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="telefono">Telefono *</Label>
          <Input
            id="telefono"
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
          placeholder="Cuentanos que proceso quieres automatizar, que problema quieres resolver o que aplicacion necesitas. No hace falta que tengas todo claro, te ayudamos a definirlo."
          rows={5}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="usuarios">Numero de usuarios estimado</Label>
        <Select>
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

      <Button type="submit" variant="success" size="lg" className="mt-2 shadow-sm shadow-success/20">
        Enviar mensaje
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
