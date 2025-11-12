import Image from "next/image"

export default function QuemSomosPage() {
  return (
    <div className="py-16" style={{ background: '#070c14' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Quem Somos</h1>
        <div className="h-1 w-24 bg-lagente mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Nossa História</h2>
              <p className="text-gray-300 mb-4">
                A lAgente nasceu da visão de revolucionar o mercado de trabalho através da inteligência artificial.
                Somos pioneiros na terceirização de funcionários de IA, oferecendo soluções inovadoras que transformam a
                maneira como as empresas operam.
              </p>
              <p className="text-gray-300">
                Nossa equipe é formada por especialistas em IA, desenvolvimento de software e negócios, unidos pelo
                propósito de criar agentes de inteligência artificial que executam funções empresariais com eficiência
                incomparável.
              </p>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <img
                src="/images/quemsomos1.webp"
                alt="Nossa História"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1 relative h-64 w-full rounded-lg overflow-hidden">
              <img
                src="/images/quemsomos2.webp"
                alt="Nossa Missão"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4 text-white">Nossa Missão</h2>
              <p className="text-gray-300 mb-4">
                Nossa missão é democratizar o acesso à tecnologia de ponta em inteligência artificial, permitindo que
                empresas de todos os portes possam se beneficiar da eficiência, precisão e disponibilidade que apenas os
                IAgentes podem oferecer.
              </p>
              <p className="text-gray-300">
                Buscamos transformar a maneira como as empresas operam, eliminando limitações humanas tradicionais e
                proporcionando um novo patamar de produtividade e excelência operacional.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#777b7e' }}>Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-glass p-6 rounded-lg" style={{ border: '1px solid #777b7e' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#777b7e' }}>Inovação</h3>
                <p style={{ color: '#acb1b5' }}>
                  Estamos sempre na vanguarda da tecnologia, buscando constantemente novas soluções para desafios
                  empresariais.
                </p>
              </div>
              <div className="card-glass p-6 rounded-lg" style={{ border: '1px solid #777b7e' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#777b7e' }}>Excelência</h3>
                <p style={{ color: '#acb1b5' }}>
                  Comprometemo-nos com a entrega de serviços de alta qualidade, superando as expectativas dos nossos
                  clientes.
                </p>
              </div>
              <div className="card-glass p-6 rounded-lg" style={{ border: '1px solid #777b7e' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#777b7e' }}>Ética</h3>
                <p style={{ color: '#acb1b5' }}>
                  Atuamos com transparência e responsabilidade, respeitando a privacidade dos dados e promovendo o uso
                  ético da inteligência artificial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
