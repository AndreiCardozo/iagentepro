"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function ScrollToSection() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Só executa na homepage
    if (pathname !== "/") return

    // Verifica se há um hash na URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Pequeno atraso para garantir que a página esteja totalmente carregada
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [pathname])

  return null
}
