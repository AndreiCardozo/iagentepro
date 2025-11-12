'use client'

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SectorCard {
  title: string
  description: string
}

export default function SectorsCarousel() {
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const desktopScrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showSetorModal, setShowSetorModal] = useState(false)
  const [showRedirectMessage, setShowRedirectMessage] = useState(false)

  const sectors: SectorCard[] = [
    {
      title: "Empresas de Serviços",
      description: "Automatizam atendimento ao cliente, agendamentos e processos internos para otimizar operações e melhorar a experiência do usuário."
    },
    {
      title: "Clinicas", 
      description: "Gerenciam consultas de pacientes, agendamentos e acompanhamentos de forma eficiente por meio de sistemas automatizados."
    },
    {
      title: "Imobiliárias",
      description: "Automatizam interações com clientes, gerenciam consultas de propriedades e agendam visitas para agilizar operações."
    },
    {
      title: "Seguradoras",
      description: "Fornecem atendimento personalizado ao cliente e automatizam consultas de rotina para melhorar a experiência e eficiência."
    },
    {
      title: "Corretoras",
      description: "Utilizam soluções escalonáveis para automação de vendas e engajamento do cliente sem necessidade de conhecimento técnico."
    },
    {
      title: "E-commerces",
      description: "Automatizam processos de vendas e atendimento ao cliente para lidar com altos volumes de interações."
    },
    {
      title: "Deliverys",
      description: "Gerenciam pedidos, rastreamento e atendimento ao cliente de forma automatizada para otimizar entregas."
    },
    {
      title: "Instituições Educacionais",
      description: "Atendem às dúvidas dos alunos, fornecem informações sobre cursos e gerenciam tarefas administrativas."
    },
    {
      title: "Revendas e Locadoras",
      description: "Automatizam processos de vendas, consultas de produtos e gestão de estoque para maior eficiência."
    },
    {
      title: "Bancos e Financeiras",
      description: "Fornecem atendimento personalizado e automatizam consultas de rotina para melhorar a experiência do cliente."
    },
    {
      title: "Hotéis e Pousadas",
      description: "Gerenciam reservas, check-ins e atendimento ao hóspede de forma automatizada e eficiente."
    },
    {
      title: "Agência de Marketing",
      description: "Automatizam tarefas repetitivas como geração de leads e acompanhamento de clientes para maior produtividade."
    },
    {
      title: "Produtores Digitais",
      description: "Automatizam interações com clientes, gerenciam compromissos e lidam com consultas de rotina."
    },
    {
      title: "Freelancers e Consultores",
      description: "Automatizam interações com clientes, gerenciam compromissos e lidam com consultas de rotina para focarem em suas atividades principais."
    }
  ]

  // Duplicar os cards múltiplas vezes para criar um efeito de loop infinito perfeito
  const duplicatedSectors = [...sectors, ...sectors, ...sectors, ...sectors]

  // Verificar se é mobile
    useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Funções para swipe no mobile
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return
    setIsDragging(true)
    setStartX(e.pageX - (mobileScrollRef.current?.offsetLeft || 0))
    setScrollLeft(mobileScrollRef.current?.scrollLeft || 0)
  }

  const handleMouseLeave = () => {
    if (!isMobile) return
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    if (!isMobile) return
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging) return
    e.preventDefault()
    const x = e.pageX - (mobileScrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  // Touch events para dispositivos móveis
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (mobileScrollRef.current?.offsetLeft || 0))
    setScrollLeft(mobileScrollRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return
    const x = e.touches[0].pageX - (mobileScrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    if (!isMobile) return
    setIsDragging(false)
  }

  useEffect(() => {
    const desktopContainer = desktopScrollRef.current

    // Somente desktop deve ter auto-scroll
    if (!desktopContainer) return

    let desktopScrollAmount = 0
    const cardWidth = 534 // Largura do card (510px) + gap (24px)
    const speed = 0.6 // Velocidade do scroll reduzida para passar mais lentamente

    const scroll = () => {
      if (!isPaused) {
        desktopScrollAmount += speed
        if (desktopScrollAmount >= cardWidth * sectors.length) {
          desktopScrollAmount = 0
          desktopContainer.scrollLeft = 0
        }
        desktopContainer.scrollLeft = desktopScrollAmount
      }
    requestAnimationFrame(scroll)
  }

    const animation = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animation)
  }, [isPaused, sectors.length])

  // Detectar índice atual no mobile e exibir paginação
  useEffect(() => {
    const container = mobileScrollRef.current
    if (!container) return

    const handleScroll = () => {
      const firstItem = container.querySelector('[data-mobile-card="true"]') as HTMLElement | null
      const itemWidth = firstItem?.offsetWidth || container.clientWidth
      const gap = 16 // gap-4
      const total = itemWidth + gap
      const index = Math.round(container.scrollLeft / total)
      setCurrentIndex(Math.max(0, Math.min(index, sectors.length - 1)))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => container.removeEventListener('scroll', handleScroll)
  }, [sectors.length])

  const scrollToIndex = (index: number) => {
    const container = mobileScrollRef.current
    if (!container) return
    const firstItem = container.querySelector('[data-mobile-card="true"]') as HTMLElement | null
    const itemWidth = firstItem?.offsetWidth || container.clientWidth
    const gap = 16
    const left = index * (itemWidth + gap)
    container.scrollTo({ left, behavior: 'smooth' })
  }

  const scrollToNext = () => {
    if (currentIndex < sectors.length - 1) {
      scrollToIndex(currentIndex + 1)
    }
  }

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  }

  const handleSetorSelect = (setor: string) => {
    setShowSetorModal(false)
    setShowRedirectMessage(true)
    
    // Mostrar mensagem por 3 segundos
    setTimeout(() => {
      setShowRedirectMessage(false)
      
      // Redirecionar para WhatsApp
      const mensagem = `Olá! Atuo no setor de ${setor} e quero ver na prática como o IAgente pode atuar na minha empresa.`
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521987572816&text=${encodeURIComponent(mensagem)}&thread_id=0&app_absent=0`
      window.open(whatsappUrl, '_blank')
    }, 3000)
  }

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-gray-900/50 to-transparent" id="setores">
      <div className="container mx-auto px-4">
                 {/* Seção dos três textos promocionais - grid 1x3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Tópico 1 - Pare de contratar humanos (VERMELHO) */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold leading-tight">
                <span className="text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text">Pare de contratar humanos</span>
                  </div>
              <div className="text-xl font-bold text-[#acb1b5] leading-relaxed">
                    Utilize o IAgente para atender, dar suporte e vender muito mais.
                  </div>
                </div>
              </div>

          {/* Tópico 2 - IAgente é mais eficiente (AZUL) */}
              <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold leading-tight">
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">IAgente é mais eficiente</span>
              </div>
              <div className="text-xl font-bold text-[#acb1b5] leading-relaxed">
                    Um único IAgente gera mais resultados do que uma equipe inteira de humanos.
                  </div>
                </div>
              </div>

          {/* Tópico 3 - 10x mais conversões (AZUL) */}
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold leading-tight">
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">10x mais conversões</span>
                  </div>
              <div className="text-xl font-bold text-[#acb1b5] leading-relaxed">
                    O IAgente transforma conversas em conversões, fechando vendas 24 horas por dia.
                  </div>
                </div>
              </div>
           </div>

       <div className="text-center mb-12">
         <h2 className="text-3xl font-bold text-center mb-12">
            IAGENTES ATUAM EM <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">QUALQUER SETOR</span>
         </h2>
       </div>

        {/* Carrossel responsivo */}
        {/* Mobile - sempre visível por padrão */}
        <div className="block md:hidden">
          {/* Container com posição relativa para as setas */}
          <div className="relative">
            {/* Layout mobile - carrossel horizontal com cards completos */}
            <div 
              ref={mobileScrollRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex gap-4 w-max px-4">
                {sectors.map((sector, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-start"
                    style={{ width: 'calc(100vw - 2rem)', minWidth: '280px' }}
                  >
                    <div data-mobile-card="true" className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-black/90 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ease-out shadow-lg shadow-black/20 h-full">
                      <h3 
                        className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl mb-4 text-center"
                      >
                        {sector.title}
                      </h3>
                      <p 
                        className="text-gray-300 leading-relaxed text-base text-center"
                      >
                        {sector.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Paginação (bolinhas) no mobile */}
          <div className="md:hidden flex justify-center items-center gap-2 mt-4">
            {currentIndex > 0 && (
              <button
                onClick={scrollToPrevious}
                className="w-8 h-8 bg-blue-500 border border-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-300 transition-all duration-300 shadow-lg shadow-blue-500/25"
                aria-label="Card anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            
            {sectors.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
            
            {currentIndex < sectors.length - 1 && (
              <button
                onClick={scrollToNext}
                className="w-8 h-8 bg-blue-500 border border-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-300 transition-all duration-300 shadow-lg shadow-blue-500/25"
                aria-label="Próximo card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          {/* Layout desktop - carrossel horizontal */}
          <div 
            ref={desktopScrollRef}
            className="overflow-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
          <div className="flex gap-6 w-max">
            {duplicatedSectors.map((sector, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: '510px', height: '250px' }}
              >
                                 <div className="h-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-black/90 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 ease-out flex flex-col justify-center items-center text-center shadow-lg shadow-black/20">
                                     <h3 
                     className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text"
                     style={{ fontSize: '24px', margin: '8px 0px 16px' }}
                   >
                     {sector.title}
                   </h3>
                   <p 
                     className="text-gray-300 leading-relaxed"
                     style={{ fontSize: '18px' }}
                   >
                     {sector.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Nova seção - CONVERSE COM UM IAGENTE AGORA! */}
      <div className="text-center py-16">
        <div className="space-y-6">
          {/* Título em azul degradê */}
          <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
            CONVERSE COM UM IAGENTE AGORA!
          </h3>
          
          {/* Subtítulo em branco */}
          <p className="text-xl text-white">
            Veja na prática como ele pode atuar no seu negócio
          </p>
          
          {/* Botão com animações */}
          <div className="pt-4">
            <button 
              className="button-glass px-8 py-4 text-sm font-medium"
              onClick={() => setShowSetorModal(true)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Falar com IAgente
            </button>
          </div>
        </div>
      </div>

      {/* Modal de seleção de setor */}
      {showSetorModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Botão fechar */}
            <button
              onClick={() => setShowSetorModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Título e descrição */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Selecione seu setor</h3>
              <p className="text-gray-300">Escolha o setor da sua empresa para conversarmos sobre como o IAgente pode ajudar</p>
            </div>

            {/* Grid de setores */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                "Empresas de Serviços",
                "Clínicas",
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
              ].map((setor, index) => (
                <button
                  key={index}
                  onClick={() => handleSetorSelect(setor)}
                  className="p-4 text-center bg-gray-800/50 border border-gray-600/50 rounded-lg hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-200 text-white font-medium"
                >
                  {setor}
                </button>
              ))}
            </div>

            {/* Botão cancelar */}
            <div className="text-center">
              <button
                onClick={() => setShowSetorModal(false)}
                className="px-6 py-3 border border-red-400/50 text-red-400 hover:bg-red-400/10 hover:border-red-400 transition-all duration-200 rounded-lg"
              >
                Cancelar
              </button>
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Animações personalizadas */
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
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}