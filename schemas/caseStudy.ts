// schemas/caseStudy.js
export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'solutions',
        title: 'Solution Highlights',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'metrics',
        title: 'Impact Metrics',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
          },
        ],
      },
    ],
  };
  