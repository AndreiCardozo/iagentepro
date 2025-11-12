"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function PartnersSection() {
  const [shuffledPartners, setShuffledPartners] = useState<string[]>([])
  
  const partners = [
    "/images/logos/bloco1.webp",
    "/images/logos/bloco1_04.webp",
    "/images/logos/bloco1_06.webp",
    "/images/logos/bloco1_08.webp",
    "/images/logos/bloco1_09.webp",
    "/images/logos/bloco1_10.webp",
    "/images/logos/bloco1_12.webp",
    "/images/logos/bloco1_13.webp",
    "/images/logos/bloco1_14.webp",
    "/images/logos/bloco1_16.webp",
    "/images/logos/bloco1_17.webp",
    "/images/logos/bloco1_19.webp",
    "/images/logos/bloco1_20.webp",
    "/images/logos/bloco1_22.webp",
    "/images/logos/bloco1_24.webp",
    "/images/logos/bloco1_26.webp",
    "/images/logos/bloco1_29.webp",
    "/images/logos/bloco1_30.webp",
    "/images/logos/bloco1_31.webp",
    "/images/logos/bloco1_32.webp",
    "/images/logos/bloco1_33.webp",
    "/images/logos/bloco1_36.webp",
    "/images/logos/bloco1_37.webp",
    "/images/logos/bloco1_39.webp",
    "/images/logos/bloco1_40.webp",
    "/images/logos/bloco1_41.webp",
    "/images/logos/bloco1_42.webp",
    "/images/logos/bloco1_43.webp",
    "/images/logos/bloco1_44.webp",
    "/images/logos/bloco1_45.webp",
    "/images/logos/bloco1_46.webp",
    "/images/logos/bloco1_47.webp",
    "/images/logos/bloco1_49.webp",
    "/images/logos/bloco2_03.webp",
    "/images/logos/bloco2_05.webp",
    "/images/logos/bloco2_07.webp",
    "/images/logos/bloco2_09.webp",
    "/images/logos/bloco2_11.webp",
    "/images/logos/bloco2_13.webp",
    "/images/logos/bloco2_25.webp",
    "/images/logos/bloco2_26.webp",
    "/images/logos/bloco2_27.webp",
    "/images/logos/bloco2_28.webp",
    "/images/logos/bloco2_29.webp",
    "/images/logos/bloco2_30.webp",
    "/images/logos/bloco2_41.webp",
    "/images/logos/bloco2_42.webp",
    "/images/logos/bloco2_43.webp",
    "/images/logos/bloco2_44.webp",
    "/images/logos/bloco2_45.webp",
    "/images/logos/bloco2_46.webp",
    "/images/logos/bloco2_57.webp",
    "/images/logos/bloco2_58.webp",
    "/images/logos/bloco2_59.webp",
    "/images/logos/bloco2_60.webp",
    "/images/logos/bloco2_61.webp",
    "/images/logos/bloco2_62.webp",
    "/images/logos/bloco2_73.webp",
    "/images/logos/bloco2_74.webp",
    "/images/logos/bloco2_75.webp",
    "/images/logos/bloco2_76.webp",
    "/images/logos/bloco2_77.webp",
    "/images/logos/bloco2_78.webp",
    "/images/logos/Design sem nome.png",
    "/images/logos/Design sem nome (1).png",
    "/images/logos/Design sem nome (2).png",
    "/images/logos/Design sem nome (3).png",
    "/images/logos/Design sem nome (4).png",
    "/images/logos/Design sem nome (5).png",
    "/images/logos/Design sem nome (6).png",
    "/images/logos/Design sem nome (7).png",
    "/images/logos/Design sem nome (8).png",
    "/images/logos/Design sem nome (9).png",
    "/images/logos/Design sem nome (10).png",
    "/images/logos/Design sem nome (11).png",
    "/images/logos/Design sem nome (12).png",
    "/images/logos/Design sem nome (13).png",
    "/images/logos/Design sem nome (14).png",
    "/images/logos/Design sem nome (15).png",
    "/images/logos/Design sem nome (16).png",
    "/images/logos/Design sem nome (17).png",
    "/images/logos/Design sem nome (18).png",
    "/images/logos/Design sem nome (19).png",
    "/images/logos/Design sem nome (20).png",
    "/images/logos/Design sem nome (21).png",
    "/images/logos/Design sem nome (22).png",
    "/images/logos/Design sem nome (23).png",
    "/images/logos/Design sem nome (24).png",
    "/images/logos/Design sem nome (25).png",
    "/images/logos/Design sem nome (26).png",
    "/images/logos/Design sem nome (27).png",
    "/images/logos/Design sem nome (28).png",
    "/images/logos/Design sem nome (29).png",
    "/images/logos/Design sem nome (30).png",
    "/images/logos/LOGO MOD 2- PRETA.png",
    "/images/logos/cp 2 logo.png",
    "/images/logos/startupdigital.png",
    "/images/logos/logo sl.png",
    "/images/logos/logo_ag_influ_texto_gradiente.png",
    "/images/logos/0af5dd610013c61b39e34a46cebe8e9f.png"
  ]

  // Função para embaralhar o array
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  useEffect(() => {
    // Embaralhar o array de parceiros quando o componente montar
    setShuffledPartners(shuffleArray(partners))
  }, [])

  // Duplicar o array para criar o efeito contínuo
  const duplicatedPartners = [...shuffledPartners, ...shuffledPartners]

  // Criar um array que começa da primeira logo para o carrossel superior
  const topCarouselPartners = [...shuffledPartners, ...shuffledPartners]

  // Criar um array que começa da metade do array para o carrossel inferior
  const bottomCarouselPartners = [...shuffledPartners.slice(Math.floor(shuffledPartners.length / 2)), ...shuffledPartners, ...shuffledPartners.slice(0, Math.floor(shuffledPartners.length / 2))]

  return (
    <section className="py-16 overflow-hidden" id="parceiros">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOSSOS PARCEIROS</h2>
        <p className="text-xl text-gray-600 text-center mb-12">+ 900 empresas já descobriram o poder da eficiência incomparável dos IAgentes.</p>

        <div className="space-y-8">
          {/* Carrossel Superior */}
          <div className="relative w-[1000px] overflow-hidden mx-auto">
            <div className="w-[calc(160px*5+1rem*4)]">
              <div className="flex animate-carousel-top">
                {topCarouselPartners.map((logo: string, index: number) => (
                  <div
                    key={`top-${index}`}
                    className="flex-shrink-0 w-[160px] h-[80px] mx-2 flex items-center justify-center bg-white border border-gray-200 shadow-sm"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <div className="relative w-full h-full" style={{ backgroundColor: '#ffffff' }}>
                      <Image
                        src={logo}
                        alt={`Logo parceiro ${index + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="160px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carrossel Inferior */}
          <div className="relative w-[1000px] overflow-hidden mx-auto">
            <div className="w-[calc(160px*5+1rem*4)]">
              <div className="flex animate-carousel-bottom">
                {bottomCarouselPartners.map((logo: string, index: number) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex-shrink-0 w-[160px] h-[80px] mx-2 flex items-center justify-center bg-white border border-gray-200 shadow-sm"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <div className="relative w-full h-full" style={{ backgroundColor: '#ffffff' }}>
                      <Image
                        src={logo}
                        alt={`Logo parceiro ${index + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="160px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes carousel-top {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-160px * ${partners.length} - 1rem * ${partners.length}));
            }
          }

          @keyframes carousel-bottom {
            0% {
              transform: translateX(calc(-160px * ${partners.length} - 1rem * ${partners.length}));
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-carousel-top {
            animation: carousel-top 200s linear infinite;
            display: flex;
            width: fit-content;
            will-change: transform;
          }

          .animate-carousel-bottom {
            animation: carousel-bottom 200s linear infinite;
            display: flex;
            width: fit-content;
            will-change: transform;
          }

          .animate-carousel-top:hover,
          .animate-carousel-bottom:hover {
            animation-play-state: paused;
          }

          @media (max-width: 1024px) {
            .animate-carousel-top,
            .animate-carousel-bottom {
              animation-duration: 150s;
            }
          }

          @media (max-width: 768px) {
            .animate-carousel-top,
            .animate-carousel-bottom {
              animation-duration: 150s;
            }
          }
        `}</style>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Com os IAgentes, elas otimizaram seus processos de atendimento e vendas, alcançando resultados incríveis com aumento da produtividade e faturamento de forma significativa.
          </p>
        </div>

        {/* Seção: Quer saber mais sobre nossos serviços? */}
        <div className="bg-gray-50 py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Quer saber mais sobre nossos serviços?</h2>
            <p className="text-lg mb-8">
              Entre em contato conosco para descobrir como os lAgentes podem transformar sua empresa e impulsionar seus
              resultados.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/trabalhe-conosco">
                <Button className="button-glass min-w-[200px]">
                  Trabalhe conosco
                </Button>
              </Link>
              <Link href="/contato">
                <Button className="button-glass min-w-[200px]">Entre em contato</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Quer se tornar um representante comercial IAgente?</h2>
              <p className="text-lg mb-8 text-gray-300">
                Se você desejar ser um representante comercial IAgente ou se sua empresa oferece soluções complementares aos nossos serviços e você tem interesse em uma parceria estratégica, entre em contato.
              </p>
              <Link href="/representante">
              <Button className="button-glass min-w-[200px]">Entre em contato</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
