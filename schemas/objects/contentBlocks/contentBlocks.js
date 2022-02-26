export default {
  name: 'contentBlocks',
  title: 'Content Blocks',
  type: 'array',
  of: [
    {
      type: 'bioBlock'
    },
    {
      type: 'copyBlock'
    },
    {
      type: 'processBlock'
    },
  ]
}