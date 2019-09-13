import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import UserActions, {UserSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'

import UserCreatePageComponent from '../../Components/User/UserCreatePageComponent'

class TheComponent extends React.PureComponent {
  render () {
    if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to='/login' /> }
    return (<UserCreatePageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: UserSelectors.isRequesting(state.user),
    responseMessage: UserSelectors.responseMessage(state.user),
    responseCode: UserSelectors.responseCode(state.user)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userRequestPatch: query => dispatch(UserActions.userRequestPatch(query)),
    userCreateRequest: query => dispatch(UserActions.userCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
