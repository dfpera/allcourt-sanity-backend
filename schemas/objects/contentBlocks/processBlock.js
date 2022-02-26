export default {
  name: 'processBlock',
  title: 'Process Block',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'content',
      type: 'string',
    }
  ],
  preview: {
    prepare({}) {
      return {
        title: `[Process]`
      }
    }
  }
}