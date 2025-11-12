"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FuncionalidadesPage() {
  const funcionalidades = [
    {
      titulo: "Capacidade Operacional",
      items: [
    "Atua 24 horas por dia, 7 dias por semana.",
    "Realiza até 90 atendimentos simultâneos — 1 IAgente equivale a 90 humanos.",
        "Extremamente humanizado: ninguém perceberá que se trata de uma inteligência artificial."
      ]
    },
    {
      titulo: "Personalização",
      items: [
    "Permite personalização com nome, gênero e voz do IAgente profissional.",
        "Se preferir, seu IAgente pode \"ser você\": faz e atende ligações, envia áudios no WhatsApp com sua voz e seu jeito de falar.",
        "Responde mensagens no WhatsApp e e-mails com sua forma de escrever."
      ]
    },
    {
      titulo: "Qualificação",
      items: [
    "Profissionais altamente capacitados e eficientes.",
    "Multilíngues: fala e escreve em até 8 idiomas.",
        "Respostas instantâneas e precisas."
      ]
    },
    {
      titulo: "Especialização",
      items: [
    "Especialistas em atendimento e vendas.",
    "Realiza atendimentos ativos e receptivos.",
        "Atua em múltiplos canais: e-mail, WhatsApp, telefone, chat do site."
      ]
    },
    {
      titulo: "Comunicação Natural",
      items: [
    "Responde mensagens de texto e áudio no WhatsApp e Instagram com naturalidade humana.",
    "Consulta a base de dados com todas as informações do negócio, produtos e serviços.",
        "Possui aprendizado de máquina: aprende, raciocina e memoriza."
      ]
    },
    {
      titulo: "Técnicas Avançadas",
      items: [
        "É treinado com técnicas de atendimento ao cliente.",
        "Vendas avançadas e programação neurolinguística.",
        "Maior poder de persuasão nas interações."
      ]
    },
    {
      titulo: "Gestão de Comunicação",
      items: [
    "Faz, recebe e transfere ligações telefônicas.",
    "Responde mensagens com texto ou áudio gravado na hora, como um humano.",
        "Realiza agendamentos diretamente na agenda."
      ]
    },
    {
      titulo: "Gestão de Vendas",
      items: [
        "Qualifica leads e fecha vendas.",
        "Envia links de pagamento e confirma recebimentos.",
        "Executa recuperação de vendas (PIX, boletos, cartões recusados)."
      ]
    },
    {
      titulo: "Gestão de Processos",
      items: [
        "Fecha e envia contratos, confirma vendas.",
        "Envia confirmações para time comercial e cliente.",
        "Atualiza o status do lead no CRM."
      ]
    }
  ]

  return (
    <div className="py-16" style={{
      background: '#070c14'
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">Funcionalidades</h1>
          <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white">Conheça algumas das funcionalidades dos IAgentes Profissionais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funcionalidades.map((grupo, index) => (
              <div 
                key={index} 
                className="card-glass-no-sweep p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  border: '1px solid #777b7e'
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">{grupo.titulo}</h3>
                <ul className="space-y-4">
                  {grupo.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#777b7e' }} />
                      <span className="text-lg" style={{ color: '#acb1b5' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contato">
              <Button className="button-glass px-8">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
