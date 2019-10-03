import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import {getAccessToken} from '../../Utils/Utils'
const basePath = AppConfig.basePath
const useravatar = Images.useravatar

class SidebarMerchant extends Component {
  render () {
    return (
      <aside className='main-sidebar'>
        <section className='sidebar'>
          {/* <div className='user-panel'>
            <div className='pull-left image'>
              <img src={useravatar} className='img-circle' alt='User Image' />
            </div>
            <div className='pull-left info' style={{width: '100%'}}>
              <p>{this.props.userFullName}</p>
              <Link to='#'><i className='fa fa-circle text-success' /> Online</Link>
            </div>
          </div> */}
          <ul className='sidebar-menu' data-widget='tree'>
            <li className='header'>MAIN NAVIGATION</li>
            <li><Link to={`${basePath}/usermanagement/listAllUser/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Dashboard</Link></li>
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>Merchant Administration</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/merchant/profile/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Merchant Profile</Link></li>
                <li><Link to={`${basePath}/merchant/credential/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Merchant Credential</Link></li>
                <li><Link to={`${basePath}/merchant/change-limit/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Merchant Limit</Link></li>
              </ul>
            </li>
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-pie-chart' />
                <span>Transaction</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/report/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Refund Process</Link></li>
              </ul>
            </li>
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-pie-chart' />
                <span>Report Transaction</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/report/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> List Detail Transaction</Link></li>
              </ul>
            </li>
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>User Management</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                <li><Link to={`${basePath}/usermanagement/listAllUser/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> List All User</Link></li>
                <li><Link to={`${basePath}/usermanagement/listAllUser/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> Create New User</Link></li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}
export default SidebarMerchant
