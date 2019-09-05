import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import SidebarComponent from '../../Components/Sidebar/SidebarComponent'

class TheComponent extends React.PureComponent {
  render () {
    return (<SidebarComponent
      history={this.props.history}
      {...this.props}
    />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TheComponent))
