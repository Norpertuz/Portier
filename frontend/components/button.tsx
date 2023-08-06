import Link from 'next/link';
import { FC } from 'react';

import { classNames } from '#data/functions';
import styles from '#styles/common.module.scss';
import { ButtonProps } from '#types/props';

const Button: FC<ButtonProps> = ({
  children, className = '', size = 'md', url
}) => (
  <Link
    className={classNames([size === 'md' ? styles.button : styles['button--sm'], className])}
    data-testid="button"
    href={url}
  >
    { children }
  </Link>
);

export { Button };
