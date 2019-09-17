// import library core react js
import React, { Component } from 'react'
// import library react-helmet, gunanya untuk edit meta tag di html
import Helmet from 'react-helmet'
import {Images} from '../../Themes'
import {getUserPrivName} from '../../Utils/Utils'


const useravatar = Images.useravatar
export default class MyProfilePageComp extends Component {
  render () {
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>My Profile</title>
        </Helmet>
        <section className='content-header'>
          <h1>My Profile</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Profile
              </a>
            </li>
            <li className='active'>My Profile</li>
          </ol>
        </section>
        <section className='content'>

          <div class='box box-primary'>
            <div class='box-body box-profile'>
              <img class='profile-user-img img-responsive img-circle' src={useravatar} alt='User profile picture' />
              <h3 class='profile-username text-center'>{this.props.userFullName}</h3>
              <p class='text-muted text-center'>as {getUserPrivName(this.props.userRole)}</p>
            </div>
          </div>
        </section>
        {/* <section className='content'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='box'>
                <div className='box-header with-border'>
                  <h3 className='box-title'>Box Header</h3>
                </div>
                <div className='box-body'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <p>Halaman My Profile</p>
                      <p>tampilkan parameter state yang di inject dari class container: <b>{this.props.parameterRedux1}</b></p>
                    </div>
                  </div>
                </div>
                <div class='box-footer'>
                    Footer
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </div>
    )
  }
}
