import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { password } = await request.json()
  const adminPassword = process.env.ADMIN_PASSWORD || "ecosistia-admin-2024"

  console.log("[v0] Login attempt - password received:", password ? "YES" : "NO")
  console.log("[v0] Login attempt - ADMIN_PASSWORD env set:", process.env.ADMIN_PASSWORD ? "YES" : "NO (using default)")
  console.log("[v0] Login attempt - passwords match:", password === adminPassword)

  if (password !== adminPassword) {
    console.log("[v0] Login FAILED - incorrect password")
    return NextResponse.json({ error: "Contrasena incorrecta" }, { status: 401 })
  }

  console.log("[v0] Login SUCCESS - setting cookie")

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
