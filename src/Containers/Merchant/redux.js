import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  merchantCreateRequest: ['data'],
  merchantRequestPatch: ['data'],
  merchantReadRequest: ['data'],
  merchantReadOneRequest: ['data']
})

export const MerchantTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  merchantDetail: {}
})

/* ------------- Selectors ------------- */

export const MerchantSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  merchantDetail: st => st.merchantDetail
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
export const merchantReadOneRequest = (state, { data }) => {
  data.isRequesting = true
  return merchantRequestPatch(state, { data })
}
export const merchantRequestPatch = (state, { data }) => {
  // console.log('merchantRequestPatch invoked. dataMerchant=', data.dataMerchant)
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.hasOwnProperty('merchantDetail')) mergeData.merchantDetail = data.merchantDetail
  // if (data.pageSize) mergeData.pageSize = data.pageSize
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MERCHANT_READ_REQUEST]: merchantReadRequest,
  [Types.MERCHANT_READ_ONE_REQUEST]: merchantReadOneRequest,
  [Types.MERCHANT_CREATE_REQUEST]: merchantCreateRequest,
  [Types.MERCHANT_REQUEST_PATCH]: merchantRequestPatch
})
