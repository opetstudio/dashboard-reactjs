import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { BallBeat } from 'react-pure-loaders'
import {Colors} from '../../Themes'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
import Filter from './Filter'

const columns = [{
  id: 'ecommRefNo',
  Header: 'Transaction Id',
  accessor: 'ecommRefNo' // String-based value accessors!
}, {
  id: 'pymtMethodCd',
  Header: 'Method',
  accessor: 'pymtMethodCd',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'coCcyAmt', // Required because our accessor is not a string
  Header: 'Amount',
  accessor: d => d.coCcyAmt, // Custom value accessors!,
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'coDt',
  Header: props => <span>Checkout Date</span>, // Custom header components!
  accessor: 'coDt'
  // accessor: 'friend.age'
}, {
  Header: 'Customer',
  accessor: 'consUsernameMerchant'
}, {
  Header: 'PgID',
  accessor: 'paymentGatewayCode'
}, {
  Header: 'MID',
  accessor: 'mercId'
}, {
  Header: 'Status',
  accessor: 'paySts'
}]
export default class RefundRequestPage extends Component {
  render () {
    if (this.props.isRequesting) return <BallBeat color={Colors.primary} loading />
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Transaksi Refund Request</title>
        </Helmet>
        <section className='content-header'>
          <h1>
            Transaksi Refund Request
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Request</li>
          </ol>
        </section>
        <section className='content'>
        <Filter />
            {/* <MaterialUiTable   /> */}
            <div className='box'>
            {/* <div className='box-header'>
                <h3 className='box-title'>Data Table With Full Features</h3>
            </div> */}
            <div className='box-body'>
                <div className='row'>
                <div className='col-sm-12'>
                    <TablePaginationContainer
                    url='/plink/refund/rev/request-list'
                    columns={columns}
                    userMerchantCode={this.props.userMerchantCode}
                    />
                </div>
                </div>
            </div>
            </div>
            
        </section>

      </div>
    )
  }
}
