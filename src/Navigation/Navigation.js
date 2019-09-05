import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
// import { HashRouter as Router, Route, withRouter } from 'react-router-dom'

// Import Screens for the Router
// prettier-ignore
import ResponsiveContainer from '../Containers/ResponsiveContainer'
// --- import list page entity ---
import HomePageContainer from '../Containers/Home/HomePageContainer'
import MerchantCreatePageContainer from '../Containers/Merchant/MerchantCreatePageContainer'
import MerchantListPageContainer from '../Components/Merchant/MerchantListPageComponent'
import ReportListPageContainer from '../Components/Report/ReportListPageComponent'
import LoginPageContainer from '../Containers/Login/LoginPageContainer'
import {loadScript} from '../Utils/Utils'

class App extends Component {
  constructor (props) {
    super(props)
    this.unlisten = this.props.history.listen((location, action) => {
      console.log('props.history.listen ', window.location.pathname)
      // if ((window.location.pathname).includes('/login')) {
      //   document.getElementsByTagName('body')[0].setAttribute('class', 'hold-transition login-page')
      // } else {
      //   document.getElementsByTagName('body')[0].setAttribute('class', 'hold-transition skin-blue sidebar-mini')
      // }
      // this.props.onRouteChange(location)
      const loginRestriction = [
        '/home'
      ]
      if (loginRestriction.indexOf(location.pathname) !== -1) {
        this.props.checkLogedStatus()
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
  componentWillUpdate (prevProps) {
  }
  render () {
    // let basePath = '/PaymentPageCc' // for jboss
    // let basePath = '/paymentpage' // for jboss
    let basePath = '' // for docker
    return (
      <Router>
        <AppContainer checkLogedStatus={this.props.checkLogedStatus}>
          <ResponsiveContainer appname='adminlte'>
            <Route exact path={`${basePath}/`} component={HomePageContainer} />
            <Route exact path={`${basePath}/home`} component={HomePageContainer} />
            <Route exact path={`${basePath}/merchant/create`} component={MerchantCreatePageContainer} />
            <Route exact path={`${basePath}/merchant/list`} component={MerchantListPageContainer} />
            <Route exact path={`${basePath}/report`} component={ReportListPageContainer} />
            <Route exact path={`${basePath}/login`} component={LoginPageContainer} />
          </ResponsiveContainer>
        </AppContainer>
      </Router>
    )
  }
}
export default NavigationRouter
