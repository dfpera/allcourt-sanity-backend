export default {
  name: 'contributor',
  title: 'Contributor',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
}