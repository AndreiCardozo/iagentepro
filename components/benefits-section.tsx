import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart, DollarSign, LineChart, Rocket, ThumbsUp, Timer } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-blue-500" />,
      title: "Redução de Custos",
      description: "Economia significativa em folha de pagamento e benefícios",
    },
    {
      icon: <Timer className="h-10 w-10 text-blue-500" />,
      title: "Aumento de Produtividade",
      description: "Execução de tarefas com maior velocidade e precisão",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-blue-500" />,
      title: "Satisfação do Cliente",
      description: "Atendimento consistente e de alta qualidade",
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-500" />,
      title: "Escalabilidade",
      description: "Capacidade de crescer sem limitações de recursos humanos",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Análise de Dados",
      description: "Insights valiosos baseados em processamento avançado de dados",
    },
    {
      icon: <Rocket className="h-10 w-10 text-blue-500" />,
      title: "Vantagem Competitiva",
      description: "Diferenciação no mercado com tecnologia de ponta",
    },
  ]

  return (
    <section className="py-16" id="beneficios">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">CONHEÇA OS BENEFÍCIOS EM CONTRATAR UM IAGENTE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-glass-no-sweep">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-500">
                  {benefit.title}
                </h3>
                <p className="text-[#acb1b5]">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/beneficios">
            <Button className="button-glass">
              Conheça todos os benefícios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
