import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import MerchantActions, {MerchantSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'

import ChangeLimitPageComponent from '../../Components/Merchant/ChangeLimitPageComponent'

class TheComponent extends React.PureComponent {
  render () {
    if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to='/login' /> }
    return (<ChangeLimitPageComponent
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
    merchantCreateRequestPatch: query => dispatch(MerchantActions.merchantCreateRequestPatch(query)),
    merchantCreateRequest: query => dispatch(MerchantActions.merchantCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
