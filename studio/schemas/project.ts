export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This is the URL path for the project. It should be unique.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'newIndicator',
      title: 'New Indicator',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'newIndicatorText',
      title: 'New Indicator Text',
      type: 'string',
      description:
        'Text to display on the new indicator. A small colored badge will appear on the project card.',
      hidden: ({document}: {document: {newIndicator?: boolean}}) => !document?.newIndicator,
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {value: 'personal', title: 'Personal'},
          {value: 'client', title: 'Client'},
          {value: 'school', title: 'School'},
        ],
      },
    },
    {
      name: 'hostedLink',
      title: 'Hosted Link',
      type: 'url',
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
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
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sortOrder',
      title: 'Priority Index',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'My Priority',
      name: 'myPriority',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
}
