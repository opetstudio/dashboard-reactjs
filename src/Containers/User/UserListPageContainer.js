import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import UserActions, {UserSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'

import UserListPageComponent from '../../Components/User/UserListPageComponent'

class TheComponent extends React.PureComponent {
  render () {
    if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to='/login' /> }
    return (<UserListPageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    dataUser: UserSelectors.dataUser(state.user),
    pages: UserSelectors.pages(state.user),
    page: UserSelectors.page(state.user),
    isRequesting: UserSelectors.isRequesting(state.user)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userRequestPatch: query => dispatch(UserActions.userRequestPatch(query)),
    userReadRequest: query => dispatch(UserActions.userReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
