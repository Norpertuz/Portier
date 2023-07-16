import Route from 'next/link';
import { FC } from 'react';

import styles from '#styles/navigation.module.scss';
import { NavigationItemProps } from '#types/props';

const NavigationItem: FC<NavigationItemProps> = ({ children, url }) => (
  <li>
    <Route className={styles.navigation__link} href={url}>
      { children }
    </Route>
  </li>
);

export { NavigationItem };
