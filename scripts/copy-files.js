const fs = require('fs');
const path = require('path');

// Arquivos e pastas que serão copiados
const filesToCopy = [
  'package.json',
  'next.config.mjs',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'tsconfig.json',
  'components.json',
  'next-env.d.ts',
  'public'
];

// Função para copiar arquivo ou pasta
function copyFileOrDir(source, target) {
  const stats = fs.statSync(source);
  
  if (stats.isDirectory()) {
    // Se for uma pasta, cria a pasta de destino e copia todo o conteúdo
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }
    
    const files = fs.readdirSync(source);
    files.forEach(file => {
      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);
      copyFileOrDir(sourcePath, targetPath);
    });
  } else {
    // Se for um arquivo, copia o arquivo
    fs.copyFileSync(source, target);
  }
}

// Cria a pasta dist se não existir
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copia cada arquivo/pasta
filesToCopy.forEach(file => {
  const source = path.join(process.cwd(), file);
  const target = path.join(process.cwd(), 'dist', file);
  
  if (fs.existsSync(source)) {
    copyFileOrDir(source, target);
    console.log(`Copied: ${file}`);
  } else {
    console.log(`Warning: ${file} not found`);
  }
});

console.log('Build files copied successfully to dist folder!'); 