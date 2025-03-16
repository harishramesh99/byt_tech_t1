export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    }
  ]
}