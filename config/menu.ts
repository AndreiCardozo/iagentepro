export interface MenuItem {
  href: string
  label: string
  isActive?: boolean
}

// Função para obter os itens do menu
export const getMenuItems = (): MenuItem[] => {
  return [
    {
      href: "/",
      label: "Início",
      isActive: true
    },
    {
      href: "#bem-vindo",
      label: "Quem somos"
    },
    {
      href: "#iagentes-profissionais",
      label: "lAgentes"
    },
    {
      href: "#funcionalidades",
      label: "Funcionalidades"
    },
    {
      href: "#beneficios",
      label: "Benefícios"
    },
    {
      href: "#parceiros",
      label: "Parceiros"
    },
    {
      href: "#contato",
      label: "Contato"
    }
  ]
}

// Exporta os itens do menu para uso inicial
export const menuItems = getMenuItems() 