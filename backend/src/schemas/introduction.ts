import { card } from './card';
import { CardType } from '../types/card';

export const introduction = {
  name: 'introduction',
  title: 'Introduction',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'array',
      title: 'Title',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'tiles',
      title: 'Cards',
      type: 'array',
      of: [card],
      validation: (Rule: any) => Rule.custom((tiles?: CardType[]) => (tiles ? tiles.length <= 3 : true)).error('Maximum amount of cards: three'),
    },
  ],
};
