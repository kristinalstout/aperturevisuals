import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
        name: 'picture',
        type: 'image',
      }),
    defineField({
        name: 'byline',
        type: 'string',
      }),
  ],
})