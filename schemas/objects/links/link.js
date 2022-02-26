// Packages
import {FaLink} from 'react-icons/fa'

export default {
  name: 'link',
  title: 'Link',
  icon: FaLink,
  type: 'object',
  fields: [
    {
      name: 'internal',
      title: 'Internal',
      type: 'internalLink',
      hidden: ({ parent, value }) => !value && parent?.external
    },
    {
      name: 'external',
      title: 'External',
      type: 'externalLink',
      hidden: ({ parent, value }) => !value && parent?.internal
    }
  ],
  preview: {
    select: {
      internalLabel: 'internal.label',
      internalURL: 'internal.page.slug.current',
      externalLabel: 'external.label',
      externalURL: 'external.url'
    },
    prepare({
      internalLabel,
      internalURL,
      externalLabel,
      externalURL
    }) {
      return {
        title: internalLabel ?? externalLabel,
        subtitle: internalURL ?? externalURL,
      }
    }
  }
}