"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    
    // Atualiza o estado inicial
    setMatches(media.matches)

    // Cria o listener para mudanças
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Adiciona o listener
    media.addEventListener("change", listener)

    // Cleanup
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
} 