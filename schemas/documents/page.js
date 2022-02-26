export default {
  name: 'page',
  title: 'Pages',
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
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'contentBlocks',
    }
  ]
}