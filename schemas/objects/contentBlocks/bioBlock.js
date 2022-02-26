export default {
  name: 'bioBlock',
  title: 'Bio Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'subtitle',
      type: 'string',
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [{type: 'contributor'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `[Bio] ${title}`
      }
    }
  }
}