import {defineField, defineType} from 'sanity'

export const print = defineType({
  name: 'print',
  title: 'Print',
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
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes and Prices',
      type: 'array',
      of: [{ type: 'sizePrice' }]
    }),
  ],
})