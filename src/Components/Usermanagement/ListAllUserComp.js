import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ListAllUserTableComp from './ListAllUserTableComp'
// import TablePagination from '../Table/TablePagination'

// Import React Table
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'

// import MaterialUiTable from './MaterialUiTable'
class ListAllUserComp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    // window.TransactionListPageComponent()
  }
  componentDidMount () {
  }
  componentDidUpdate (prevProps) {
    // window.TransactionListPageComponent(this.props.listall)
  }
  render () {
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>User Management</title>
        </Helmet>
        <section className='content-header'>
          <h1>
            List All User
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> User Management</a></li>
            <li className='active'>List All User</li>
          </ol>
        </section>
        <section className='content'>
          <div className='row'>
            <div className='col-xs-12'>
              {/* <MaterialUiTable   /> */}
              <div className='box'>
                {/* <div className='box-header'>
                  <h3 className='box-title'>Data Table With Full Features</h3>
                </div> */}
                <div className='box-body'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <ListAllUserTableComp
                        userMerchantCode={this.props.userMerchantCode}
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
export default ListAllUserComp
