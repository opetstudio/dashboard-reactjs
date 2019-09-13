import { call, put } from 'redux-saga/effects'
import UserActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import _ from 'lodash'
import Cookies from 'universal-cookie'

// export const session = state => ({...state.login.single, token: state.login.token, isLoggedIn: state.login.isLoggedIn})
export const transformedData = response => getAttributes(response.data)

export function * userCreateRequest (api, action) {
  const { data } = action
  const response = yield call(api.userCreateRequest, data.payload, {url: data.url, method: data.method})
  console.log('response=>', response)
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    // message = '00'
  } else {
    responseMessage = response.problem
  }
  yield put(UserActions.userRequestPatch({isRequesting: false, responseCode, responseMessage}))
}
export function * userReadRequest (api, action) {
  const { data } = action
  console.log('action===>', action)
  const response = yield call(api.userReadRequest, data, {url: data.url, method: data.method})
  console.log('response=>', response)
  let dataUser = []
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    dataUser = path(['data', 'reports'], response) || []
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataUser = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(UserActions.userRequestPatch({isRequesting: false, responseCode, responseMessage, dataUser}))
}
