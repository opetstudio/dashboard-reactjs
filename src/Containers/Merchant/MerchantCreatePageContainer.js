import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import MerchantCreatePageComponent from '../../Components/Merchant/MerchantCreatePageComponent'

const TheComponent = props => (
  <MerchantCreatePageComponent
    history={props.history}
    {...props}
  />
)

const mapStateToProps = (state, ownProps) => {
  return {
    // isRequesting: false
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
