import Link from 'next/link'
import { useTranslations } from 'next-intl';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const nav = useTranslations('common.navigation');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <nav className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          <div className="flex gap-8">
            <Link href={`/${locale}`} className="hover:underline">
              {nav('home')}
            </Link>
            <Link href={`/${locale}/docs`} className="hover:underline">
              {nav('docs')}
            </Link>
            <Link href={`/${locale}/login`} className="hover:underline">
              {nav('login')}
            </Link>
          </div>
        </nav>
      </div>

      <div className="relative flex place-items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text">
            {t('title')}
          </h1>
          <p className="text-2xl mb-8 text-gray-700 dark:text-gray-300">
            {t('subtitle')}
          </p>
          <p className="text-lg max-w-2xl mb-12 text-gray-600 dark:text-gray-400">
            {t('description')}
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <Link 
              href={`/${locale}/docs`}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('actions.getStarted')}
            </Link>
            <Link 
              href={`/${locale}/login`}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors font-semibold"
            >
              {t('actions.login')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t('features.gaming.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('features.gaming.description')}
              </p>
            </div>
            <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t('features.dapps.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('features.dapps.description')}
              </p>
            </div>
            <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{t('features.community.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('features.community.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            {t('sections.about.title')}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t('sections.about.description')}
          </p>
        </div>

        <Link
          href={`/${locale}/docs`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {t('sections.documentation.title')}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t('sections.documentation.description')}
          </p>
        </Link>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            {t('sections.ecosystem.title')}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t('sections.ecosystem.description')}
          </p>
        </div>

        <Link
          href={`/${locale}/login`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {t('sections.connect.title')}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {t('sections.connect.description')}
          </p>
        </Link>
      </div>
    </main>
  )
}
