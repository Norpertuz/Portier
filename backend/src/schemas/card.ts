import { getExtension, getImageDimensions } from '@sanity/asset-utils';

export const card = {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Card Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Card content',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Your Image',
      type: 'image',
      validation: (rule: any) => rule.custom((value: any) => {
        if (!value) {
          return true;
        }
        const filetype = getExtension(value.asset._ref);
        if (filetype !== 'svg') {
          return 'Only .svg images are allowed';
        }

        const { width, height } = getImageDimensions(value.asset._ref);

        if (width < 64 || height < 64) {
          return 'Image must be at least 64x64 pixels';
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

export interface CardType {
  title: string;
  content: string;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  altText: string;
}
