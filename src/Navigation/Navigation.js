import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
// import { HashRouter as Router, Route, withRouter } from 'react-router-dom'

// Import Screens for the Router
// prettier-ignore
import ResponsiveContainer from '../Containers/ResponsiveContainer'
// --- import list page entity ---
import HomePageContainer from '../Containers/Home/HomePageContainer'
import MerchantCreatePageContainer from '../Components/Merchant/MerchantCreatePageComponent'
import MerchantListPageContainer from '../Components/Merchant/MerchantListPageComponent'
import ReportListPageContainer from '../Components/Report/ReportListPageComponent'
import MerchantDetailPageContainer from '../Components/Merchant/MerchantDetailPageComponent'

class App extends Component {
  componentWillMount () {
    this.unlisten = this.props.history.listen((location, action) => {
      // this.props.onRouteChange(location)
      const loginRestriction = [
        '/login'
      ]
      if (loginRestriction.indexOf(location.pathname) !== -1) {
        this.props.checkLogedStatus()
      }
    })
  }
  componentWillUnmount () {
    this.unlisten()
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
            <Route exact path={`${basePath}/merchant/detail`} component={MerchantDetailPageContainer} />
          </ResponsiveContainer>
        </AppContainer>
      </Router>
    )
  }
}
export default NavigationRouter
