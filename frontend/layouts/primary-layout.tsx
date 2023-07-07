import { FC, PropsWithChildren } from 'react';

import { Footer } from '#components/footer';
import { Header } from '#components/header';

const PrimaryLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    { children }
    <Footer />
  </>
);

export { PrimaryLayout };
