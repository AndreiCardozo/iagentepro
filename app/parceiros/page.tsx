import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ParceirosPage() {
  const parceiros = [
    {
      nome: "TechAI Solutions",
      logo: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      descricao: "Especialistas em soluções de IA para empresas de todos os portes.",
      servicos: ["Consultoria em IA", "Desenvolvimento de algoritmos", "Integração de sistemas"],
    },
    {
      nome: "DataVoice",
      logo: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descricao: "Empresa líder em tecnologia de reconhecimento de voz e síntese vocal.",
      servicos: ["Síntese de voz personalizada", "Reconhecimento de voz avançado", "Análise de sentimento vocal"],
    },
    {
      nome: "CloudServe",
      logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descricao: "Infraestrutura em nuvem para hospedagem e processamento de IA.",
      servicos: ["Servidores dedicados para IA", "Armazenamento seguro", "Processamento de alto desempenho"],
    },
    {
      nome: "NLP Masters",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descricao: "Especialistas em processamento de linguagem natural e compreensão contextual.",
      servicos: ["Análise semântica", "Compreensão de linguagem", "Tradução automática"],
    },
    {
      nome: "SecureAI",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descricao: "Soluções de segurança e privacidade para sistemas de inteligência artificial.",
      servicos: ["Criptografia de dados", "Proteção contra ataques", "Conformidade com LGPD"],
    },
    {
      nome: "VisionTech",
      logo: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descricao: "Tecnologias de visão computacional e reconhecimento de imagens.",
      servicos: ["Reconhecimento facial", "Análise de imagens", "Detecção de objetos"],
    },
  ]

  return (
    <div className="py-16" style={{ background: '#070c14' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Nossos Parceiros</h1>
        <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg" style={{ color: '#acb1b5' }}>
            A lAgente trabalha com parceiros estratégicos que compartilham nossa visão de transformar o mercado através
            da inteligência artificial. Juntos, oferecemos soluções completas e integradas para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {parceiros.map((parceiro, index) => (
            <Card key={index} className="border-0 transition-all h-full" style={{ border: '1px solid #777b7e' }}>
              <CardHeader className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src={parceiro.logo || "/placeholder.svg"}
                    alt={parceiro.nome}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardTitle className="text-xl" style={{ color: '#777b7e' }}>{parceiro.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-4" style={{ color: '#acb1b5' }}>{parceiro.descricao}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-center" style={{ color: '#777b7e' }}>Serviços</h4>
                  <ul className="list-disc list-inside" style={{ color: '#acb1b5' }}>
                    {parceiro.servicos.map((servico, idx) => (
                      <li key={idx}>{servico}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#777b7e' }}>Quer se tornar um parceiro?</h2>
          <p className="mb-8" style={{ color: '#acb1b5' }}>
            Se sua empresa oferece soluções complementares aos nossos serviços e você tem interesse em uma parceria
            estratégica, entre em contato conosco.
          </p>
          <Link href="/contato">
            <Button className="button-glass">Entre em contato</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
