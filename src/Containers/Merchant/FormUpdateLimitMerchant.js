import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import FormUpdateLimitMerchant from '../../Components/Merchant/FormUpdateLimitMerchant'
import MerchantActions, {MerchantSelectors} from './redux'
import { LoginSelectors } from '../Login/redux'

const mapStateToProps = (state, ownProps) => {
  return {
    merchantLimitMin: 100000,
    merchantLimitMax: 1000000,
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: MerchantSelectors.isRequesting(state.merchant),
    responseMessage: MerchantSelectors.responseMessage(state.merchant),
    responseCode: MerchantSelectors.responseCode(state.merchant),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login),
    responseDescription: MerchantSelectors.responseDescription(state.merchant)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantUpdateMinMaxLimit: query => dispatch(MerchantActions.merchantUpdateMinMaxLimit(query)),
    merchantRequestMinMaxLimit: query => dispatch(MerchantActions.merchantRequestMinMaxLimit(query)),
    merchantRequestPatch: query => dispatch(MerchantActions.merchantRequestPatch(query)),
    merchantCreateRequest: query => dispatch(MerchantActions.merchantCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(FormUpdateLimitMerchant))
