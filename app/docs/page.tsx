import Link from 'next/link'

export const metadata = {
  title: 'Documentação - Block And Play',
  description: 'Documentação completa do ecossistema Block And Play',
}

export default function DocsPage() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <nav className="mb-12">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Voltar para Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Documentação</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Guia completo para desenvolvedores e usuários do ecossistema Block And Play
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-4">🚀 Começando</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Block And Play é um ecossistema descentralizado que integra jogos blockchain,
                NFTs, tokens e diversos dApps. Este guia ajudará você a começar.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-2">Pré-requisitos</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Carteira Web3 (MetaMask, WalletConnect, etc.)</li>
                  <li>Conhecimento básico de blockchain</li>
                  <li>Tokens para interagir com os dApps</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">🎮 Jogos e NFTs</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Os jogos do ecossistema BAP utilizam NFTs como ativos in-game,
                permitindo verdadeira propriedade digital dos seus itens.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gaming dApps</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Integração completa com jogos blockchain
                  </p>
                </div>
                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">NFT Marketplace</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compre, venda e troque NFTs do ecossistema
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">🔗 Integrações do Ecossistema</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                O ecossistema Block And Play está preparado para integrar diversos dApps:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold">DEX (Decentralized Exchange)</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Exchange descentralizada para trading de tokens BAP e outros ativos
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold">Staking Platform</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plataforma de staking para holders ganharem recompensas
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold">DAO Governance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sistema de governança descentralizado para decisões da comunidade
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold">Launchpad</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Plataforma para lançamento de novos projetos no ecossistema
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">⚙️ API e SDK</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Desenvolva aplicações integradas ao ecossistema BAP usando nossa API e SDKs.
              </p>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
                <code className="text-sm">
                  {`// Exemplo de integração
import { BAPClient } from '@bap/sdk'

const client = new BAPClient({
  network: 'mainnet',
  apiKey: 'your-api-key'
})

// Conectar carteira
await client.connect()

// Interagir com contratos
const balance = await client.getBalance()`}
                </code>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">🛠️ Para Desenvolvedores</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Quer contribuir com o ecossistema? Confira nosso guia de contribuição no GitHub!
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Biannolimma/bap-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="#"
                  className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  API Reference
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">💬 Suporte</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Precisa de ajuda? Entre em contato através dos nossos canais de suporte:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Discord: Comunidade Block And Play</li>
                <li>Twitter/X: @BlockAndPlay</li>
                <li>Telegram: @BAPCommunity</li>
                <li>Email: support@blockandplay.io</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
