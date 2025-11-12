import HeroBanner from "@/components/hero-banner"
import AgentSection from "@/components/agent-section"
import FeaturesSection from "@/components/features-section"
import SectorsCarousel from "@/components/sectors-carousel"
import BenefitsSection from "@/components/benefits-section"
import PartnersSection from "@/components/partners-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{
      background: '#070c14'
    }}>
      <div className="w-full">
        <HeroBanner />
      </div>

      <section className="py-12" id="bem-vindo">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Bem-vindo à lAgente</h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-300">
                A lAgente é uma empresa pioneira em terceirização de funcionários de IA. Nossos agentes de inteligência
                artificial profissionais são projetados para executar funções empresariais com eficiência incomparável,
                disponíveis 24/7 e sem as limitações humanas tradicionais. Oferecemos soluções personalizadas para
                atendimento, vendas e assistência administrativa, permitindo que sua empresa alcance novos patamares de
                produtividade e excelência operacional.
              </p>
            </div>

            <div className="w-full aspect-[5/7] md:aspect-[19/7] lg:aspect-[19/7] bg-gray-200 rounded-lg overflow-hidden mb-6 relative aspect-ratio-container">
              <Image
                src="/images/primeiraimagem.webp"
                alt="lAgente"
                fill
                className="object-cover md:hidden"
                style={{ objectPosition: "center" }}
              />
              <Image
                src="/images/Iagente_primeiraimagem_desktop.webp"
                alt="lAgente"
                fill
                className="object-cover hidden md:block"
                style={{ objectPosition: "center" }}
              />
            </div>

            <Link href="/quem-somos">
              <Button className="button-glass">
                Quem somos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AgentSection />
      <SectorsCarousel />
      <FeaturesSection />
      <BenefitsSection />
      <PartnersSection />
    </div>
  )
}
