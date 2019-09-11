import { takeLatest, all } from 'redux-saga/effects'
// You'll need to alter this file when you go to connect the api for realsies. Add
// back the lines ending with with a # (and of course, remove the #) :)
import API from '../Services/Api'
import RehydrationServices from '../Services/RehydrationServices'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'
import AppConfig from '../Config/AppConfig'

// Types /* ------------- Types ------------- */

// begin Ignite-Entity-Login
import { LoginTypes } from '../Containers/Login/redux'
// end Ignite-Entity-Login
import { MerchantTypes } from '../Containers/Merchant/redux'

// begin Ignite-Entity-Paymentpage
// import { PaymentpageTypes } from '../Containers/Paymentpage/redux'
// end Ignite-Entity-Paymentpage
// begin Ignite-Entity-Qrcode
// import { QrcodeTypes } from '../Containers/Qrcode/redux'
// end Ignite-Entity-Qrcode

import { StartupTypes } from '../Redux/StartupRedux'
// Sagas /* ------------- Sagas ------------- */

// begin Ignite-Entity-Login
import {
  loginDoLogin, loginCheckStatus,
  postLogin,
  getLogins,
  getLogin,
  updateLogin,
  removeLogin
} from '../Containers/Login/sagas'
// end Ignite-Entity-Login
import {merchantCreateRequest} from '../Containers/Merchant/sagas'

// begin Ignite-Entity-Paymentpage
// import { paymentpageRequest } from '../Containers/Paymentpage/sagas'
// end Ignite-Entity-Paymentpage
// begin Ignite-Entity-Qrcode
// import { qrcodeRequest } from '../Containers/Qrcode/sagas'
// end Ignite-Entity-Qrcode
import { startup } from './StartupSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const baseUrl = AppConfig.env === 'development' ? '/' : 'https://api1.opetstudio.com/'
const baseUrl =
  AppConfig.env === 'development'
    // ? 'http://127.0.0.1:8080/MdoSwaggerUi/rest/simulatorBackend/'
    ? 'http://localhost:8081/'
    // ? 'https://api1.opetstudio.com/'
    : '/MdoSwaggerUi/rest/simulatorBackend/'
    // : 'https://api1.opetstudio.com/'
// const baseUrl = 'http://localhost:8080/'
const host = baseUrl + ''
const api = DebugConfig.useFixtures ? FixtureAPI : API.create(host)
const apiQrcode = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/' : 'https://api.erevnaraya.com/')
// const apiDashboard = API.create(AppConfig.env === 'development' ? 'https://api.erevnaraya.com/simulator/' : 'https://api.erevnaraya.com/simulator/')
const apiDashboard = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/simulator/' : 'https://api.erevnaraya.com/')
// const apiQrcode = API.create(AppConfig.env === 'development' ? 'http://localhost:8762/' : 'https://api.erevnaraya.com/')
// const apiPaymentpage = API.create(AppConfig.env === 'development' ? 'http://202.158.24.186:8380/' : '/')
// const baseApi = DebugConfig.useFixtures ? FixtureAPI : API.create(baseUrl)
/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(MerchantTypes.MERCHANT_CREATE_REQUEST, merchantCreateRequest, apiDashboard),
    
    takeLatest(LoginTypes.LOGIN_CREATE, postLogin, apiDashboard),
    takeLatest(LoginTypes.LOGIN_REMOVE, removeLogin, apiDashboard),

    takeLatest(LoginTypes.LOGIN_DO_LOGIN, loginDoLogin, apiDashboard),
    takeLatest(LoginTypes.LOGIN_CHECK_STATUS, loginCheckStatus, apiDashboard),
    // end Ignite-Entity-Login
    takeLatest(StartupTypes.STARTUP, startup, api)
    // some sagas receive extra parameters in addition to an action
    // takeLatest(UserTypes.USER_REQUEST, getUserAvatar, api)
  ])
}
