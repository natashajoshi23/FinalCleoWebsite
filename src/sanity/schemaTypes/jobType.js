import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job Listing',
  type: 'document',
  initialValue: () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const random = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    return {
      jobId: `CLO-${random}`,
      isOpen: true,
      postedAt: new Date().toISOString(),
    }
  },
  fields: [
    defineField({
      name: 'jobId',
      title: 'Job ID',
      type: 'string',
      readOnly: false,
      validation: Rule => Rule.required().custom(async (jobId, context) => {
        const { document, getClient } = context
        const client = getClient({ apiVersion: '2024-01-01' })
        const existing = await client.fetch(
          `count(*[_type == "job" && jobId == $jobId && _id != $id])`,
          { jobId, id: document._id }
        )
        return existing === 0 || 'This Job ID already exists — save to regenerate'
      }),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Job Type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Contract', 'Remote'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'isOpen',
      title: 'Position Open?',
      type: 'boolean',
    }),
    defineField({
      name: 'postedAt',
      title: 'Date Posted',
      type: 'datetime',
    }),
  ],
})