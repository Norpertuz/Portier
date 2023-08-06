import { Link } from '#types/common';

const keys = ['portfolio', 'about-me', 'blog'] as const;
type Route = { [key in typeof keys[number]]: string };

export const externalLink = {
  designer: 'https://ui8.net/angel-uriostegui/products/designer--developer-ui-portfolio?rel=fycom'
};

export const route: Route = {
  'about-me': '/about-me',
  blog: '/blog',
  portfolio: '/portfolio'
};

export const navigationItems: Link[] = keys.map((key) => ({
  name: key,
  url: route[key]
}));
