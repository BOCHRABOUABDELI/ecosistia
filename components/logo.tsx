import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "light"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="8" className={variant === "light" ? "fill-primary-foreground/10" : "fill-accent/10"} />
      <text
        x="50%"
        y="54%"
        dominantBaseline="central"
        textAnchor="middle"
        className={variant === "light" ? "fill-primary-foreground" : "fill-accent"}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="700"
      >
        e
      </text>
    </svg>
  )
}
