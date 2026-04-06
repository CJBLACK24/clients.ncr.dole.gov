"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button aria-label="Toggle theme" title="Toggle theme" className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-800 transition-colors hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 opacity-0" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" || theme === "system" ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-800 transition-colors hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
