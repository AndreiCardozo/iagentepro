"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import emailjs from "@emailjs/browser"

export default function TrabalheConoscoPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    emailjs.sendForm("service_7yy4ybm", "template_b06nu5m", formRef.current!, "teZFnrjdacuvRNLhZ").then(
      (result) => {
        setIsSubmitting(false)
        setSubmitStatus({
          success: true,
          message: "Candidatura enviada com sucesso!",
        })
        setFormData({
          nomeCompleto: "",
          email: "",
          mensagem: "",
        })
      },
      (error) => {
        setIsSubmitting(false)
        setSubmitStatus({
          success: false,
          message: "Erro ao enviar candidatura. Por favor, tente novamente.",
        })
        console.error("EmailJS error:", error)
      },
    )
  }

  return (
    <div className="py-16" style={{ background: '#070c14' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Trabalhe Conosco</h1>
        <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">Faça parte da revolução da IA</h2>
              <p className="text-gray-300 mb-6">
                Na lAgente, estamos sempre em busca de talentos que queiram fazer parte da revolução da inteligência
                artificial no mundo dos negócios. Se você é apaixonado por tecnologia e inovação, este é o lugar certo
                para você.
              </p>
              <p className="text-gray-300 mb-8">
                Preencha o formulário ao lado com seus dados e nos conte um pouco sobre você e suas experiências. Nossa
                equipe analisará seu perfil e entrará em contato caso haja uma oportunidade compatível.
              </p>

              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Trabalhe Conosco"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="card-glass p-8 rounded-xl" style={{ border: '1px solid #777b7e' }}>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: '#777b7e' }}>Envie sua candidatura</h2>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-300 mb-1">
                      Nome Completo
                    </label>
                    <Input
                      id="nomeCompleto"
                      name="nomeCompleto"
                      type="text"
                      value={formData.nomeCompleto}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Conte-nos sobre você, suas experiências e por que gostaria de trabalhar conosco."
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="button-glass w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
                  </Button>
                </div>
              </form>

              {submitStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center ${
                    submitStatus.success
                      ? "bg-green-900/20 border border-green-500/30 text-green-400"
                      : "bg-red-900/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
