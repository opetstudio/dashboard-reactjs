import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tablepaginationReadRequest: ['data'],
  tablepaginationReadRequestPatch: ['data']
})

export const TablepaginationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0,
  dataTablepagination: [],
  pages: 10,
  page: 0,
  pageSize: 10
//   rows: ''
})

/* ------------- Selectors ------------- */

export const TablepaginationSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  page: st => st.page,
  pages: st => st.pages,
  pageSize: st => st.pageSize,
  dataTablepagination: st => st.dataTablepagination
//   rows: st => st.rows
}

/* ------------- Reducers ------------- */

export const tablepaginationReadRequest = (state, { data }) => {
  // console.log('redux tablepaginationReadRequest invoked ', data)
  data.isRequesting = true
  return tablepaginationReadRequestPatch(state, { data })
}
export const tablepaginationReadRequestPatch = (state, { data }) => {
  // console.log('tablepaginationReadRequestPatch==>', data)
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.hasOwnProperty('pageSize')) mergeData.pages = data.pageSize
  if (data.hasOwnProperty('pages')) mergeData.pages = data.pages
  if (data.hasOwnProperty('page')) mergeData.page = data.page
  if (data.hasOwnProperty('dataTablepagination')) mergeData.dataTablepagination = data.dataTablepagination
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TABLEPAGINATION_READ_REQUEST]: tablepaginationReadRequest,
  [Types.TABLEPAGINATION_READ_REQUEST_PATCH]: tablepaginationReadRequestPatch
})
