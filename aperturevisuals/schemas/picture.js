import {defineField, defineType} from 'sanity'

export const picture = defineType({
  name: 'picture',
  title: 'Picture',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),    
    defineField({
        name: 'id',
        type: 'number'
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