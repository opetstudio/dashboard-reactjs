import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Redirect } from 'react-router-dom'
import HomePageComponent from '../../Components/Home/HomePageComponent'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath
class TheComponent extends React.PureComponent {
  render () {
    console.log('renderrrr')
    if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to={`${basePath}/login`} /> }
    return (<HomePageComponent
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
