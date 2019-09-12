import { call, put } from 'redux-saga/effects'
import TransactionActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import _ from 'lodash'
import Cookies from 'universal-cookie'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)

export function * transactionReadRequest (api, action) {
  const { data } = action
  console.log('action===>', action)
  const response = yield call(api.transactionReadRequest, data, {url: data.url, method: data.method})
  console.log('response=>', response)
  let dataTransaction = []
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    dataTransaction = path(['data', 'reports'], response) || []
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataTransaction = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(TransactionActions.transactionReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTransaction}))
}
