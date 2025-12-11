import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'docs.metadata' });
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default function DocsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('docs');
  const nav = useTranslations('common.navigation');

  return (
    <main className="min-h-screen p-8 md:p-24">
      <nav className="mb-12">
        <Link href={`/${locale}`} className="text-blue-600 hover:underline">
          ← {nav('backToHome')}
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          {t('subtitle')}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-4">{t('sections.gettingStarted.title')}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                {t('sections.gettingStarted.intro')}
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-2">{t('sections.gettingStarted.prerequisites.title')}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {t.raw('sections.gettingStarted.prerequisites.items').map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">{t('sections.gaming.title')}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                {t('sections.gaming.intro')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('sections.gaming.dapps.title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('sections.gaming.dapps.description')}
                  </p>
                </div>
                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{t('sections.gaming.marketplace.title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('sections.gaming.marketplace.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">{t('sections.integrations.title')}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                {t('sections.integrations.intro')}
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold">{t('sections.integrations.dex.title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('sections.integrations.dex.description')}
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold">{t('sections.integrations.staking.title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('sections.integrations.staking.description')}
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold">{t('sections.integrations.dao.title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('sections.integrations.dao.description')}
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold">{t('sections.integrations.launchpad.title')}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('sections.integrations.launchpad.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">{t('sections.api.title')}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                {t('sections.api.intro')}
              </p>
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
                <code className="text-sm whitespace-pre">
                  {t('sections.api.codeExample')}
                </code>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">{t('sections.developers.title')}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                {t('sections.developers.intro')}
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Biannolimma/bap-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {t('sections.developers.buttons.github')}
                </a>
                <a 
                  href="#"
                  className="px-6 py-3 border-2 border-gray-800 dark:border-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {t('sections.developers.buttons.apiReference')}
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">{t('sections.support.title')}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                {t('sections.support.intro')}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {t.raw('sections.support.channels').map((channel: string) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
