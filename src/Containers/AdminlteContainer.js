import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import LoginActions, { LoginSelectors } from './Login/redux'
import Header from '../Containers/Header/HeaderContainer'
import Sidebar from '../Containers/Sidebar/SidebarContainer'

class AdminlteContainer extends React.PureComponent {
  static propTypes = {
    onLogout: PropTypes.func
  }
  static defaultProps = {
    onLogout: () => {}
  }
  constructor (props) {
    super(props)
    this.state = {isLoggedIn: this.props.isLoggedIn}
    // this.logoutDialog = this.logoutDialog.bind(this)
    // this.ModalBasic = this.ModalBasic.bind(this)
    this.renderLoggedIn = this.renderLoggedIn.bind(this)
  }
  componentDidMount () {
    console.log('AdminlteContainer.componentDidMount')
    // let listJs = [
    //   // '/bower_components/jquery/dist/jquery.min.js',
    //   // '/bower_components/bootstrap/dist/js/bootstrap.min.js',
    //   // '/bower_components/select2/dist/js/select2.full.min.js',
    //   // '/bower_components/fastclick/lib/fastclick.js',
    //   '/dist/js/adminlte.min.js'
    //   // '/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
    //   // '/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    //   // '/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    //   // '/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
    //   // '/bower_components/chart.js/Chart.js',
    //   // '/plugins/iCheck/icheck.min.js',
    //   // '/native-script.js'
    // ]
    // listJs.map(str => {
    //   var element = document.querySelector('[src=\'' + str + '\']')
    //   if (element) element.parentNode.removeChild(element)
    //   let script = document.createElement('script')
    //   script.src = str
    //   // script.async = true
    //   script.async = false
    //   document.body.appendChild(script)
    // })
  }
  componentDidUpdate (prevProps, prevState) {
    // if (window.localStorage.getItem('isLoggedIn') !== 'true') { return <Redirect to='/login' /> }
    // if (!_.isEqual(prevProps.isLoggedIn, this.props.isLoggedIn)) {
    //   if (this.props.isLoggedIn) window.location.href = '/home'
    //   // this.setState({
    //   //   images: Immutable.asMutable(this.props.images, { deep: true })
    //   // })
    // }
  }
  renderLoggedIn (children) {
    return (
      <div className='wrapper'>
        <Helmet>
          <title>Homessss</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        {(window.localStorage.getItem('isLoggedIn') === 'true') && <Header />}
        {(window.localStorage.getItem('isLoggedIn') === 'true') && <Sidebar />}
        {children}
        {(window.localStorage.getItem('isLoggedIn') === 'true') &&
        <footer className='main-footer'>
          <div className='pull-right hidden-xs'>
            <b>Version</b> 2.4.18
          </div>
          <strong>Copyright &copy; 2019 <Link to='https://adminlte.io'>PT. Prismalink International</Link>.</strong> All rights
            reserved.
        </footer>
        }
      </div>
    )
  }
  render () {
    console.log('render adminltecontainer ===>', this.props)
    const { children } = this.props
    return this.renderLoggedIn(children)
    // else return children
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: LoginSelectors.isLoggedIn(state.login)
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  doLogout: data => dispatch(LoginActions.loginRemove(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminlteContainer)
