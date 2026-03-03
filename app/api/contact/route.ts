import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.es",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, empresa, email, telefono, idea, usuarios } = body

    if (!nombre || !email || !telefono || !idea) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      )
    }

    const fromEmail = process.env.SMTP_USER || "hola@softwareopium.com"
    const toEmail = process.env.CONTACT_EMAIL_TO || "hola@softwareopium.com"

    console.log("[v0] SMTP config:", {
      host: process.env.SMTP_HOST || "smtp.ionos.es",
      port: Number(process.env.SMTP_PORT) || 587,
      user: process.env.SMTP_USER ? "SET" : "NOT SET",
      pass: process.env.SMTP_PASS ? "SET" : "NOT SET",
      toEmail,
    })

    // 1. Email de notificacion a Ecosistia
    await transporter.sendMail({
      from: `"Ecosistia Contacto" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nuevo contacto: ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E1B4B;">Nuevo mensaje de contacto</h2>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Nombre</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${nombre}</td>
            </tr>
            ${empresa ? `<tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Empresa</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${empresa}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #3B82F6;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Telefono</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                <a href="tel:${telefono}" style="color: #3B82F6;">${telefono}</a>
              </td>
            </tr>
            ${usuarios ? `<tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Usuarios estimados</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${usuarios}</td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #1E1B4B; font-size: 14px; margin-bottom: 8px;">Descripcion del proyecto</h3>
          <p style="color: #0f172a; font-size: 14px; line-height: 1.6; background: #f8fafc; padding: 16px; border-radius: 8px;">${idea.replace(/\n/g, "<br />")}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">Enviado desde el formulario de contacto de Ecosistia</p>
        </div>
      `,
    })

    // 2. Email de confirmacion al usuario
    try {
      await transporter.sendMail({
        from: `"Ecosistia" <${fromEmail}>`,
        to: email,
        subject: "Hemos recibido tu mensaje - Ecosistia",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
            <div style="text-align: center; padding: 32px 0 24px;">
              <h1 style="color: #1E1B4B; font-size: 24px; margin: 0;">Ecosistia</h1>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 0 0 24px;" />
            <p style="font-size: 16px; line-height: 1.6;">Hola <strong>${nombre}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje correctamente 
              y nuestro equipo lo esta revisando.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              Nos pondremos en contacto contigo en un plazo maximo de <strong>24 horas laborables</strong> 
              para hablar sobre tu proyecto.
            </p>
            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin: 24px 0;">
              <p style="font-size: 13px; color: #64748b; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Resumen de tu mensaje</p>
              <p style="font-size: 14px; line-height: 1.6; color: #334155; margin: 0;">${idea.length > 200 ? idea.substring(0, 200).replace(/\n/g, "<br />") + "..." : idea.replace(/\n/g, "<br />")}</p>
            </div>
            <p style="font-size: 15px; line-height: 1.6; color: #334155;">
              Mientras tanto, si tienes alguna duda adicional, puedes responder directamente a este correo.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-top: 24px;">
              Un saludo,<br />
              <strong style="color: #1E1B4B;">El equipo de Ecosistia</strong>
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0 16px;" />
            <p style="color: #94a3b8; font-size: 12px; text-align: center;">
              Este es un mensaje automatico. Si no has enviado ninguna solicitud, puedes ignorar este correo.
            </p>
          </div>
        `,
      })
    } catch (confirmError) {
      console.error("Error sending confirmation email:", confirmError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] SMTP Error:", error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intentalo de nuevo." },
      { status: 500 }
    )
  }
}
