import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import {LoginSelectors} from '../Login/redux'
import AppActions, {AppSelectors} from '../../Redux/AppRedux'

import SidebarComponent from '../../Components/Sidebar/SidebarComponent'
import SidebarMerchant from '../../Components/Sidebar/SidebarMerchant'
import SidebarUser from '../../Components/Sidebar/SidebarUser'
import SidebarPartner from '../../Components/Sidebar/SidebarPartner'

class TheComponent extends React.PureComponent {
  render () {
    if (this.props.userRole === '100') return (<SidebarUser sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    else if (this.props.userRole === '200') return (<SidebarMerchant appPatch={this.props.appPatch} routeActive={this.props.routeActive} sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    else if (this.props.userRole === '300') return (<SidebarPartner sessionToken={this.props.sessionToken} history={this.props.history} {...this.props} />)
    else {
      return (<SidebarComponent
        history={this.props.history}
        {...this.props}
      />
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userFullName: LoginSelectors.userFullName(state.login),
    sessionToken: LoginSelectors.sessionToken(state.login),
    routeActive: AppSelectors.routeActive(state.app)
    // userRole: LoginSelectors.userRole(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    appPatch: data => dispatch(AppActions.appPatch(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
