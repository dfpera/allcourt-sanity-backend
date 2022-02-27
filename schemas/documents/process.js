export default {
  name: 'process',
  title: 'Process',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'entryNum',
      title: 'Entry Number',
      type: 'number',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      description: 'Enter path to the image in Gatsby.',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'contentBlocks',
    }
  ]
}