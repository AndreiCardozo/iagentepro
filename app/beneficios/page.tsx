"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  DollarSign,
  UserCheck,
  Zap,
  BarChart,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Users,
  MessageSquare,
  ShieldCheck,
  Globe
} from "lucide-react"

export default function BeneficiosPage() {
  const beneficios = [
    {
      icon: <Clock className="h-12 w-12 text-lagente" />,
      title: "Atendimento 24/7",
      description:
        "IAgente fornece suporte, atendimento a clientes e fechamento de vendas 24 horas por dia, 7 dias por semana, sem necessidade de pausas ou férias.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-lagente" />,
      title: "Redução de Custos",
      description:
        "IAgente automatiza tarefas repetitivas e reduzir a necessidade de funcionários humanos, resultando em imensa economia de custos.",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-lagente" />,
      title: "Melhoria da Experiência do Cliente",
      description:
        "IAgente fornecer respostas rápidas e precisas às perguntas dos clientes, melhorando a experiência do cliente e aumentando a satisfação.",
    },
    {
      icon: <Zap className="h-12 w-12 text-lagente" />,
      title: "Personalização",
      description:
        "IAgente é treinado para fornecer recomendações personalizadas com base nas preferências e comportamentos dos clientes.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-lagente" />,
      title: "Análise de Dados",
      description:
        "IAgente analisa grandes volumes de dados para identificar tendências e padrões, ajudando a empresa a tomar decisões informadas.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-lagente" />,
      title: "Aumento da Eficiência",
      description:
        "IAgente automatiza tarefas rotineiras, liberando funcionários humanos para se concentrar em tarefas mais complexas.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-lagente" />,
      title: "Redução de Erros",
      description:
        "IAgente reduz erros e inconsistências no atendimento ao cliente, melhorando a qualidade do serviço.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-lagente" />,
      title: "Aumento da Conversão",
      description:
        "IAgente aumenta a conversão de leads em vendas, fornecendo respostas rápidas e precisas às perguntas dos clientes.",
    },
    {
      icon: <Users className="h-12 w-12 text-lagente" />,
      title: "Melhoria da Retenção de Clientes",
      description:
        "IAgente ajuda a melhorar a retenção de clientes, fornecendo suporte e atendimento personalizado e eficiente.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-lagente" />,
      title: "Análise de Feedback",
      description:
        "IAgente analisa feedback de clientes e fornece insights valiosos para a empresa, melhorando o serviço e a experiência do cliente.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-lagente" />,
      title: "Segurança de Dados",
      description:
        "IAgente segue protocolos rigorosos de segurança para proteger dados sensíveis dos clientes e da empresa, garantindo conformidade e confiança.",
    },
    {
      icon: <Globe className="h-12 w-12 text-lagente" />,
      title: "Escalabilidade Ilimitada",
      description:
        "IAgente cresce com o seu negócio, sendo capaz de atender desde pequenas equipes até operações globais sem perda de desempenho.",
    }
  ]

  return (
    <div className="py-16" style={{
      background: '#070c14'
    }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Benefícios</h1>
        <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card 
              key={index} 
              className="card-glass-no-sweep border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
                border: '1px solid #777b7e'
              }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-white">{beneficio.title}</h3>
                <p className="text-center leading-relaxed" style={{ color: '#acb1b5' }}>
                  {beneficio.description}
                </p>
              </CardContent>
            </Card>
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
