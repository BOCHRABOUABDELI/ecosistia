import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import crypto from "crypto"

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin-session")

  if (!session?.value) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  const expected = crypto
    .createHash("sha256")
    .update(process.env.ADMIN_PASSWORD || "ecosistia-admin-2024")
    .digest("hex")

  if (session.value !== expected) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  return NextResponse.json({ authenticated: true })
}
