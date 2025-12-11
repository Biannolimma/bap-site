'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LoginPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const t = useTranslations('login')
  const nav = useTranslations('common.navigation')
  const params = useParams()
  const locale = params.locale as string

  const handleConnectWallet = async () => {
    // Placeholder for wallet connection logic
    // In a real implementation, this would integrate with Web3 providers
    setWalletConnected(true)
    alert(t('alert'))
  }

  return (
    <main className="min-h-screen p-8 md:p-24">
      <nav className="mb-12">
        <Link href={`/${locale}`} className="text-blue-600 hover:underline">
          ← {nav('backToHome')}
        </Link>
      </nav>

      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          {!walletConnected ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {t('chooseWallet')}
              </h2>
              
              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-between p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🦊</span>
                  <span className="font-semibold">{t('wallets.metamask')}</span>
                </span>
                <span className="text-gray-400">→</span>
              </button>

              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-between p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔗</span>
                  <span className="font-semibold">{t('wallets.walletconnect')}</span>
                </span>
                <span className="text-gray-400">→</span>
              </button>

              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-between p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">👛</span>
                  <span className="font-semibold">{t('wallets.coinbase')}</span>
                </span>
                <span className="text-gray-400">→</span>
              </button>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {t('noWallet')}{' '}
                  <a 
                    href="https://metamask.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {t('createWallet')}
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
                <h2 className="text-2xl font-semibold mb-2">{t('connected.title')}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('connected.description')}
                </p>
              </div>
              
              <div className="space-y-3">
                <Link
                  href={`/${locale}/docs`}
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {t('connected.exploreButton')}
                </Link>
                <button
                  onClick={() => setWalletConnected(false)}
                  className="block w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
                >
                  {t('connected.disconnectButton')}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {t('terms.intro')}{' '}
            <a href="#" className="text-blue-600 hover:underline">
              {t('terms.termsOfService')}
            </a>{' '}
            {t('terms.and')}{' '}
            <a href="#" className="text-blue-600 hover:underline">
              {t('terms.privacyPolicy')}
            </a>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>🔒</span>
            <span>{t('security')}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
