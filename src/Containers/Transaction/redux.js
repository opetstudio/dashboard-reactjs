import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  transactionReadRequest: ['data'],
  transactionReadRequestPatch: ['data']
})

export const TransactionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isRequesting: false,
  responseMessage: '',
  responseCode: '',
  version: 0,
  dataTransaction: [],
  pages: 10,
  page: 0,
  pageSize: 10
//   rows: ''
})

/* ------------- Selectors ------------- */

export const TransactionSelectors = {
  isRequesting: st => st.isRequesting,
  responseMessage: st => st.responseMessage,
  responseCode: st => st.responseCode,
  page: st => st.page,
  pages: st => st.pages,
  pageSize: st => st.pageSize,
  dataTransaction: st => st.dataTransaction
//   rows: st => st.rows
}

/* ------------- Reducers ------------- */

export const transactionReadRequest = (state, { data }) => {
  console.log('redux transactionReadRequest invoked ', data)
  data.isRequesting = true
  return transactionReadRequestPatch(state, { data })
}
export const transactionReadRequestPatch = (state, { data }) => {
  let mergeData = {}
  if (data.hasOwnProperty('isRequesting')) mergeData.isRequesting = data.isRequesting
  if (data.responseCode) mergeData.responseCode = data.responseCode
  if (data.responseMessage) mergeData.responseMessage = data.responseMessage
  if (data.pageSize) mergeData.pages = data.pageSize
  if (data.pages) mergeData.pages = data.pages
  if (data.page) mergeData.page = data.page
  if (data.dataTransaction) {
    // let rows = ''
    // data.listall.forEach((v, k) => {
    //   rows += '<tr key="' + v.id + '"><td>Trident</td><td>Internet Explorer 4.0</td><td>Win 95+</td><td> 4</td><td>X</td></tr>'
    // })
    mergeData.dataTransaction = data.dataTransaction
    // mergeData.rows = rows
  }
  mergeData.version = state.version + 1
  return state.merge(mergeData)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSACTION_READ_REQUEST]: transactionReadRequest,
  [Types.TRANSACTION_READ_REQUEST_PATCH]: transactionReadRequestPatch
})
