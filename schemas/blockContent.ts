// schemas/blockContent.ts
export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
        ],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Code', value: 'code'},
          ],
        },
      },
      {
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          },
        ],
      },
    ],
  };