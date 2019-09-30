import { call, put, select } from 'redux-saga/effects'
import TransactionActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'
import _ from 'lodash'
import Cookies from 'universal-cookie'

export const session = state => ({
  token: state.login.token,
  isLoggedIn: state.login.isLoggedIn,
  userMerchantCode: state.login.userMerchantCode
})
export const transformedData = response => getAttributes(response.data)

export function * transactionReadRequest (api, action) {
  const { data } = action
  // console.log('action===>', action)
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.token)
  const response = yield call(api.transactionReadRequest, data, {encryptedAccessToken, userMerchantCode: s.userMerchantCode})
  // console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(TransactionActions.transactionReadRequestPatch({isRequesting: false, responseCode, responseMessage}))
}
