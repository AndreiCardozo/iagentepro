"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import { usePathname } from "next/navigation"
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const pathname = usePathname()
  const scrollToAnchor = useScrollToAnchor()

  // Função para criar links que funcionam tanto na homepage quanto em outras páginas
  const createLink = (href: string, label: string) => {
    const isAnchor = href.startsWith("#")
    const fullHref = isAnchor ? (pathname === "/" ? href : `/${href}`) : href

    return { href: fullHref, label, isAnchor }
  }

  const menuItems = [
    createLink("/", "Início"),
    createLink("#bem-vindo", "Quem somos"),
    createLink("#iagentes-profissionais", "lAgentes"),
    createLink("#funcionalidades", "Funcionalidades"),
    createLink("#parceiros", "Parceiros"),
    createLink("#beneficios", "Benefícios"),
    createLink("#contato", "Trabalhe conosco"),
    createLink("#contato", "Contato"),
  ]


  const agentCategories = [
    createLink("#iagentes-profissionais", "Atendimento"),
    createLink("#iagentes-profissionais", "Vendas"),
    createLink("#iagentes-profissionais", "Assistente"),
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/LOGO OK IAGENTE.webp"
                alt="IAgente"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Agentes de inteligência artificial profissionais que executam funções empresariais.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61569504495209"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lagente"
                aria-label="Siga-nos no Facebook"
                title="Siga-nos no Facebook"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/iagente_pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lagente"
                aria-label="Siga-nos no Instagram"
                title="Siga-nos no Instagram"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://www.threads.com/@iagente_pro" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lagente"
                aria-label="Siga-nos no Threads"
                title="Siga-nos no Threads"
              >
                <span className="text-lg font-bold flex items-center justify-center w-5 h-5">@</span>
                <span className="sr-only">Threads</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/iagente1/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lagente"
                aria-label="Siga-nos no LinkedIn"
                title="Siga-nos no LinkedIn"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#777b7e' }}>Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-lagente"
                    onClick={(e) => {
                      if (item.isAnchor) {
                        scrollToAnchor(e, item.href)
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#777b7e' }}>lAgentes</h3>
            <ul className="space-y-2">
              {agentCategories.map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-lagente"
                    onClick={(e) => {
                      if (category.isAnchor) {
                        scrollToAnchor(e, category.href)
                      }
                    }}
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#777b7e' }}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-de-privacidade" className="text-gray-300 hover:text-lagente">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-gray-300 hover:text-lagente">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <Link href="/politica-de-privacidade" className="hover:text-lagente">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-lagente">
                Termos de Uso
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} lAgente. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
