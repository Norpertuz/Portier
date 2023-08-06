import { FC } from 'react';

import { classNames } from '#data/functions';
import styles from '#styles/common.module.scss';
import { ContainerProps } from '#types/props';

const Container: FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={classNames([styles.container, className])}>
    { children }
  </div>
);

export { Container };
