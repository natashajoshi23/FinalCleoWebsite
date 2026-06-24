export const structure = (S) =>
  S.list()
    .title('Cleo Consulting')
    .items([
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
