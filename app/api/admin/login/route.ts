import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { password } = await request.json()
  const adminPassword = process.env.ADMIN_PASSWORD || "ecosistia-admin-2024"

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
  }

  // Return a simple token
  const token = "admin-" + Date.now().toString()
  return NextResponse.json({ token, success: true })
}
