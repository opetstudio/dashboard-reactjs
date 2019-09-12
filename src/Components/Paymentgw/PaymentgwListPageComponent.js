import React, { Component } from 'react'
import Helmet from 'react-helmet'
import TablePaymentgw from './TablePaymentgw'

class PaymentgwListPageComponent extends Component {
  render () {
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Paymentgw List</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>Paymentgw List</h1>
          <ol className='breadcrumb'>
            <li>
              <a href='#'>
                <i className='fa fa-dashboard' /> Paymentgw
              </a>
            </li>
            <li className='active'>List</li>
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
                      <TablePaymentgw
                        data={this.props.dataPaymentgw}
                        page={this.props.page}
                        pages={this.props.pages}
                        loading={this.props.isRequesting}
                        requestData={this.props.paymentgwReadRequest}
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
export default PaymentgwListPageComponent
