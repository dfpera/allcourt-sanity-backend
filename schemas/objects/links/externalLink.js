// Packages
import {FaLink} from 'react-icons/fa'

export default {
  name: 'externalLink',
  title: 'External Link',
  icon: FaLink,
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ]
}