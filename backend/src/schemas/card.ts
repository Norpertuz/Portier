import { getExtension } from '@sanity/asset-utils';

export const card = {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule: any) => rule.custom((value: any) => {
        if (!value) {
          return true;
        }
        const filetype = getExtension(value.asset._ref);
        if (filetype !== 'svg') {
          return 'Only .svg images are allowed';
        }

        return true;
      }),
    },
    {
      name: 'altText',
      title: 'Image alternative',
      type: 'string',
      validation: (rule: any) => rule.required().error('Alternative text must be provided'),
    },
  ],
};
