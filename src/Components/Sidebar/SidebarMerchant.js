import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Images} from '../../Themes'
import AppConfig from '../../Config/AppConfig'
import {getAccessToken} from '../../Utils/Utils'
const basePath = AppConfig.basePath
const useravatar = Images.useravatar

class SidebarMerchant extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'routeActive': ''
    }
    this._isMenuActive = this._isMenuActive.bind(this)
  }
  _isMenuActive (route) {
    if (this.state.routeActive.startsWith(route)) return 'active'
    return ''
  }
  _getMenuLi (route, title) {
    let baseRoute = `${basePath}${route}`
    return (<li className={`${this._isMenuActive(baseRoute)}`}><Link onClick={() => this.setState({routeActive: baseRoute})} to={`${baseRoute}/${getAccessToken(this.props.sessionToken)}`}><i className='fa fa-circle-o' /> {title}</Link></li>)
  }
  render () {
    console.log('this.state====>', this.state)
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
            {this._getMenuLi('/home', 'Dashboard')}
            <li className='active treeview menu-open'>
              <Link to='#'>
                <i className='fa fa-dashboard' /> <span>Merchant Administration</span>
                <span className='pull-right-container'>
                  <i className='fa fa-angle-left pull-right' />
                </span>
              </Link>
              <ul className='treeview-menu'>
                {this._getMenuLi('/merchant/profile', 'Merchant Profile')}
                {this._getMenuLi('/merchant/credential', 'Merchant Credential')}
                {this._getMenuLi('/merchant/change-limit', 'Merchant Limit')}
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
                {this._getMenuLi('/report', 'Refund Process')}
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
                {this._getMenuLi('/report', 'List Detail Transaction')}
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
                {this._getMenuLi('/usermanagement/listAllUser', 'List All User')}
                {this._getMenuLi('/usermanagement/listAllUser', 'Create New User')}
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}
export default SidebarMerchant
