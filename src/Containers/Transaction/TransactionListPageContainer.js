import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import LoginActions, { LoginSelectors } from '../Login/redux'
import TransactionActions, {TransactionSelectors} from './redux'
import { Redirect } from 'react-router-dom'
import TransactionListPageComponent from '../../Components/Transaction/TransactionListPageComponent'
import {isLoggedIn} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class TheComponent extends React.PureComponent {
  render () {
    if (isLoggedIn(this.props.isLoggedIn) !== true) { return <Redirect to={`${basePath}/login`} /> }
    return (<TransactionListPageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login),
    dataTransaction: TransactionSelectors.dataTransaction(state.transaction),
    pages: TransactionSelectors.pages(state.transaction),
    page: TransactionSelectors.page(state.transaction),
    pageSize: TransactionSelectors.pageSize(state.transaction),
    isRequesting: TransactionSelectors.isRequesting(state.transaction)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    transactionReadRequest: query => dispatch(TransactionActions.transactionReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
