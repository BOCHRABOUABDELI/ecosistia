import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  console.log("[v0] Middleware - pathname:", pathname)
  console.log("[v0] Middleware - all cookies:", request.cookies.getAll().map(c => c.name))

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = request.cookies.get("admin-session")
    
    console.log("[v0] Middleware - admin-session cookie value:", session?.value || "NOT FOUND")

    if (!session?.value || session.value !== "authenticated") {
      console.log("[v0] Middleware - NO VALID SESSION, redirecting to login")
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
    
    console.log("[v0] Middleware - SESSION VALID, allowing access to:", pathname)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
