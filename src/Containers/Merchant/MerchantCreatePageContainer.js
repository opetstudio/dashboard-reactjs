import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'

import MerchantCreatePageComponent from '../../Components/Merchant/MerchantCreatePageComponent'

const TheComponent = props => (
  <MerchantCreatePageComponent
    history={props.history}
    {...props}
  />
)

const mapStateToProps = (state, ownProps) => {
  return {
    isRequesting: MerchantSelectors.isRequesting(state.merchant),
    responseMessage: MerchantSelectors.responseMessage(state.merchant),
    responseCode: MerchantSelectors.responseCode(state.merchant)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantCreateRequestPatch: query => dispatch(MerchantActions.merchantCreateRequestPatch(query)),
    merchantCreateRequest: query => dispatch(MerchantActions.merchantCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
