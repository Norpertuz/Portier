import { getExtension } from '@sanity/asset-utils';

export const information = {
  name: 'information',
  title: 'Information',
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
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
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
  ],
};
