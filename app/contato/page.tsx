"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContatoPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
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
          message: "Mensagem enviada com sucesso!",
        })
        setFormData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
        })
      },
      (error) => {
        setIsSubmitting(false)
        setSubmitStatus({
          success: false,
          message: "Erro ao enviar mensagem. Por favor, tente novamente.",
        })
        console.error("EmailJS error:", error)
      },
    )
  }

  return (
    <div className="py-16" style={{
      background: '#070c14'
    }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Contato</h1>
        <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">Entre em contato conosco</h2>
              <p className="text-gray-300 mb-8">
                Estamos prontos para responder suas dúvidas e apresentar como os IAgentes podem transformar sua empresa.
                Preencha o formulário ao lado e entraremos em contato o mais breve possível.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-lagente mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-gray-300">contato@lagente.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-lagente mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Telefone</h3>
                    <p className="text-gray-300">(21) 98757-2816</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-lagente mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Endereço</h3>
                    <p className="text-gray-300">Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-white">Envie sua mensagem</h2>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">
                      Nome Completo
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
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
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-300 mb-1">
                      Assunto
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      value={formData.assunto}
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
                      placeholder="Digite sua mensagem aqui..."
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="button-glass w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
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
