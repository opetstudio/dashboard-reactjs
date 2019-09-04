import { call, put } from 'redux-saga/effects'
import MerchantActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import _ from 'lodash'
import Cookies from 'universal-cookie'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)

export function * merchantCreateRequest (api, action) {
  const { data } = action
  const response = yield call(api.merchantCreateRequest, data.payload, {url: data.url, method: data.method})
  console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  // if (!response.ok) {
  //   message = '00'
  // } else {
  //   responseMessage = response.problem
  // }
  yield put(MerchantActions.merchantCreateRequestPatch({isRequesting: false, responseCode, responseMessage}))
}
