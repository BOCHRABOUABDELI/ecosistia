import {
  ClipboardList,
  ShieldCheck,
  HeartPulse,
  Building2,
  TrendingUp,
  Scale,
  Wrench,
  Bot,
  FileSearch,
} from "lucide-react"
import type { AppIconName } from "@/lib/data"
import { cn } from "@/lib/utils"
import type { ElementType } from "react"

const iconMap: Record<AppIconName, ElementType> = {
  ClipboardList,
  ShieldCheck,
  HeartPulse,
  Building2,
  TrendingUp,
  Scale,
  Wrench,
  Bot,
  FileSearch,
}

export function AppIcon({
  name,
  color,
  className,
  size = "md",
}: {
  name: AppIconName
  color: string
  className?: string
  size?: "sm" | "md" | "lg"
}) {
  const Icon = iconMap[name]
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-11 w-11",
    lg: "h-14 w-14",
  }
  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-7 w-7",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl shadow-lg",
        sizeClasses[size],
        color,
        color === "bg-foreground" ? "text-background" : "text-white",
        className,
      )}
    >
      <Icon className={iconSizes[size]} />
    </div>
  )
}
