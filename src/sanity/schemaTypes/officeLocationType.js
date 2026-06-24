import {defineField, defineType} from 'sanity'

export const officeLocationType = defineType({
  name: 'officeLocation',
  title: 'Office Location',
  type: 'document',
  fields: [
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Office Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      validation: Rule => Rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: { title: 'city', subtitle: 'country', order: 'order' },
    prepare({ title, subtitle, order }) {
      return { title: `${order}. ${title}`, subtitle }
    },
  },
})
