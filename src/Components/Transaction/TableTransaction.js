import React, { Component } from 'react'
import _ from 'lodash'
// Import React Table
import ReactTable from 'react-table'
import 'react-table/react-table.css'
export default class TableTransaction extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      pages: null,
      loading: true
    }
    this.fetchData = this.fetchData.bind(this)
  }
  fetchData (state, instance) {
    console.log('fetchData')
    if (this.props.loading) {
      console.log('still fetching')
      return
    }
    this.props.requestData({
      pageSize: state.pageSize,
      page: state.page,
      sorted: state.sorted,
      filtered: state.filtered
    })
  }
  render () {
    const { data, pages, loading, page } = this.props
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
        <ReactTable
          columns={columns}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={data}
          page={page}
          pages={pages} // Display the total number of pages
          loading={loading} // Display the loading overlay when we need it
          onFetchData={this.fetchData} // Request new data when things change
          filterable
          defaultPageSize={10}
          className='-striped -highlight'
        />
      </div>
    )
  }
}
