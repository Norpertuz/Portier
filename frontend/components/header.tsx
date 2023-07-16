'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useMemo, useState } from 'react';

import { Button } from '#components/button';
import { Container } from '#components/container';
import { Hamburger } from '#components/hamburger';
import { Logo } from '#components/logo';
import { Navigation } from '#components/navigation';
import { classNames } from '#data/functions';
import { externalLink } from '#data/navigation';
import styles from '#styles/header.module.scss';

const Header = () => {
  const t = useTranslations('Label');
  const [isOpened, setIsOpened] = useState(false);

  const headerInteractionClassName = useMemo(() => classNames([
    styles.header__interaction,
    isOpened ? 'md:translate-x-full' : 'md:translate-x-none'
  ]), [isOpened]);

  const handleHamburger = useCallback(() => setIsOpened((state) => !state), []);

  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Logo />
        <Hamburger isOpened={isOpened} onClick={handleHamburger} />
        <div className={headerInteractionClassName}>
          <Navigation className={styles.header__navigation} />
          <Button
            className={styles.header__button}
            size="sm"
            url={externalLink.designer}
          >
            { t('get-template') }
          </Button>
        </div>
      </Container>
    </header>
  );
};

export { Header };
