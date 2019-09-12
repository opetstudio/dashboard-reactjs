import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PaymentgwActions, {PaymentgwSelectors} from './redux'
import LoginActions, { LoginSelectors } from '../Login/redux'
import { Redirect } from 'react-router-dom'

import PaymentgwCreatePageComponent from '../../Components/Paymentgw/PaymentgwCreatePageComponent'

class TheComponent extends React.PureComponent {
  render () {
    if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to='/login' /> }
    return (<PaymentgwCreatePageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    isRequesting: PaymentgwSelectors.isRequesting(state.paymentgw),
    responseMessage: PaymentgwSelectors.responseMessage(state.paymentgw),
    responseCode: PaymentgwSelectors.responseCode(state.paymentgw)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    paymentgwCreateRequestPatch: query => dispatch(PaymentgwActions.paymentgwCreateRequestPatch(query)),
    paymentgwCreateRequest: query => dispatch(PaymentgwActions.paymentgwCreateRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
