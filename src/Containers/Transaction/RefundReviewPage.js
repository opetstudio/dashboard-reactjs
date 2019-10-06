import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import {TransactionSelectors} from './redux'
import { LoginSelectors } from '../Login/redux'
import RefundReviewPage from '../../Components/Transaction/RefundReviewPage'
import {isLoggedIn} from '../../Utils/Utils'
import { Redirect } from 'react-router-dom'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

const mapStateToProps = (state, ownProps) => {
  return {
    isRequesting: TransactionSelectors.isRequesting(state.login),
    userMerchantCode: LoginSelectors.userMerchantCode(state.login)
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl((props) => {
  if (isLoggedIn(props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
  return (<RefundReviewPage history={props.history} {...props} />)
}))
