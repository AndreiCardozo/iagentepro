"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { useScrollToAnchor } from "@/hooks/use-scroll-to-anchor"
import { useMediaQuery } from "@/hooks/use-media-query"
import { getMenuItems, MenuItem } from "@/config/menu"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentMenuItems, setCurrentMenuItems] = useState<MenuItem[]>(getMenuItems())
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const scrollToAnchor = useScrollToAnchor()
  const isMobile = useMediaQuery("(max-width: 1102px)")
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Atualiza os itens do menu quando o pathname mudar
    const updatedMenuItems = getMenuItems().map(item => ({
      ...item,
      isActive: pathname === item.href || (item.href.startsWith('#') && pathname === '/')
    }))
    setCurrentMenuItems(updatedMenuItems)
  }, [pathname])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Função para criar links que funcionam tanto na homepage quanto em outras páginas
  const createLink = (href: string, label: string, isActive?: boolean) => {
    const isAnchor = href.startsWith("#")
    const fullHref = isAnchor ? (pathname === "/" ? href : `/${href}`) : href

    return { href: fullHref, label, isAnchor, isActive }
  }

  const menuItemsWithLinks = currentMenuItems.map((item: MenuItem) => 
    createLink(item.href, item.label, item.isActive)
  )

  return (
    <header className={`w-full border-b border-black fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`} style={{
      background: 'rgba(7, 8, 13, 0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO OK IAGENTE.webp"
              alt="lAgente Logo"
              width={240}
              height={80}
              className="h-14 w-auto object-contain sm:h-11 h-9"
            />
          </Link>

          {isMobile ? (
            <div className="relative" ref={menuRef}>
              <Button variant="ghost" size="icon" aria-label="Menu" onClick={toggleMenu} className="focus:outline-none p-3 text-gray-300">
                {menuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
              </Button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-md bg-black py-3 shadow-lg ring-1 ring-gray-600 ring-opacity-5 z-50">
                  <nav className="flex flex-col">
                    {menuItemsWithLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`px-4 py-3 text-base transition-all duration-300 ${
                          item.isActive 
                            ? 'bg-gray-800 text-gray-300' 
                            : 'text-gray-300 hover:!text-lagente'
                        }`}
                        onClick={(e) => {
                          if (item.isAnchor) {
                            scrollToAnchor(e, item.href)
                          }
                          setMenuOpen(false)
                        }}
                        aria-label={`Navegar para ${item.label}`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <nav className="flex items-center space-x-6">
              {menuItemsWithLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[1.125rem] font-medium transition-all duration-300 ${
                    item.isActive 
                      ? 'text-gray-300' 
                      : 'text-gray-300 hover:!text-lagente'
                  }`}
                  onClick={(e) => {
                    if (item.isAnchor) {
                      scrollToAnchor(e, item.href)
                    }
                  }}
                  aria-label={`Navegar para ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
