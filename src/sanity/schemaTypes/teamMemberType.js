import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Initials (fallback if no photo)',
      type: 'string',
      validation: Rule => Rule.max(3),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle (e.g. "The Inspiration")',
      type: 'string',
      description: 'Leave blank for regular team members',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Cleo = 0, Jai = 1, etc.',
      validation: Rule => Rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'subtitle', media: 'photo', order: 'order' },
    prepare({ title, subtitle, media, order }) {
      return { title: `${order}. ${title}`, subtitle, media }
    },
  },
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
