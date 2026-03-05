"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { FileText, FolderTree, LogOut, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarLinks = [
  { href: "/admin", label: "Posts", icon: LayoutDashboard },
  { href: "/admin/sectors", label: "Sectores", icon: FolderTree },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-border bg-card">
        <div className="flex h-14 items-center gap-2 border-b border-border px-4">
          <FileText className="h-5 w-5 text-primary" />
          <span className="font-heading text-sm font-bold text-foreground">Blog Admin</span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-3">
          {sidebarLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border p-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesion
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 pl-60">
        <div className="mx-auto max-w-5xl px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
