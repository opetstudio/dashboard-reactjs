import React from 'react'
import { connect } from 'react-redux'
import LoginActions, { LoginSelectors } from './redux'
import {isLoggedIn, getAccessToken} from '../../Utils/Utils'
import LoginPageComponent from '../../Components/Login/LoginPageComponent'
import { injectIntl } from 'react-intl'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    if (isLoggedIn(this.props.isLoggedIn) !== true) return (<LoginPageComponent {...this.props} />)
    // if (isLoggedIn(this.props.isLoggedIn) !== true) return null
    // else return null
    else return window.open(`${basePath}/home/${getAccessToken(this.props.sessionToken)}`, '_self', true)
  }
}

// const TheComponent = props => {
//   if (window.localStorage.getItem('isLoggedIn') !== true) return (<LoginPageComponent {...props} />)
//   // else window.location.assign = '/'
//   // else window.location.reload(true)
//   // else window.open('http://localhost:3000/', '_self', true)
//   else {
//     console.log('doing click')
//     document.getElementById('gotohome').click()
//   }
//   // else window.location.replace('http://localhost:3000/home')
//   //gotohome
// }
const mapStateToProps = (state, ownProps) => {
  // const isLoggedIn = LoginSelectors.isLoggedIn(state.login)
  // console.log('mapStateToProps isLoggedIn=', isLoggedIn)
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    sessionToken: LoginSelectors.sessionToken(state.login),
    formSubmitMessage: LoginSelectors.getFormSubmitMessage(state.login),
    responseMessage: LoginSelectors.responseMessage(state.login),
    responseDescription: LoginSelectors.responseDescription(state.login),
    responseCode: LoginSelectors.responseCode(state.login)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginDoLogin: data => dispatch(LoginActions.loginDoLogin(data)),
    loginPatch: data => dispatch(LoginActions.loginPatch(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
