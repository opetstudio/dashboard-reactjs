import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  merchantCreateRequest: ['data'],
  merchantRequestPatch: ['data'],
  merchantReadRequest: ['data']
})

export const MerchantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0,
  dataMerchant: [],
  pages: 10,
  page: 0
})

/* ------------- Selectors ------------- */

export const MerchantSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  page: st => st.page,
  pages: st => st.pages,
  dataMerchant: st => st.dataMerchant
}

/* ------------- Reducers ------------- */

export const merchantCreateRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
export const merchantReadRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
export const merchantRequestPatch = (state, { data }) => {
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.pages) mergeData.pages = data.pages
  if (data.page) mergeData.page = data.page
  if (mergeData.dataMerchant) mergeData.dataMerchant = data.dataMerchant
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERCHANT_READ_REQUEST]: merchantReadRequest,
  [Types.MERCHANT_CREATE_REQUEST]: merchantCreateRequest,
  [Types.MERCHANT_REQUEST_PATCH]: merchantRequestPatch
})
