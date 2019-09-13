import React from 'react'
import { connect } from 'react-redux'
import SignupPageComponent from '../../Components/Signup/SignupPageComponent'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

const TheComponent = props => {
  if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <SignupPageComponent {...props} /> } else window.open(`${basePath}/`, '_self')
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
