const introduction = {
  name: 'introduction',
  type: 'document',
  title: 'Introduction Section',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};

export { introduction };
