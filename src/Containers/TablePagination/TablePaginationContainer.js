import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import TablepaginationActions, {TablepaginationSelectors} from './redux'
import TablepaginationListPageComponent from '../../Components/Tablepagination/TablepaginationListPageComponent'

class TheComponent extends React.PureComponent {
  render () {
    return (<TablepaginationListPageComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: TablepaginationSelectors.dataTablepagination(state.tablepagination),
    pages: TablepaginationSelectors.pages(state.tablepagination),
    page: TablepaginationSelectors.page(state.tablepagination),
    pageSize: TablepaginationSelectors.pageSize(state.tablepagination),
    isRequesting: TablepaginationSelectors.isRequesting(state.tablepagination)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    tablepaginationReadRequest: query => dispatch(TablepaginationActions.tablepaginationReadRequest(query))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
