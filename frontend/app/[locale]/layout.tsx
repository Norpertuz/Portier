import { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { notFound } from 'next/navigation';
import { AbstractIntlMessages, NextIntlClientProvider, useLocale } from 'next-intl';
import { FC } from 'react';

import { authors } from '#data/metadata';
import { PrimaryLayout } from '#layouts/primary-layout';
import { LayoutProps } from '#types/props';
import 'normalize.css';
import '#styles/global.scss';

export const metadata: Metadata = {
  authors,
  title: 'Project 3723'
};

const font = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

// export const generateStaticParams = () => [{ locale: 'en' }];

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
  const locale = useLocale();
  const messages: AbstractIntlMessages = (await import(`../../lang/${locale}.json`)).default;

  if (!messages || params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={font.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PrimaryLayout>
            { children }
          </PrimaryLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
