# Block And Play - Institutional Website

![Block And Play](https://img.shields.io/badge/Block%20And%20Play-Decentralized%20Gaming-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Site institucional do ecossistema Block And Play - uma plataforma descentralizada para jogos blockchain, NFTs e dApps.

## 🎮 Sobre o Projeto

Block And Play é um ecossistema descentralizado que integra:
- 🎯 Jogos blockchain com NFTs
- 🔗 dApps do ecossistema
- 👥 Comunidade de desenvolvedores e jogadores
- 💎 Marketplace de NFTs e tokens

Este repositório contém o site vitrine/institucional do projeto, desenvolvido com Next.js, React e TypeScript.

## 🚀 Começando

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 ou **yarn** >= 1.22.0
- **Git**

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Biannolimma/bap-site.git
   cd bap-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente** (opcional)
   ```bash
   cp .env.example .env.local
   ```
   Edite `.env.local` com suas configurações se necessário.

4. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Abra o navegador**
   
   Acesse [http://localhost:3000](http://localhost:3000) para ver o site rodando localmente.

## 📁 Estrutura do Projeto

```
bap-site/
├── app/                    # App Router do Next.js 14
│   ├── docs/              # Página de documentação
│   ├── login/             # Página de login/conexão de carteira
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Landing page (home)
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
├── public/                # Arquivos estáticos (imagens, etc.)
├── next.config.js         # Configuração do Next.js
├── tailwind.config.js     # Configuração do Tailwind CSS
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências e scripts
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa ESLint
```

## 🤝 Como Contribuir

Adoramos contribuições da comunidade! Siga estas etapas para contribuir:

### 1. Fork o Projeto

Clique no botão "Fork" no canto superior direito da página do repositório.

### 2. Clone seu Fork

```bash
git clone https://github.com/seu-usuario/bap-site.git
cd bap-site
```

### 3. Crie uma Branch

```bash
git checkout -b feature/minha-feature
# ou
git checkout -b fix/meu-fix
```

### 4. Faça suas Alterações

- Mantenha o código limpo e bem documentado
- Siga as convenções de código do projeto
- Teste suas alterações localmente

### 5. Commit suas Mudanças

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade X"
```

**Convenção de Commits:**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, sem mudança de código
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Atualizações de build, configurações, etc.

### 6. Push para o GitHub

```bash
git push origin feature/minha-feature
```

### 7. Abra um Pull Request

- Vá para o repositório original no GitHub
- Clique em "Pull Request" → "New Pull Request"
- Selecione sua branch e descreva as mudanças
- Aguarde a revisão do time

## 🎨 Padrões de Código

- **TypeScript**: Todo código deve ser tipado
- **ESLint**: Siga as regras do ESLint configuradas
- **Componentes**: Use componentes funcionais com hooks
- **Estilização**: Use Tailwind CSS para estilos
- **Nomenclatura**: 
  - Componentes: PascalCase (ex: `MyComponent.tsx`)
  - Funções: camelCase (ex: `myFunction`)
  - Constantes: UPPER_SNAKE_CASE (ex: `API_URL`)

## 🔗 Integrações Futuras

O ecossistema Block And Play está preparado para integrar diversos dApps:

### Planejadas

- **🔄 DEX (Decentralized Exchange)**: Exchange descentralizada para trading de tokens BAP
- **💰 Staking Platform**: Plataforma de staking para holders ganharem recompensas
- **🏛️ DAO Governance**: Sistema de governança descentralizado
- **🚀 Launchpad**: Plataforma para lançamento de novos projetos
- **🎨 NFT Marketplace**: Marketplace completo de NFTs do ecossistema
- **🎮 Gaming Hub**: Portal centralizado para todos os jogos BAP
- **👛 Multi-Chain Wallet**: Suporte para múltiplas blockchains

### Integrações com dApps Existentes

O site institucional servirá como:
- Portal de entrada para todos os dApps do ecossistema
- Dashboard unificado de usuário
- Sistema de autenticação Web3 compartilhado
- Documentação centralizada da API
- Analytics e métricas do ecossistema

## 🌐 Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)**: Framework React com App Router
- **[React 18](https://react.dev/)**: Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript tipado
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first
- **[ESLint](https://eslint.org/)**: Linter para qualidade de código

### Futuras Integrações Técnicas

- **Web3.js / Ethers.js**: Integração blockchain
- **WalletConnect**: Conexão de carteiras
- **IPFS**: Armazenamento descentralizado
- **The Graph**: Indexação de dados blockchain
- **Chainlink**: Oracles descentralizados

## 📚 Documentação Adicional

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do React](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🐛 Reportar Bugs

Encontrou um bug? Por favor, abra uma [issue](https://github.com/Biannolimma/bap-site/issues) com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Ambiente (SO, navegador, versão do Node, etc.)

## 💬 Comunidade e Suporte

- **Discord**: [Block And Play Community](#)
- **Twitter/X**: [@BlockAndPlay](#)
- **Telegram**: [@BAPCommunity](#)
- **Email**: dev@blockandplay.io

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Time

Mantido pela comunidade Block And Play.

---

**Desenvolvido com ❤️ pela comunidade Block And Play**