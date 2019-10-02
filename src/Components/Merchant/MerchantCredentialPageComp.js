import React, { Component } from 'react'
import {path} from 'ramda'
import Helmet from 'react-helmet'

class MerchantCredentialPageComp extends Component {
  componentWillMount () {
    console.log('componentWillMount')
    this.props.merchantReadOneRequest({merchantCode: this.props.userMerchantCode})
  }
  componentWillUnmount () {
  }
  _onSubmitForm (e) {}
  render () {
    let merchantPluginForm = {}
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Merchant Credential</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Merchant Credential</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Merchant
              </a>
            </li>
            <li className='active'>Merchant Credential</li>
          </ol>
        </section>
        <section className='content'>
          <form onSubmit={e => this._onSubmitForm(e)}>
            <div className='box box-primary'>
              <div className='box-header with-border'>
                <h3 className='box-title'>Merchant Credential</h3>
              </div>
              <div classname='box-body'>
                <dl className='dl-horizontal'>
                  <dt>Key ID</dt>
                  <dd>{merchantPluginForm.keyId}</dd>
                  <dt>Merchant Code</dt>
                  <dd>{merchantPluginForm.merchantCode}</dd>
                  <dt>Merchant Name</dt>
                  <dd>{merchantPluginForm.merchantName}</dd>
                  <dt>Merchant ID</dt>
                  <dd>{merchantPluginForm.merchantId}</dd>
                  <dt>Current Secret Key</dt>
                  <dd>{merchantPluginForm.merchantSecretKey}</dd>
                  <dt>New Secret Key</dt>
                  <dd>{merchantPluginForm.newMerchantSecretKey}</dd>
                  <dt>Valid From</dt>
                  <dd>{merchantPluginForm.validFrom}</dd>
                  <dt>Valid To</dt>
                  <dd>{merchantPluginForm.validTo}</dd>
                  <dt>Status</dt>
                  <dd>{merchantPluginForm.status}</dd>
                  <dt>Remark</dt>
                  <dd>{merchantPluginForm.remark}</dd>
                  <dt>Updated Date</dt>
                  <dd>{merchantPluginForm.updatedDate}</dd>
                </dl>
              </div>
              <div className='box-footer'>
                {/* <button type='submit' className='btn btn-primary'>
                  Submit
                </button> */}
                {/* <button type="submit" className="btn btn-info pull-right">Sign in</button> */}
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
export default MerchantCredentialPageComp
