import React, { Component } from 'react'
import {Container, Segment, Grid} from 'semantic-ui-react'

class HomePageComponent extends Component {
  render () {
    return (
      <div class='content-wrapper'>
        <section class='content-header'>
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol class='breadcrumb'>
            <li><a href='#'><i class='fa fa-dashboard' /> Home</a></li>
            <li class='active'>Dashboard</li>
          </ol>
        </section>
        <section class='content'>
          <p>test</p>
        </section>
      </div>
    )
  }
}
export default HomePageComponent
