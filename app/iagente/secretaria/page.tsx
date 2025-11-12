"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

export default function SecretariaPage() {
  const [showSetorModal, setShowSetorModal] = useState(false)
  const [showRedirectMessage, setShowRedirectMessage] = useState(false)
  
  const setores = [
    "Empresas de Serviços",
    "Clinicas",
    "Imobiliárias",
    "Seguradoras",
    "Corretoras",
    "E-commerces",
    "Deliverys",
    "Instituições Educacionais",
    "Revendas e Locadoras",
    "Bancos e Financeiras",
    "Hotéis e Pousadas",
    "Agência de Marketing",
    "Produtores Digitais",
    "Freelancers e Consultores"
  ]

  const handleSetorSelect = (setor: string) => {
    setShowSetorModal(false)
    setShowRedirectMessage(true)
    
    // Mostrar mensagem por 3 segundos
    setTimeout(() => {
      setShowRedirectMessage(false)
      
      // Redirecionar para WhatsApp
      const mensagem = `Olá! Atuo no setor de ${setor}, e gostaria de ver na prática o IAgente Secretária.`
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521987572816&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`
      window.open(whatsappUrl, '_blank')
    }, 3000)
  }

  const recursos = [
    {
      titulo: "Gestão Administrativa",
      items: [
        "Agendamento de reuniões",
        "Gestão de agenda executiva",
        "Organização de documentos",
        "Controle de correspondência",
        "Gestão de arquivos",
        "Suporte administrativo"
      ]
    },
    {
      titulo: "Comunicação",
      items: [
        "Atendimento telefônico",
        "Gestão de e-mails",
        "Comunicação com clientes",
        "Agendamento de compromissos",
        "Follow-up de reuniões"
      ]
    },
    {
      titulo: "Suporte Executivo",
      items: [
        "Preparação de relatórios",
        "Organização de eventos",
        "Gestão de viagens",
        "Controle de despesas",
        "Suporte à diretoria"
      ]
    }
  ]

  return (
    <div className="pt-8 pb-16" style={{ background: '#070c14' }}>
      {/* Primeira Seção - Card logo abaixo do menu */}
      <div className="container mx-auto px-4 pt-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">SECRETÁRIA</h1>
          <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

          {/* Imagem de apresentação */}
          <div className="mb-12 card-glass p-6 rounded-xl max-w-7xl mx-auto">
            <div className="w-full aspect-[5/7] md:aspect-[19/7] lg:aspect-[19/7] bg-gray-200 rounded-lg overflow-hidden mb-6 relative aspect-ratio-container">
              <Image
                src="/images/card-secretaria.webp"
                alt="IAgente Secretária"
                fill
                className="object-cover md:hidden"
                style={{ objectPosition: "center" }}
              />
              <Image
                src="/images/bannerhomepage-secretária.webp"
                alt="IAgente Secretária"
                fill
                className="object-cover hidden md:block"
                style={{ objectPosition: "center" }}
              />
            </div>

            <div className="text-center">
              <Button 
                className="button-glass"
                onClick={() => setShowSetorModal(true)}
                aria-label="Abrir modal para falar com o IAgente Secretária"
              >
                Falar com o IAgente
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda Seção - De "IAGENTE SECRETÁRIA" até os botões */}
      <section className="py-16" style={{
        background: '#070c14'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-center text-lagente text-white">IAGENTE SECRETÁRIA</h2>
              <p className="text-lg text-center mb-8 text-gray-300">Especialista em gestão administrativa</p>

              <div className="rounded-xl mb-12" style={{
                background: '#070c14'
              }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recursos.map((grupo, index) => (
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
              </div>

              <div className="card-glass-no-sweep p-8 rounded-lg shadow-md transition-all duration-300 mb-12" style={{ border: '1px solid #777b7e' }}>
                <h3 className="text-2xl font-bold mb-6 text-white">Sobre o IAgente</h3>
                <p className="text-lg mb-6" style={{ color: '#acb1b5' }}>
                  O IAgente Secretária é uma solução revolucionária para empresas que desejam
                  otimizar seu processo administrativo. Com técnicas avançadas de organização
                  e gestão, nosso IAgente está disponível 24 horas por dia,
                  7 dias por semana, garantindo eficiência e organização em todas as tarefas administrativas.
                </p>

                <p className="text-lg mb-6" style={{ color: '#acb1b5' }}>
                  Especialista em administração, extremamente eficiente e qualificado para o
                  cargo de secretária. Treinado com técnicas avançadas de organização e gestão administrativa.
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <Link href="/funcionalidades" aria-label="Ver funcionalidades dos IAgentes">
                <Button className="button-glass px-8">Funcionalidades</Button>
              </Link>
              <Link href="/beneficios" aria-label="Ver benefícios dos IAgentes">
                <Button className="button-glass px-8">Benefícios</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Seleção de Setor */}
      {showSetorModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Botão X para fechar */}
            <button
              onClick={() => setShowSetorModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-300"
              aria-label="Fechar modal de seleção de setor"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Selecione seu Setor</h3>
              <p className="text-gray-300">Escolha a área de atuação da sua empresa para personalizarmos o atendimento</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {setores.map((setor, index) => (
                <button
                  key={index}
                  onClick={() => handleSetorSelect(setor)}
                  className="p-4 text-left bg-gray-800 hover:bg-gray-700 border border-white/10 hover:border-blue-400/50 rounded-xl transition-all duration-300 group"
                >
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    {setor}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowSetorModal(false)}
                className="border-red-400/50 text-red-400 hover:bg-red-400/10 hover:border-red-400"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem de redirecionamento */}
      {showRedirectMessage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-md w-full text-center animate-scale-in">
            <div className="mb-6">
              {/* Spinner animado */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-purple-400 animate-spin"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
              
              {/* Texto com animação de digitação */}
              <h3 className="text-2xl font-bold text-white mb-3 animate-pulse">
                Redirecionando...
              </h3>
              
              {/* Pontos animados */}
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              
              <p className="text-gray-300 text-lg animate-fade-in-up">
                Você está sendo direcionado para conversar com o IAgente
              </p>
            </div>
          </div>
        </div>
      )}

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

        /* Animações personalizadas para o popup de redirecionamento */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
