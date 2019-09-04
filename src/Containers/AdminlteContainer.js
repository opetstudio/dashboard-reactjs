import PropTypes from 'prop-types'
import React from 'react'

class AdminlteContainer extends React.PureComponent {
  render () {
    const { children } = this.props
    return (
      <div className='wrapper'>
        <header className='main-header'>
          <a href='/' className='logo'>
            <span className='logo-mini'><b>PL</b></span>
            <span className='logo-lg'><b>PLink Direct Debet</b></span>
          </a>
          <nav className='navbar navbar-static-top'>
            <a href='#' className='sidebar-toggle' data-toggle='push-menu' role='button'>
              <span className='sr-only'>Toggle navigation</span>
            </a>
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
                <a href='#'><i className='fa fa-circle text-success' /> Online</a>
              </div>
            </div>
            <ul className='sidebar-menu' data-widget='tree'>
              <li className='header'>MAIN NAVIGATION</li>
              <li className='active treeview menu-open'>
                <a href='#'>
                  <i className='fa fa-dashboard' /> <span>Merchant</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='/merchant/create'><i className='fa fa-circle-o' /> Create New</a></li>
                  <li className='active'><a href='#'><i className='fa fa-circle-o' /> All Merchant</a></li>
                </ul>
              </li>
              
              <li className='treeview'>
                <a href='#'>
                  <i className='fa fa-pie-chart' />
                  <span>Transaksi</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='#'><i className='fa fa-circle-o' /> ChartJS</a></li>
                  <li><a href='#'><i className='fa fa-circle-o' /> Morris</a></li>
                  <li><a href='#'><i className='fa fa-circle-o' /> Flot</a></li>
                  <li><a href='#'><i className='fa fa-circle-o' /> Inline charts</a></li>
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
          <strong>Copyright &copy; 2019 <a href='https://adminlte.io'>PT. Prismalink International</a>.</strong> All rights
            reserved.
        </footer>
      </div>
    )
  }
}

export default AdminlteContainer
