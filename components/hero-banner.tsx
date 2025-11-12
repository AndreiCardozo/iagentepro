"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    
    {
      image: "/images/bannerhomepage-assistentepessoal.webp",
      mobileImage: "/images/celularbanner-assistentepessoal.webp",
      alt: "Agente Assistente Pessoal",
      title: "",
    },
    {
      image: "/images/bannerhomepage-secretária.webp",
      mobileImage: "/images/celularbanner-secretaria.webp",
      alt: "Agente Secretária",
      title: "",
    },
    {
      image: "/images/bannerhomepage-sac.webp",
      mobileImage: "/images/celularbanner-sac.webp",
      alt: "Agente Suporte",
      title: "",
    },
    {
      image: "/images/bannerhomepage-prospector.webp",
      mobileImage: "/images/celularbanner-prospector.webp",
      alt: "Agente Prospector",
      title: "",
    },
    {
      image: "/images/bannerhomepage-sdr.webp",
      mobileImage: "/images/celularbanner-sdr.webp",
      alt: "Agente SDR",
      title: "",
    },
    {
      image: "/images/bannerhomepage-closer.webp",
      mobileImage: "/images/celularbanner-closer.webp",
      alt: "Agente Closer",
      title: "",
    },
    {
      image: "/images/bannerhomepage-cobrador.webp",
      mobileImage: "/images/celularbanner-cobrador.webp",
      alt: "Agente Cobrador",
      title: "",
    },
    {
      image: "/images/bannerhomepage-recuperadordevendas.webp",
      mobileImage: "/images/celularbanner-recuperadordevendas.webp",
      alt: "Agente Recuperador",
      title: "",
    },
    {
      image: "/images/bannerhomepage-financeiro.webp",
      mobileImage: "/images/celularbanner-financeiro.webp",
      alt: "Agente Financeiro",
      title: "",
    },
    {
      image: "/images/bannerhomepage-socialmedia.webp",
      mobileImage: "/images/celularbanner-socialmidia.webp",
      alt: "Agente Social Media",
      title: "",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [banners.length])

  return (
    <div className="relative w-full h-[85vh] overflow-hidden" style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 100%, #0d1b34, transparent), #000000'
    }}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full h-12 w-12 hidden sm:flex"
        style={{
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          border: '1px solid rgba(192,192,192,0.3)'
        }}
        onClick={prevSlide}
        aria-label="Slide anterior do carrossel"
        title="Slide anterior"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full h-12 w-12 hidden sm:flex"
        style={{
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          border: '1px solid rgba(192,192,192,0.3)'
        }}
        onClick={nextSlide}
        aria-label="Próximo slide do carrossel"
        title="Próximo slide"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </Button>

      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={banner.image || "/placeholder.svg"}
            alt={banner.alt}
            fill
            className="object-cover w-full h-full hidden md:block"
            style={{ objectPosition: "center" }}
            priority={index === 0}
            sizes="100vw"
          />
          <Image
            src={banner.mobileImage || "/placeholder.svg"}
            alt={banner.alt}
            fill
            className="object-cover w-full h-full md:hidden"
            style={{ objectPosition: "center" }}
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">{banner.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}
