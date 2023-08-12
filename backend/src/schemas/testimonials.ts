import { CardType } from '../types/card';

export const testimonials = {
  name: 'testimonials',
  title: 'Testimonials',
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
      name: 'bottom',
      title: 'Bottom Content',
      type: 'text',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'card',
              name: 'card',
            },
            {
              name: 'profession',
              title: 'Profession',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.custom((tiles?: CardType[]) => (tiles ? tiles.length <= 3 : true)).error('Maximum amount of cards: three'),
    },
  ],
};
