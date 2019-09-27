import { call, put, select } from 'redux-saga/effects'
import TablepaginationActions from './redux'
import { getAttributes } from '../../Transforms/TransformAttributes'
import { merge, path } from 'ramda'
import {getAccessToken} from '../../Utils/Utils'
import _ from 'lodash'
import Cookies from 'universal-cookie'

export const session = state => ({
  sessionToken: state.login.sessionToken,
  isLoggedIn: state.login.isLoggedIn
})
export const transformedData = response => getAttributes(response.data)

export function * tablepaginationReadRequest (api, action) {
  const { data } = action
  // console.log('action===>', action)
  const s = yield select(session)
  const encryptedAccessToken = getAccessToken(s.sessionToken)
  const response = yield call(api.tablepaginationReadRequest, data, {encryptedAccessToken, url: data.url})
  // console.log('response=>', response)
  let dataTablepagination = []
  let pages = 0
  let responseCode = path(['data', 'responseCode'], response)
  let responseMessage = path(['data', 'responseMessage'], response)
  if (response.ok) {
    dataTablepagination = path(['data', 'reports'], response) || []
    pages = path(['data', 'pages'], response) || 0
    responseCode = 'MBDD00'
    responseMessage = 'SUCCESS'
  } else {
    dataTablepagination = []
    responseCode = 'MBDD01'
    responseMessage = 'FAILED'
  }
  yield put(TablepaginationActions.tablepaginationReadRequestPatch({isRequesting: false, responseCode, responseMessage, dataTablepagination, pages}))
}
