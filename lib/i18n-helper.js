import { getLocale } from 'next-intl/server';

export async function getMessages() {
  const locale = await getLocale();
  return (await import(`../messages/${locale}.json`)).default;
}

