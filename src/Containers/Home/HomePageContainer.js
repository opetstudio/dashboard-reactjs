import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import HomePageComponent from '../../Components/Home/HomePageComponent'

const TheComponent = props => (
  <HomePageComponent
    history={props.history}
    {...props}
  />
)

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
