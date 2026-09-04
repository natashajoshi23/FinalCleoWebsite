import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {jobType} from './jobType'
import {teamMemberType} from './teamMemberType'
import {officeLocationType} from './officeLocationType'
import {seoType} from './seoType'
import {pageSeoType} from './pageSeoType'

export const schema = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    jobType,
    teamMemberType,
    officeLocationType,
    seoType,
    pageSeoType,
  ],
}
