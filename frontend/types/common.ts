export interface Language {
  params: {
    locale: string;
  }
}

export type Link = { [key in 'name' | 'url']: string; };
