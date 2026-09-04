import { SearchIcon } from '@sanity/icons'
import { SEO_PAGES, pageSeoDocId } from './pages'

export const structure = (S) =>
  S.list()
    .title('Cleo Consulting')
    .items([
      // One fixed entry per page of the site. Opening an entry creates its
      // document on first save, so editors never create these by hand.
      S.listItem().title('Page SEO').icon(SearchIcon).child(
        S.list()
          .title('Page SEO')
          .items(
            SEO_PAGES.map((page) =>
              S.listItem()
                .title(page.title)
                .id(page.id)
                .child(
                  S.document()
                    .schemaType('pageSeo')
                    .documentId(pageSeoDocId(page.id))
                    .title(page.title)
                )
            )
          )
      ),
      S.divider(),
      S.listItem().title('Team Members').schemaType('teamMember').child(
        S.documentTypeList('teamMember').title('Team Members').defaultOrdering([{ field: 'order', direction: 'asc' }])
      ),
      S.listItem().title('Office Locations').schemaType('officeLocation').child(
        S.documentTypeList('officeLocation').title('Office Locations').defaultOrdering([{ field: 'order', direction: 'asc' }])
      ),
      S.divider(),
      S.listItem().title('Job Listings').schemaType('job').child(
        S.documentTypeList('job').title('Job Listings')
      ),
      S.divider(),
      S.listItem().title('Blog Posts').schemaType('post').child(
        S.documentTypeList('post').title('Blog Posts')
      ),
      S.listItem().title('Categories').schemaType('category').child(
        S.documentTypeList('category').title('Categories')
      ),
      S.listItem().title('Authors').schemaType('author').child(
        S.documentTypeList('author').title('Authors')
      ),
    ])
