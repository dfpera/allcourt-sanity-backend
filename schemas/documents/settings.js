export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO'
    },
    {
      name: 'menu',
      title: 'Main Menu'
    },
    {
      name: 'footer',
      title: 'Footer'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Website Title',
      type: 'string',
      group: 'seo'
    },
    {
      name: 'description',
      title: 'Website Description',
      type: 'text',
      group: 'seo'
    },
    {
      name: 'keywords',
      title: 'Website Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      group: 'seo'
    },
    {
      name: 'menu',
      title: 'Main Menu',
      type: 'array',
      of: [{type: 'link'}],
      group: 'menu'
    }
  ]
}