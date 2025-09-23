import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'salePrice',
      title: 'Sale Price',
      type: 'number',
    }),
     defineField({
      name: 'affiliateUrl',
      title: 'Affiliate URL',
      type: 'url',
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
        name: 'hoverImage',
        title: 'Hover image',
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
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string', title: 'Alternative text'}] }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
        name: 'subcategory',
        title: 'Subcategory',
        type: 'string',
      }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.min(0).max(5)
    }),
    defineField({
        name: 'reviews',
        title: 'Reviews',
        type: 'number',
    })
  ],
})
