import React, { Component } from 'react'

class ReportListPageComponent extends Component {
  componentDidMount () {
    window._loadhostscript()
  }
  render () {
    return (
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            Transaction
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaction</a></li>
            <li className='active'>Report</li>
          </ol>
        </section>
        <section className='content'>
          
        </section>
        
      </div>
    )
  }
}
export default ReportListPageComponent
