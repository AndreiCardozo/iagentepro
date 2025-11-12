import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Agent {
  name: string
  image: string
  description: string
  link: string
  imageSize?: string
}

interface AgentCategory {
  title: string
  agents: Agent[]
}

export default function AgentSection() {
  const agentCategories: AgentCategory[] = [
    {
      title: "ATENDIMENTO",
      agents: [
        {
          name: "Assistente Pessoal",
          image: "/images/card-assistentepessoal.webp",
          description: "Assistente pessoal eficiente, ajuda em tarefas atendendo ligações, respondendo mensagens, agendando compromissos, e mais.",
          link: "/iagente/assistente",
        },
        {
          name: "Secretária",
          image: "/images/card-secretaria.webp",
          description:
            "Secretária extremamente capacitada e eficiente prestando um atendimento de excelência na sua empresa, clínica, consultório.",
          link: "/iagente/secretaria",
        },
        {
          name: "Atendimento ao cliente",
          image: "/images/card-sac.webp",
          description:
            "Suporte técnico ou SAC prestando atendimento, tirando dúvida, informando, auxiliando o cliente de forma rápida e eficiente.",
          link: "/iagente/atendimento-ao-cliente",
        },
      ],
    },
    {
      title: "COMERCIAL",
      agents: [
        {
          name: "Prospector",
          image: "/images/card-prospector.webp",
          description: "Especialista em prospecção e captação de leads qualificados, gerando milhares de oportunidades de negócio.",
          link: "/iagente/prospector",
        },
        {
          name: "SDR",
          image: "/images/card-sdr.webp",
          description: "Especialista em qualificação de leads, realiza o primeiro contato com o potencial cliente identificando as melhores oportunidades.",
          link: "/iagente/sdr",
        },
        {
          name: "Closer",
          image: "/images/card-closer.webp",
          description:
            "Especialista em vendas extremamente treinado e eficiente, fecha mais vendas do que uma equipe de humanos com 100 vendedores.",
          link: "/iagente/closer",
        },
        {
          name: "Cobrador",
          image: "/images/card-cobrador.webp",
          description: "Especialista em cobrança e recuperação de crédito, realiza cobranças inteligentes que seus cliente não podem ignorar.",
          link: "/iagente/cobrador",
        },
        {
          name: "Recuperador de vendas",
          image: "/images/card-recuperadordevenda.webp",
          description: "Especialista em recuperação de vendas, recupera até 70% das vendas 'perdidas' aumentando o faturamento.",
          link: "/iagente/recuperador",
        },
      ],
    },
    {
      title: "ASSISTENTE",
      agents: [
        {
          name: "Financeiro",
          image: "/images/card-financeiro.webp",
          description:
            "Especialista em departamento financeiro que realiza o trabalho burocrático do pós venda e conecta o financeiro a contabilidade.",
          link: "/iagente/financeiro",
        },
        {
          name: "Social midia",
          image: "/images/card-social.webp",
          description: "Especialista em gestão de redes sociais, gerência todas as redes sociais gerando engajamento e impulsionamento nas redes.",
          link: "/iagente/social-midia",
        },
      ],
    },
  ]

  return (
    <section id="iagentes-profissionais" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">IAGENTES PROFISSIONAIS</h2>
        <div className="relative w-32 h-1 mx-auto mb-12">
          {/* Linha base */}
          <div className="absolute inset-0 bg-current opacity-30"></div>
          
          {/* Efeito neon zigzag animado */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-current to-transparent animate-zigzag"></div>
          </div>
          
          {/* Brilho adicional */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-60 animate-pulse"></div>
        </div>

        {agentCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#777b7e' }}>{category.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.agents.map((agent, agentIndex) => (
                <Card
                  key={agentIndex}
                  className="card-glass overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{agent.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{agent.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Link href={agent.link} className="w-full">
                      <Button
                        className="button-glass w-full"
                      >
                        &lt;&lt; Conheça &gt;&gt;
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
