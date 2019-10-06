import React, { Component } from 'react'
import { BallBeat } from 'react-pure-loaders'
import {Colors} from '../../Themes'

export default class MerchantInfo extends Component {
  componentWillMount () {
    this.props.merchantReadOneRequest({merchantCode: this.props.userMerchantCode})
  }
  render () {
    let {
      merchantId,
      instCd,
      nm,
      website,
      merchantMobileNo,
      merchantEmail,
      frontendCallbackUrl,
      backendCallbackUrl,
      createdDt,
      instCatCd,
      addr
    } = this.props.merchantDetail || {}

    if (this.props.isRequesting) return <BallBeat color={Colors.primary} loading />
    return (<dl className='dl-horizontal'>
      <dt>Merchant Name</dt>
      <dd>{nm}</dd>
      <dt>Merchant ID</dt>
      <dd>{merchantId}</dd>
      <dt>Merchant Code</dt>
      <dd>{instCd}</dd>
      <dt>website</dt>
      <dd>{website}</dd>
      <dt>Merchant Mobile Number</dt>
      <dd>{merchantMobileNo}</dd>
      <dt>Merchant Email</dt>
      <dd>{merchantEmail}</dd>
      <dt>Frontend Callback URL</dt>
      <dd>{frontendCallbackUrl}</dd>
      <dt>Backend Callback URL</dt>
      <dd>{backendCallbackUrl}</dd>
      <dt>Created Date Time</dt>
      <dd>{createdDt}</dd>
      <dt>Merchant Category</dt>
      <dd>{instCatCd}</dd>
      <dt>Address</dt>
      <dd>{addr}</dd>
    </dl>)
  }
}
