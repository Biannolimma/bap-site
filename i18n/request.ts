import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Default to 'pt' if locale is not provided
  const currentLocale = locale || 'pt';
  
  return {
    locale: currentLocale,
    messages: (await import(`../locales/${currentLocale}.json`)).default
  };
});
