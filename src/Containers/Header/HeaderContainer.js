import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import HeaderComponent from '../../Components/Header/HeaderComponent'

class TheComponent extends React.PureComponent {
  render () {
    return (<HeaderComponent
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
