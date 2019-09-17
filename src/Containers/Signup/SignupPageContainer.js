import React from 'react'
import { connect } from 'react-redux'
import SignupPageComponent from '../../Components/Signup/SignupPageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath


const TheComponent = props => {
  if (isLoggedIn(this.props.isLoggedIn) !== true) { return <SignupPageComponent {...props} /> } else window.open(`${basePath}/`, '_self')
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
