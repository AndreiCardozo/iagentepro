import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Clock, Globe, MessageSquare, Shield, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-blue-500" />,
      title: "Inteligência Avançada",
      description: "Algoritmos de IA de última geração para tomada de decisões inteligentes",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Disponibilidade 24/7",
      description: "Funcionamento ininterrupto sem pausas, férias ou licenças",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Comunicação Natural",
      description: "Interação humanizada com clientes e colaboradores",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Processamento Rápido",
      description: "Execução de tarefas em fração do tempo necessário para humanos",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Segurança de Dados",
      description: "Proteção avançada de informações confidenciais",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Multilíngue",
      description: "Comunicação fluente em diversos idiomas",
    },
  ]

  return (
    <section className="py-16 md:-mt-16 -mt-24" id="funcionalidades">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 md:mt-0 -mt-8 mt-16">SURPREENDA-SE COM AS FUNCIONALIDADES DOS IAGENTES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {features.map((feature, index) => (
            <Card key={index} className="card-glass-no-sweep">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">{feature.title}</h3>
                <p className="text-[#acb1b5]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/funcionalidades">
            <Button className="button-glass">
              Conheça todas as funcionalidades
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
