import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
// import { HashRouter as Router, Route, withRouter } from 'react-router-dom'

// Import Screens for the Router
// prettier-ignore
import ResponsiveContainer from '../Containers/ResponsiveContainer'
// --- import list page entity ---
import HomePageContainer from '../Containers/Home/HomePageContainer'

import MerchantCreatePageContainer from '../Containers/Merchant/MerchantCreatePageContainer'
import MerchantListPageContainer from '../Containers/Merchant/MerchantListPageContainer'
import MerchantChangeLimitPageContainer from '../Containers/Merchant/ChangeLimitPageContainer'

import UserCreatePageContainer from '../Containers/User/UserCreatePageContainer'
import UserListPageContainer from '../Containers/User/UserListPageContainer'
import UserChangeLimitPageContainer from '../Containers/User/ChangeLimitPageContainer'

import PaymentgwCreatePageContainer from '../Containers/Paymentgw/PaymentgwCreatePageContainer'
import PaymentgwListPageContainer from '../Containers/Paymentgw/PaymentgwListPageContainer'

import TransactionListPageContainer from '../Containers/Transaction/TransactionListPageContainer'
import LoginPageContainer from '../Containers/Login/LoginPageContainer'
import SignupPageContainer from '../Containers/Signup/SignupPageContainer'
import GenerateQrcodePageContainer from '../Containers/Qrcode/GenerateQrcodePageContainer'

// import contiainer untuk halaman my profile
import MyProfilePage from '../Containers/Profile/MyProfilePage'

import { loadScript } from '../Utils/Utils'
import AppConfig from '../Config/AppConfig'
const basePath = AppConfig.basePath

class App extends Component {
  constructor (props) {
    super(props)
    this.unlisten = this.props.history.listen((location, action) => {
      console.log('props.history.listen ', window.location.pathname)
      const loginRestriction = [basePath + '/home', basePath + '/', basePath + '/merchant/create']
      if (loginRestriction.indexOf(location.pathname) !== -1) {
        this.props.checkLogedStatus({})
      }
      loadScript(location.pathname)
    })
  }
  componentWillUnmount () {
    this.unlisten()
  }
  componentDidMount () {
    loadScript()
  }
  render () {
    return <div>{this.props.children}</div>
  }
}
const AppContainer = withRouter(App)

class NavigationRouter extends Component {
  render () {
    // let basePath = '/PaymentPageCc' // for jboss
    // let basePath = '/paymentpage' // for jboss
    // let basePath = '' // for docker
    // let basePath = '/dashboard' // for docker
    return (
      <Router>
        <AppContainer checkLogedStatus={this.props.checkLogedStatus}>
          <ResponsiveContainer appname='adminlte'>
            <Route exact path={`${basePath}/`} component={HomePageContainer} />
            <Route
              exact
              path={`${basePath}/home`}
              component={HomePageContainer}
            />
            <Route
              exact
              path={`${basePath}/paymentgw/create`}
              component={PaymentgwCreatePageContainer}
            />
            <Route
              exact
              path={`${basePath}/paymentgw/list`}
              component={PaymentgwListPageContainer}
            />
            <Route
              exact
              path={`${basePath}/merchant/create`}
              component={MerchantCreatePageContainer}
            />
            <Route
              exact
              path={`${basePath}/merchant/change-limit`}
              component={MerchantChangeLimitPageContainer}
            />
            <Route
              exact
              path={`${basePath}/merchant/list`}
              component={MerchantListPageContainer}
            />
            <Route
              exact
              path={`${basePath}/user/create`}
              component={UserCreatePageContainer}
            />
            <Route
              exact
              path={`${basePath}/user/change-limit`}
              component={UserChangeLimitPageContainer}
            />
            <Route
              exact
              path={`${basePath}/user/list`}
              component={UserListPageContainer}
            />
            <Route
              exact
              path={`${basePath}/report`}
              component={TransactionListPageContainer}
            />
            <Route
              exact
              path={`${basePath}/login`}
              component={LoginPageContainer}
            />
            <Route
              exact
              path={`${basePath}/signup`}
              component={SignupPageContainer}
            />
            <Route
              exact
              path={`${basePath}/qrcode/generate`}
              component={GenerateQrcodePageContainer}
            />
            <Route
              exact
              path={`${basePath}/my-profile`}
              component={MyProfilePage}
            />
          </ResponsiveContainer>
        </AppContainer>
      </Router>
    )
  }
}
export default NavigationRouter
