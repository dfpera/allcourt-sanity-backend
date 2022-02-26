export default {
  name: 'copyBlock',
  title: 'Copy Block',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
  preview: {
    prepare({}) {
      return {
        title: `[Copy]`
      }
    }
  }
}