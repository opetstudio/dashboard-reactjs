import React, { Component } from 'react'
import TablePaginationContainer from '../../Containers/TablePagination/TablePaginationContainer'
export default class TableTransaction extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
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
    return (
      <div>
        <TablePaginationContainer
          url='/plink/report/list'
          columns={columns}
          userMerchantCode={this.props.userMerchantCode}
        />
      </div>
    )
  }
}
