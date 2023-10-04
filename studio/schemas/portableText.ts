// if you want to have a re-usable blockContent type,
//you need to create an object and add this as fields.
// In our case we are using this block content array directly in our page schema as a field.

import {defineField} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineField({
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',

      // INLINE BLOCKS
      // to understand what this does, visit: https://www.sanity.io/guides/add-inline-blocks-to-portable-text-editor
      of: [
        defineField({
          name: 'authorReference',
          type: 'reference',
          to: [{type: 'author'}],
        }),
      ],

      // Let's add some custom annotations by setting marks.annotations
      marks: {
        annotations: [
          //this is our external link object which we override from the default by defining it
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },

          // this is our internal link object which is a reference to page documents
          {
            name: 'internalLink',
            type: 'object',
            title: 'Link internal page',
            // we can add the icon which will show in the toolbar by importing an icon from a library or pasting in a react component.
            // we use import { LinkIcon } from '@sanity/icons' in this case
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{type: 'page'}],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
  ],
})
