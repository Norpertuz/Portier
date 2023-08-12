export const facts = {
  name: 'facts',
  title: 'Facts',
  type: 'document',
  fields: [
    {
      name: 'text',
      type: 'array',
      title: 'Text',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'infotiles',
      title: 'Infos',
      type: 'array',
      of: [
        {
          name: 'infos',
          type: 'object',
          title: 'Facts',
          fields: [
            {
              name: 'percentage',
              type: 'string',
              title: 'Percentage',
            },
            {
              name: 'content',
              type: 'text',
              title: 'Content',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.custom((infos?: any) => (infos ? infos.length <= 2 : true)).error('Maximum amount of infos: two'),
    },
  ],
};
