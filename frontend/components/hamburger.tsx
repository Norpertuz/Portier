import { FC } from 'react';

import { classNames } from '#data/functions';
import styles from '#styles/hamburger.module.scss';
import { HamburgerProps } from '#types/props';

const getIngredientClassName = (isActivated: boolean) => classNames([
  styles.hamburger__ingredient,
  isActivated ? styles['hamburger--active'] : ''
]);

const Hamburger: FC<HamburgerProps> = ({ isOpened, onClick }) => (
  <button
    className={styles.hamburger}
    type="button"
    onClick={onClick}
  >
    <span className={styles.hamburger__wrapper}>
      <span className={getIngredientClassName(isOpened)} />
    </span>
  </button>
);

export { Hamburger };
