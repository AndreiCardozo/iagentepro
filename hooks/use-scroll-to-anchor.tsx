"use client"

import type React from "react"

import { useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"

export function useScrollToAnchor() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToAnchor = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Se não for um link de âncora, deixe o comportamento padrão
      if (!href.startsWith("#")) return

      e.preventDefault()

      // Se não estiver na homepage, navegue para a homepage com a âncora
      if (pathname !== "/") {
        router.push(`/${href}`)
        return
      }

      // Se já estiver na homepage, role para a âncora
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Força o scroll mesmo se já estiver na mesma âncora
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    },
    [pathname, router],
  )

  return scrollToAnchor
}
