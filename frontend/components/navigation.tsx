'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { NavigationItem } from '#components/navigation-item';
import { navigationItems } from '#data/navigation';
import styles from '#styles/navigation.module.scss';
import { BaseProps } from '#types/props';

const Navigation: FC<BaseProps> = ({ className }) => {
  const t = useTranslations('Common.navigationItems');

  return (
    <nav className={className}>
      <ul className={styles.navigation__list}>
        {
            navigationItems.map(({ name, url }, index) => (
              <NavigationItem
                key={`NavigationItem-item-${index}-${name}`}
                url={url}
              >
                { t(name) }
              </NavigationItem>
            ))
          }
      </ul>
    </nav>
  );
};

export { Navigation };
