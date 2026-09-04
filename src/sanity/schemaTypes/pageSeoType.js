import {SearchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {SEO_PAGES, pageSeoDocId} from '../pages'

/**
 * One document per fixed page of the site (Home, Team, Contact, ...).
 *
 * These pages are built in code, so their SEO can't live on a content
 * document the way a blog post's does — this type gives each one a place
 * to hold its meta tags that an editor can change without a deploy.
 *
 * Each document uses a fixed id of `pageSeo.<pageId>` (see pageSeoDocId), so
 * the Studio and the frontend agree on which document belongs to which page
 * without anyone having to type a slug. The Studio structure creates them on
 * demand — editors never pick a document type or an id by hand.
 */
export const pageSeoType = defineType({
  name: 'pageSeo',
  title: 'Page SEO',
  type: 'document',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {id: '_id', metaTitle: 'seo.metaTitle'},
    prepare({id, metaTitle}) {
      const page = SEO_PAGES.find((p) => pageSeoDocId(p.id) === id.replace(/^drafts\./, ''))
      return {
        title: page ? page.title : 'Page SEO',
        subtitle: metaTitle || 'No SEO title set — using the page default',
      }
    },
  },
})
