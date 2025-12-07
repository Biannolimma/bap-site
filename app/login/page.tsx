'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [walletConnected, setWalletConnected] = useState(false)

  const handleConnectWallet = async () => {
    // Placeholder for wallet connection logic
    // In a real implementation, this would integrate with Web3 providers
    setWalletConnected(true)
    alert('Wallet connection will be implemented with Web3 provider (MetaMask, WalletConnect, etc.)')
  }

  return (
    <main className="min-h-screen p-8 md:p-24">
      <nav className="mb-12">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Voltar para Home
        </Link>
      </nav>

      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Conectar</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Conecte sua carteira Web3 para acessar o ecossistema Block And Play
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          {!walletConnected ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Escolha sua carteira
              </h2>
              
              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-between p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🦊</span>
                  <span className="font-semibold">MetaMask</span>
                </span>
                <span className="text-gray-400">→</span>
              </button>

              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-between p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔗</span>
                  <span className="font-semibold">WalletConnect</span>
                </span>
                <span className="text-gray-400">→</span>
              </button>

              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-between p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">👛</span>
                  <span className="font-semibold">Coinbase Wallet</span>
                </span>
                <span className="text-gray-400">→</span>
              </button>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Não tem uma carteira?{' '}
                  <a 
                    href="https://metamask.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Criar uma carteira
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">Conectado!</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Sua carteira foi conectada com sucesso
                </p>
              </div>
              
              <div className="space-y-3">
                <Link
                  href="/docs"
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Explorar dApps
                </Link>
                <button
                  onClick={() => setWalletConnected(false)}
                  className="block w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                >
                  Desconectar
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Ao conectar, você concorda com nossos{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Termos de Serviço
            </a>{' '}
            e{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Política de Privacidade
            </a>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>🔒</span>
            <span>Conexão segura e descentralizada</span>
          </div>
        </div>
      </div>
    </main>
  )
}
