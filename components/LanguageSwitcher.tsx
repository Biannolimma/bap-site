'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common.languageSwitcher');

  const switchLocale = (newLocale: string) => {
    // Replace the current locale in the pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2">
      <span className="text-xs text-gray-600 dark:text-gray-400 px-2">
        {t('label')}:
      </span>
      <button
        onClick={() => switchLocale('pt')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          locale === 'pt'
            ? 'bg-blue-600 text-white font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to Portuguese"
      >
        PT
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-sm rounded transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
