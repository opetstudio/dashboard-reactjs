import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  merchantCreateRequest: ['data'],
  merchantCreateRequestPatch: ['data']
})

export const MerchantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0
})

/* ------------- Selectors ------------- */

export const MerchantSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode
}

/* ------------- Reducers ------------- */

export const merchantCreateRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantCreateRequestPatch(state, { data })
}
export const merchantCreateRequestPatch = (state, { data }) => {
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.responseCode) mergeData.responseCode = data.responseCode
  if (data.responseMessage) mergeData.responseMessage = data.responseMessage
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERCHANT_CREATE_REQUEST]: merchantCreateRequest,
  [Types.MERCHANT_CREATE_REQUEST_PATCH]: merchantCreateRequestPatch
})
