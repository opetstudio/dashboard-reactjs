import React, { Component } from 'react'
import Helmet from 'react-helmet'

class HomePageComponent extends Component {
  render () {
    console.log('props===>', this.props)
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Home</title>
          <body className='hold-transition skin-blue sidebar-mini' />
        </Helmet>
        <section className='content-header'>
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Home</a></li>
            <li className='active'>Dashboard</li>
          </ol>
        </section>
        <section className='content'>
          <p>test</p>
        </section>
      </div>
    )
  }
}
export default HomePageComponent
