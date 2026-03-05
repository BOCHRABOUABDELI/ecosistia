import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import crypto from "crypto"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /admin routes (except /admin/login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = request.cookies.get("admin-session")

    if (!session?.value) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    const expected = crypto
      .createHash("sha256")
      .update(process.env.ADMIN_PASSWORD || "ecosistia-admin-2024")
      .digest("hex")

    if (session.value !== expected) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
