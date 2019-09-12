import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Images} from '../../Themes'

const useravatar = Images.useravatar

class SidebarComponent extends Component {
  render () {
    return (
      <aside className='main-sidebar'>
        <section className='sidebar'>
          <div className='user-panel'>
            <div className='pull-left image'>
              <img src={useravatar} className='img-circle' alt='User Image' />
            </div>
            <div className='pull-left info'>
              <p>Admin MBDD</p>
              <Link to='#'><i className='fa fa-circle text-success' /> Online</Link>
            </div>
          </div>
          <ul className='sidebar-menu' data-widget='tree'>
            <li className='header'>MAIN NAVIGATION</li>
            <li className='treeview'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>Payment Gateway</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to='/paymentgw/create'><i className='fa fa-circle-o' /> Create New</Link></li>
                <li className='active'><Link to='/paymentgw/list'><i className='fa fa-circle-o' /> All PG</Link></li>
              </ul>
            </li>
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
                <li><Link to='/merchant/change-limit'><i className='fa fa-circle-o' /> Change Limit</Link></li>
              </ul>
            </li>
            <li className='treeview'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>User</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to='/merchant/create'><i className='fa fa-circle-o' /> Create New</Link></li>
                <li className='active'><Link to='/merchant/list'><i className='fa fa-circle-o' /> All User</Link></li>
                <li><Link to='/merchant/change-limit'><i className='fa fa-circle-o' /> Change Limit</Link></li>
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
            <li className='treeview'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>Profile</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to='/merchant/create'><i className='fa fa-circle-o' /> Profile Merchant</Link></li>
                <li className='active'><Link to='/merchant/list'><i className='fa fa-circle-o' /> Profile PG</Link></li>
                <li><Link to='/merchant/list'><i className='fa fa-circle-o' /> Profile User</Link></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}
export default SidebarComponent
