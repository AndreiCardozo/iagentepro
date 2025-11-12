const fs = require('fs');
const path = require('path');

// Lista de todas as páginas de IAgentes
const iagentePages = [
  'app/iagente/cobrador/page.tsx',
  'app/iagente/prospector/page.tsx',
  'app/iagente/recuperador/page.tsx',
  'app/iagente/sdr/page.tsx',
  'app/iagente/secretaria/page.tsx',
  'app/iagente/financeiro/page.tsx',
  'app/iagente/social-midia/page.tsx'
];

// Função para atualizar uma página
function updatePage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Adicionar estado showRedirectMessage
    if (!content.includes('showRedirectMessage')) {
      content = content.replace(
        'const [showSetorModal, setShowSetorModal] = useState(false)',
        'const [showSetorModal, setShowSetorModal] = useState(false)\n  const [showRedirectMessage, setShowRedirectMessage] = useState(false)'
      );
    }
    
    // Atualizar handleSetorSelect
    if (content.includes('window.open(whatsappUrl, \'_blank\')')) {
      content = content.replace(
        /const handleSetorSelect = \(setor: string\) => \{[\s\S]*?window\.open\(whatsappUrl, '_blank'\)[\s\S]*?setShowSetorModal\(false\)[\s\S]*?\}/,
        `const handleSetorSelect = (setor: string) => {
    setShowSetorModal(false)
    setShowRedirectMessage(true)
    
    // Mostrar mensagem por 3 segundos
    setTimeout(() => {
      setShowRedirectMessage(false)
      
      // Redirecionar para WhatsApp
      const mensagem = \`Olá! Atuo no setor de \${setor}, e gostaria de ver na prática o IAgente ${getIagenteName(filePath)}.\`
      const whatsappUrl = \`https://api.whatsapp.com/send/?phone=5521987572816&text=\${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0\`
      window.open(whatsappUrl, '_blank')
    }, 3000)
  }`
      );
    }
    
    // Adicionar popup de redirecionamento antes do fechamento da seção
    if (!content.includes('Mensagem de redirecionamento')) {
      const popupContent = `
      {/* Mensagem de redirecionamento */}
      {showRedirectMessage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-md w-full text-center animate-scale-in">
            <div className="mb-6">
              {/* Spinner animado */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-purple-400 animate-spin"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
              
              {/* Texto com animação de digitação */}
              <h3 className="text-2xl font-bold text-white mb-3 animate-pulse">
                Redirecionando...
              </h3>
              
              {/* Pontos animados */}
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              
              <p className="text-gray-300 text-lg animate-fade-in-up">
                Você está sendo direcionado para conversar com o IAgente
              </p>
            </div>
          </div>
        </div>
      )}`;
      
      content = content.replace(
        /(\s*)(<\/style>)/,
        `$1${popupContent}\n$1$2`
      );
    }
    
    // Adicionar estilos CSS para animações
    if (!content.includes('@keyframes fade-in')) {
      content = content.replace(
        /(\s*)(<\/style>)/,
        `$1
        /* Animações personalizadas para o popup de redirecionamento */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }$1$2`
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Atualizado: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Erro ao atualizar ${filePath}:`, error.message);
  }
}

// Função para obter o nome do IAgente baseado no caminho do arquivo
function getIagenteName(filePath) {
  const match = filePath.match(/\/([^\/]+)\/page\.tsx$/);
  if (match) {
    const name = match[1];
    const nameMap = {
      'cobrador': 'Cobrador',
      'prospector': 'Prospector',
      'recuperador': 'Recuperador',
      'sdr': 'SDR',
      'secretaria': 'Secretária',
      'financeiro': 'Financeiro',
      'social-midia': 'Social Mídia'
    };
    return nameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
  }
  return 'IAgente';
}

// Executar atualizações
console.log('🚀 Iniciando atualização das páginas de IAgentes...\n');

iagentePages.forEach(page => {
  updatePage(page);
});

console.log('\n✨ Todas as páginas foram atualizadas com sucesso!');
