import {defineField, defineType} from 'sanity'

export const collection = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
    }),
    defineField({
        name: 'picture',
        type: 'image',
      }),
    defineField({
        name: 'description',
        type: 'string',
      }),
  ],
})