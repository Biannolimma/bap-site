import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'pt'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If locale is undefined, default to 'pt'
  const validLocale = (locale && locales.includes(locale as Locale)) ? locale : 'pt';

  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}.json`)).default
  };
});
