import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Reusable SEO field set.
 *
 * Embed it in any document type with:
 *   defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'})
 *
 * Every field is optional — the frontend falls back to the page's own
 * title/content when a field is left blank, so a half-filled SEO tab
 * never produces an empty meta tag.
 */
export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: false},
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'SEO Title (meta title)',
      type: 'string',
      description:
        'Shows as the clickable headline in Google. Aim for 50–60 characters. Leave blank to reuse the page title.',
      validation: (Rule) =>
        Rule.max(60).warning('Google usually cuts titles off after about 60 characters.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Description (meta description)',
      type: 'text',
      rows: 3,
      description:
        'The grey summary text under the headline in Google. Aim for 150–160 characters. Leave blank to use the default description for this page.',
      validation: (Rule) =>
        Rule.max(160).warning('Google usually cuts descriptions off after about 160 characters.'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
      description:
        'Optional. Google ignores the keywords meta tag, but some other tools read it. Safe to leave empty.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      options: {hotspot: true},
      description:
        'Image used when the page is shared on LinkedIn, Facebook or X. Best at 1200x630. Leave blank to use the page default.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false,
      description:
        'Turn on to tell Google not to list this page in search results. Leave off for normal pages.',
    }),
  ],
})
