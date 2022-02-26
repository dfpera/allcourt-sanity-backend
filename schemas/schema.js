// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

/**
 * Documents
 */
import blog from './documents/blog'
import page from './documents/page'
import settings from './documents/settings'

/**
 * Objects
 */
// BLOCKS
import bioBlock from './objects/contentBlocks/bioBlock'
import contentBlocks from './objects/contentBlocks/contentBlocks'
import copyBlock from './objects/contentBlocks/copyBlock'
import processBlock from './objects/contentBlocks/processBlock'

// LINKS
import externalLink from './objects/links/externalLink'
import internalLink from './objects/links/internalLink'
import link from './objects/links/link'

// OTHER
import contributor from './objects/contributor'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    /**
     * Documents
     */
    blog,
    page,
    settings,

    /**
     * Objects
     */
    // BLOCKS
    bioBlock,
    contentBlocks,
    copyBlock,
    processBlock,
    // LINKS
    externalLink,
    internalLink,
    link,
    // OTHER
    contributor
  ]),
})
