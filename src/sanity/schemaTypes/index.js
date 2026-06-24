import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {jobType} from './jobType'
import {teamMemberType} from './teamMemberType'
import {officeLocationType} from './officeLocationType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, jobType, teamMemberType, officeLocationType],
}