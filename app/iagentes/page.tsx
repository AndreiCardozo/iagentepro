"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function IAgentesRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/#iagentes-profissionais")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <p className="text-lg">Redirecionando para IAgentes Profissionais...</p>
    </div>
  )
}
