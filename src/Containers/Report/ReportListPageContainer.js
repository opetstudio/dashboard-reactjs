import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'

import ReportListPageComponent from '../../Components/Report/ReportListPageComponent'

class TheComponent extends React.PureComponent {
  render () {
    if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to='/login' /> }
    return (<ReportListPageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
