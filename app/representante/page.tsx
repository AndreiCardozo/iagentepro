"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RepresentantePage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    emailjs.sendForm("service_7yy4ybm", "template_b06nu5m", formRef.current!, "teZFnrjdacuvRNLhZ")
      .then((result) => {
        setIsSubmitting(false)
        setSubmitStatus("success")
        formRef.current?.reset()
      })
      .catch((error) => {
        setIsSubmitting(false)
        setSubmitStatus("error")
        console.error("EmailJS error:", error)
      })
  }

  return (
    <div className="py-16" style={{ background: '#070c14' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">Se torne um representante comercial IAgente</h1>
          <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Lado Esquerdo - Informações */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-white">Por que ser um representante IAgente?</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Junte-se a uma rede de parceiros que estão revolucionando o mercado com soluções inovadoras em IA. Como representante comercial IAgente, você terá acesso a produtos de ponta e suporte completo para impulsionar seu negócio.
                </p>
              </div>

              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/quemsomos1.webp"
                  alt="Representante IAgente"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "top" }}
                />
              </div>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="card-glass p-8 rounded-xl" style={{ border: '1px solid #777b7e' }}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-lagente focus:border-lagente bg-gray-800 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-lagente focus:border-lagente bg-gray-800 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Conte-nos sobre você e por que deseja se tornar um representante comercial IAgente."
                    className="w-full px-4 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-lagente focus:border-lagente bg-gray-800 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="button-glass w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Formulário"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-center">Erro ao enviar mensagem. Tente novamente.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 