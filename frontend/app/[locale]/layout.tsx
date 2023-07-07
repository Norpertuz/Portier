import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FC } from 'react';

import { authors } from '#data/metadata';
import { PrimaryLayout } from '#layouts/primary-layout';
import { LayoutProps } from '#types/props';
import 'normalize.css';

export const metadata: Metadata = {
  authors,
  title: 'Project 3723'
};

const RootLayout: FC<LayoutProps> = ({ children, params }) => {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <PrimaryLayout>
          { children }
        </PrimaryLayout>
      </body>
    </html>
  );
};

export default RootLayout;
