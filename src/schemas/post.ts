import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
        }
      ]
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
    }),
    defineField({
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: Rule => Rule.max(200).warning('An excerpt longer than 200 characters may be truncated.')
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'array', 
        of: [{type: 'block'}]
    }),
    defineField({
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string',
        description: 'This will override the main title in search engine results. Keep it under 60 characters.'
    }),
    defineField({
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        description: 'This will be the meta description in search engine results. Keep it under 160 characters.'
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
