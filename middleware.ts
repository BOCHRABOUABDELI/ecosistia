import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  console.log("[v0] Middleware - pathname:", pathname)

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const session = request.cookies.get("admin-session")
    
    console.log("[v0] Middleware - session cookie:", session?.value || "NOT FOUND")

    if (!session?.value || session.value !== "authenticated") {
      console.log("[v0] Middleware - redirecting to login")
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
    
    console.log("[v0] Middleware - allowing access")
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
