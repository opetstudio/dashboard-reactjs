import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router-dom'
import {getAccessToken} from '../../Utils/Utils'
import AppConfig from '../../Config/AppConfig'
const basePath = AppConfig.basePath

class MerchantProfilePageComp extends Component {
  componentWillMount () {
    console.log('componentWillMount')
    this.props.merchantReadOneRequest({merchantCode: this.props.userMerchantCode})
  }
  componentWillUnmount () {
  }
  _onSubmitForm (e) {}
  render () {
    let {
      merchantId,
      instCd,
      nm,
      website,
      merchantMobileNo,
      merchantEmail,
      frontendCallbackUrl,
      backendCallbackUrl,
      createdDt,
      instCatCd,
      addr
    } = this.props.merchantDetail || {}
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Merchant Profile</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Merchant Profile</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Merchant
              </a>
            </li>
            <li className='active'>Merchant Profile</li>
          </ol>
        </section>
        <section className='content'>
          <form onSubmit={e => this._onSubmitForm(e)}>
            <div className='box box-primary'>
              <div className='box-header with-border'>
                <h3 className='box-title'>Merchant Information</h3>
              </div>
              <div className='box-body'>
                <dl className='dl-horizontal'>
                  <dt>Merchant Name</dt>
                  <dd>{nm}</dd>
                  <dt>Merchant ID</dt>
                  <dd>{merchantId}</dd>
                  <dt>Merchant Code</dt>
                  <dd>{instCd}</dd>
                  <dt>website</dt>
                  <dd>{website}</dd>
                  <dt>Merchant Mobile Number</dt>
                  <dd>{merchantMobileNo}</dd>
                  <dt>Merchant Email</dt>
                  <dd>{merchantEmail}</dd>
                  <dt>Frontend Callback URL</dt>
                  <dd>{frontendCallbackUrl}</dd>
                  <dt>Backend Callback URL</dt>
                  <dd>{backendCallbackUrl}</dd>
                  <dt>Created Date Time</dt>
                  <dd>{createdDt}</dd>
                  <dt>Merchant Category</dt>
                  <dd>{instCatCd}</dd>
                  <dt>Address</dt>
                  <dd>{addr}</dd>
                </dl>
              </div>

              <div className='box-footer'>
                {/* <button type='button' className='btn btn-primary' onClick={(e) => <Redirect to={`${basePath}/edit-profile/${getAccessToken(this.props.sessionToken)}`} />}> */}
                <button type='button' className='btn btn-primary' onClick={(e) => this.props.history.push(`${basePath}/merchant/edit-profile/${getAccessToken(this.props.sessionToken)}`)}>
                  Edit Profile
                </button>
                {/* <button type="submit" className="btn btn-info pull-right">Sign in</button> */}
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
export default MerchantProfilePageComp
