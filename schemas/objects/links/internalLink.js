// Packages
import {FaLink} from 'react-icons/fa'

export default {
  name: 'internalLink',
  title: 'Internal Link',
  icon: FaLink,
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page'
        },
        {
          type: 'blog'
        }
      ]
    },
    {
      name: 'anchor',
      title: 'Anchor',
      description: 'Add an optional anchor to the linked page here.',
      type: 'string'
    }
  ]
}