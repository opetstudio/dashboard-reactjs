import { call, put, select } from 'redux-saga/effects'
import MerchantActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'
import LoginActions from '../Login/redux'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)
export const session = state => ({
  ...state.login.single,
  token: state.login.token,
  sessionToken: state.login.sessionToken,
  isLoggedIn: state.login.isLoggedIn
})
export function * merchantGetCredential (api, action) {
  const { data } = action
  const s = yield select(session)
  const response = yield call(api.merchantGetCredential, {}, {merchantCode: data.merchantCode, session: {access_token: getAccessToken(s.sessionToken)}})
  console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let responseDescription = path(['data', 'responseDescription'], response)
  const merchantCredential = path(['data', 'merchantCredential'], response)
  if (response.ok) {
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
    responseDescription = 'SUCCESS'
  } else {
    responseCode = 'MBDD99'
    responseMessage = 'FAILED_SYSTEM'
    responseDescription = response.problem
  }
  yield put(MerchantActions.merchantRequestPatch({responseDescription, isRequesting: false, responseCode, responseMessage, merchantCredential}))
}
