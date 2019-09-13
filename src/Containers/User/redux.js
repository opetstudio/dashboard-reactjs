import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userCreateRequest: ['data'],
  userRequestPatch: ['data'],
  userReadRequest: ['data']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0,
  dataUser: [],
  pages: 10,
  page: 0
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  page: st => st.page,
  pages: st => st.pages,
  dataUser: st => st.dataUser
}

/* ------------- Reducers ------------- */

export const userCreateRequest = (state, { data }) => {
  data.isRequesting = true
  return userRequestPatch(state, { data })
}
export const userReadRequest = (state, { data }) => {
  data.isRequesting = true
  return userRequestPatch(state, { data })
}
export const userRequestPatch = (state, { data }) => {
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.pages) mergeData.pages = data.pages
  if (data.page) mergeData.page = data.page
  if (mergeData.dataUser) mergeData.dataUser = data.dataUser
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_READ_REQUEST]: userReadRequest,
  [Types.USER_CREATE_REQUEST]: userCreateRequest,
  [Types.USER_REQUEST_PATCH]: userRequestPatch
})
