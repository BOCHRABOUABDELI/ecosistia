import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    const toEmail = process.env.CONTACT_EMAIL_TO
    if (!toEmail) {
      return NextResponse.json(
        { error: "Email de destino no configurado." },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: "Ecosistia <onboarding@resend.dev>",
      to: [toEmail],
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    )
  }
}
