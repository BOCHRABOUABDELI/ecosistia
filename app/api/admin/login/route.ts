import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { password } = await request.json()
  const adminPassword = process.env.ADMIN_PASSWORD || "ecosistia-admin-2024"

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Contrasena incorrecta" }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set("admin-session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  })

  return response
}
