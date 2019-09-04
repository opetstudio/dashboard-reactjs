import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginActions, { LoginSelectors } from './Login/redux'

class AdminlteContainer extends React.PureComponent {
  static propTypes = {
    onLogout: PropTypes.func
  }
  static defaultProps = {
    onLogout: () => {}
  }
  constructor (props) {
    super(props)
    this.state = {}
    // this.logoutDialog = this.logoutDialog.bind(this)
    // this.ModalBasic = this.ModalBasic.bind(this)
  }
  renderLoggedIn (children) {
    return (
      <div className='wrapper'>
        <header className='main-header'>
          <Link to='/home' className='logo'>
            <span className='logo-mini'><b>PL</b></span>
            <span className='logo-lg'><b>PLink Direct Debet</b></span>
          </Link>
          <nav className='navbar navbar-static-top'>
            <Link to='#' className='sidebar-toggle' data-toggle='push-menu' role='button'>
              <span className='sr-only'>Toggle navigation</span>
            </Link>
            {/* <!-- Navbar Right Menu --> */}
            <div className='navbar-custom-menu'>
              <ul className='nav navbar-nav'>
                <li className='dropdown user user-menu'>
                  <Link to='#' className='dropdown-toggle' data-toggle='dropdown'>
                    <img src='/dist/img/user2-160x160.jpg' className='user-image' alt='User Image' />
                    <span className='hidden-xs'>Admin mbdd</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className='main-sidebar'>
          <section className='sidebar'>
            <div className='user-panel'>
              <div className='pull-left image'>
                <img src='/dist/img/user2-160x160.jpg' className='img-circle' alt='User Image' />
              </div>
              <div className='pull-left info'>
                <p>Admin MBDD</p>
                <Link to='#'><i className='fa fa-circle text-success' /> Online</Link>
              </div>
            </div>
            <ul className='sidebar-menu' data-widget='tree'>
              <li className='header'>MAIN NAVIGATION</li>
              <li className='active treeview menu-open'>
                <Link to='#'>
                  <i className='fa fa-dashboard' /> <span>Merchant</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </Link>
                <ul className='treeview-menu'>
                  <li><Link to='/merchant/create'><i className='fa fa-circle-o' /> Create New</Link></li>
                  <li className='active'><Link to='/merchant/list'><i className='fa fa-circle-o' /> All Merchant</Link></li>
                </ul>
              </li>

              <li className='treeview'>
                <Link to='#'>
                  <i className='fa fa-pie-chart' />
                  <span>Transaction</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </Link>
                <ul className='treeview-menu'>
                  <li><Link to='/report'><i className='fa fa-circle-o' /> Report</Link></li>
                </ul>
              </li>

            </ul>
          </section>
        </aside>
        {children}
        <footer className='main-footer'>
          <div className='pull-right hidden-xs'>
            <b>Version</b> 2.4.18
          </div>
          <strong>Copyright &copy; 2019 <Link to='https://adminlte.io'>PT. Prismalink International</Link>.</strong> All rights
            reserved.
        </footer>
      </div>
    )
  }
  render () {
    console.log('this.props===>', this.props)
    const { children } = this.props
    if (this.props.isLoggedIn) return this.renderLoggedIn(children)
    else return children
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
