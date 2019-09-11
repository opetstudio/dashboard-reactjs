import React from 'react'
import { connect } from 'react-redux'
import GenerateQrcodePageComponent from '../../Components/Qrcode/GenerateQrcodePageComponent'

const TheComponent = props => {
  if (window.localStorage.getItem('isLoggedIn') === 'true') { return <GenerateQrcodePageComponent {...props} /> } else window.open('/', '_self')
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TheComponent)
