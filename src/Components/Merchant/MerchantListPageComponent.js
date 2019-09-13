import React, { Component } from 'react'
import Helmet from 'react-helmet'
import TableMerchant from './TableMerchant'

class MerchantListPageComponent extends Component {
  componentWillUnmount () {
    this.props.merchantRequestPatch({isRequesting: false, responseCode: '', responseMessage: ''})
  }
  render () {
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Daftar Merchant</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Daftar Merchant</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Merchant
              </a>
            </li>
            <li className='active'>Daftar Merchant</li>
          </ol>
        </section>
        <section className='content'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='box'>
                {/* <div className='box-header'>
                </div> */}
                {/* <div className='box-body table-responsive no-padding'> */}
                <div className='box-body'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <TableMerchant
                        data={this.props.dataMerchant}
                        page={this.props.page}
                        pages={this.props.pages}
                        loading={this.props.isRequesting}
                        requestData={this.props.merchantReadRequest}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default MerchantListPageComponent
