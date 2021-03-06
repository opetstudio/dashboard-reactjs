import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'
import MerchantCreatePageComponent from '../../Components/Merchant/MerchantCreatePageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<MerchantCreatePageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: MerchantSelectors.isRequesting(state.merchant),
    responseMessage: MerchantSelectors.responseMessage(state.merchant),
    responseCode: MerchantSelectors.responseCode(state.merchant)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    merchantRequestPatch: query => dispatch(MerchantActions.merchantRequestPatch(query)),
    merchantCreateRequest: query => dispatch(MerchantActions.merchantCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
