import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
  render () {
    return (
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
    )
  }
}
export default HeaderComponent
