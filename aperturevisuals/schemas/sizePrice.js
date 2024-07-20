import {defineField, defineType} from 'sanity'

export const sizePrice = defineType({
    name: 'sizePrice',
    title: 'Size and Price',
    type: 'object',
    fields: [
      defineField({
        name: 'size',
        title: 'Size',
        type: 'string',
        options: {
          list: [
            { title: 'Small', value: 'small' },
            { title: 'Medium', value: 'medium' },
            { title: 'Large', value: 'large' }
          ]
        }
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'number'
      }),
    ]
  })