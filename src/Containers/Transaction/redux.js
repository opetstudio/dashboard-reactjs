import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  transactionPatch: ['data'],
  reset: null
})

export const TransactionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  responseDescription: ''
})

/* ------------- Selectors ------------- */

export const TransactionSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  responseDescription: st => st.responseDescription
}

/* ------------- Reducers ------------- */
// const transactionGetCredential = (state, { data }) => {
//   data.isRequesting = true
//   return transactionRequestPatch(state, { data })
// }
export const transactionPatch = (state, { data }) => {
  // console.log('transactionRequestPatch invoked. dataTransaction=', data.dataTransaction)
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.hasOwnProperty('responseCode')) mergeData.responseCode = data.responseCode
  if (data.hasOwnProperty('responseMessage')) mergeData.responseMessage = data.responseMessage
  if (data.hasOwnProperty('responseDescription')) mergeData.responseDescription = data.responseDescription
  // if (data.pageSize) mergeData.pageSize = data.pageSize
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSACTION_PATCH]: transactionPatch,
  [Types.RESET]: (state) => INITIAL_STATE
})
