import {defineField, defineType} from 'sanity'

export const services = defineType({
  name: 'service',
  title: 'Service',
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
    defineField({
      name: 'collection',
      type: 'reference',
      to: [{type: 'collection'}]
    })
  ],
})