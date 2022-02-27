export default {
  name: 'copyBlock',
  title: 'Copy Block',
  type: 'object',
  fields: [
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare({title, subtitle}) {
      return {
        title: `[Copy] ${title ?? ''}`,
        subtitle: subtitle
      }
    }
  }
}