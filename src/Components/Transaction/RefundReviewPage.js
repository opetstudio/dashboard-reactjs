import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { BallBeat } from 'react-pure-loaders'
import {Colors} from '../../Themes'
import TableRefundReview from './TableRefundReview'
import Filter from './Filter'
export default class RefundReviewPage extends Component {
  render () {
    if (this.props.isRequesting) return <BallBeat color={Colors.primary} loading />
    return (
      <div className='content-wrapper'>
        <Helmet>
          <title>Transaksi Refund Review</title>
        </Helmet>
        <section className='content-header'>
          <h1>
            Transaksi Refund Review
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Transaksi</a></li>
            <li className='active'>Transaksi Refund Review</li>
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
                      <TableRefundReview
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
