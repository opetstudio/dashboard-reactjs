import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import {LoginSelectors} from '../Login/redux'

import SidebarComponent from '../../Components/Sidebar/SidebarComponent'
import SidebarMerchant from '../../Components/Sidebar/SidebarMerchant'
import SidebarUser from '../../Components/Sidebar/SidebarUser'
import SidebarPartner from '../../Components/Sidebar/SidebarPartner'

class TheComponent extends React.PureComponent {
  render () {
    if (this.props.userRole === '100') return (<SidebarUser history={this.props.history} {...this.props} />)
    else if (this.props.userRole === '200') return (<SidebarMerchant history={this.props.history} {...this.props} />)
    else if (this.props.userRole === '300') return (<SidebarPartner history={this.props.history} {...this.props} />)
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
    // userRole: LoginSelectors.userRole(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
