import PropTypes from 'prop-types'
import React from 'react'

class AdminlteContainer extends React.PureComponent {
  render () {
    const { children } = this.props
    return (
      <div class='wrapper'>
        <header class='main-header'>
          <a href='index2.html' class='logo'>
            <span class='logo-mini'><b>PL</b></span>
            <span class='logo-lg'><b>PLink Direct Debet</b></span>
          </a>
          <nav class='navbar navbar-static-top'>
            <a href='#' class='sidebar-toggle' data-toggle='push-menu' role='button'>
              <span class='sr-only'>Toggle navigation</span>
            </a>
          </nav>
        </header>
        <aside class='main-sidebar'>
          <section class='sidebar'>
            <div class='user-panel'>
              <div class='pull-left image'>
                <img src='dist/img/user2-160x160.jpg' class='img-circle' alt='User Image' />
              </div>
              <div class='pull-left info'>
                <p>Alexander Pierce</p>
                <a href='#'><i class='fa fa-circle text-success' /> Online</a>
              </div>
            </div>
            <ul class='sidebar-menu' data-widget='tree'>
              <li class='header'>MAIN NAVIGATION</li>
              <li class='active treeview menu-open'>
                <a href='#'>
                  <i class='fa fa-dashboard' /> <span>Merchan</span>
                  <span class='pull-right-container'>
                    <i class='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul class='treeview-menu'>
                  <li><a href='index.html'><i class='fa fa-circle-o' /> Buat Baru</a></li>
                  <li class='active'><a href='index2.html'><i class='fa fa-circle-o' /> Daftar Merchan</a></li>
                </ul>
              </li>
              
              <li class='treeview'>
                <a href='#'>
                  <i class='fa fa-pie-chart' />
                  <span>Transaksi</span>
                  <span class='pull-right-container'>
                    <i class='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul class='treeview-menu'>
                  <li><a href='pages/charts/chartjs.html'><i class='fa fa-circle-o' /> ChartJS</a></li>
                  <li><a href='pages/charts/morris.html'><i class='fa fa-circle-o' /> Morris</a></li>
                  <li><a href='pages/charts/flot.html'><i class='fa fa-circle-o' /> Flot</a></li>
                  <li><a href='pages/charts/inline.html'><i class='fa fa-circle-o' /> Inline charts</a></li>
                </ul>
              </li>
              
            </ul>
          </section>
        </aside>
        {children}
        <footer class='main-footer'>
          <div class='pull-right hidden-xs'>
            <b>Version</b> 2.4.18
          </div>
          <strong>Copyright &copy; 2014-2019 <a href='https://adminlte.io'>AdminLTE</a>.</strong> All rights
            reserved.
        </footer>
      </div>
    )
  }
}

export default AdminlteContainer
