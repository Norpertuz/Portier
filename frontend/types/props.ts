import { PropsWithChildren } from 'react';

import { Language } from './common';

export interface BaseProps {
  className?: string;
}

export interface ButtonProps extends BaseProps, NavigationItemProps {
  children: string;
  size?: 'md' | 'sm';
}

export type ContainerProps = BaseProps & PropsWithChildren;

export interface HamburgerProps {
  isOpened: boolean;
  onClick: () => void;
}

export type LayoutProps = Language & PropsWithChildren;

export interface NavigationItemProps
  extends PropsWithChildren {
  url: string;
}
