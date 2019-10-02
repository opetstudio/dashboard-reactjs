import { call, put, select } from 'redux-saga/effects'
import MerchantActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)
export const session = state => ({
  ...state.login.single,
  token: state.login.token,
  sessionToken: state.login.sessionToken,
  isLoggedIn: state.login.isLoggedIn
})

export function * merchantCreateRequest (api, action) {
  const { data } = action
  const response = yield call(api.merchantCreateRequest, data.payload, {url: data.url, method: data.method})
  // console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    // message = '00'
  } else {
    responseMessage = response.problem
  }
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage}))
}
export function * merchantReadRequest (api, action) {
  const { data } = action
  // console.log('action===>', action)
  const response = yield call(api.merchantReadRequest, data, {url: data.url, method: data.method})
  // console.log('response=>', response)
  let dataMerchant = []
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  let pages = 0
  if (response.ok) {
    dataMerchant = path(['data', 'merchants'], response) || []
    pages = parseInt(path(['data', 'pages'], response) || 0)
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataMerchant = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  console.log('dataMerchant', dataMerchant)
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage, dataMerchant, pages}))
}
export function * merchantReadOneRequest (api, action) {
  const { data } = action
  console.log('merchantReadOneRequest data=', data)
  const s = yield select(session)
  const response = yield call(api.merchantReadOneRequest, data, {merchantCode: data.merchantCode, session: {access_token: getAccessToken(s.sessionToken)}})
  console.log('response=>', response)
  let merchantDetail = path(['data'], response)
  let responseMessage = ''
  let responseCode = ''
  if (response.ok) {
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(MerchantActions.merchantRequestPatch({isRequesting: false, responseCode, responseMessage, merchantDetail}))
}
