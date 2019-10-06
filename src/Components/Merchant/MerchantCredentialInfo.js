import React, { Component } from 'react'
import { BallBeat } from 'react-pure-loaders'
import {Colors} from '../../Themes'

export default class MerchantCredentialInfo extends Component {
  componentWillMount () {
    this.props.merchantGetCredential({merchantCode: this.props.userMerchantCode})
  }
  render () {
    let {
      keyId,
      merchantCode,
      merchantName,
      merchantId,
      merchantSecretKey,
      newMerchantSecretKey,
      validFrom,
      validTo,
      status,
      remark,
      updatedDate

    } = this.props.merchantCredential || {}
    if (this.props.isRequesting) return <BallBeat color={Colors.primary} loading />
    return (<dl className='dl-horizontal'>
      <dt>Key ID</dt>
      <dd>{keyId}</dd>
      <dt>Merchant Code</dt>
      <dd>{merchantCode}</dd>
      <dt>Merchant Name</dt>
      <dd>{merchantName}</dd>
      <dt>Merchant ID</dt>
      <dd>{merchantId}</dd>
      <dt>Current Secret Key</dt>
      <dd>{merchantSecretKey}</dd>
      <dt>New Secret Key</dt>
      <dd>{newMerchantSecretKey}</dd>
      <dt>Valid From</dt>
      <dd>{validFrom}</dd>
      <dt>Valid To</dt>
      <dd>{validTo}</dd>
      <dt>Status</dt>
      <dd>{status}</dd>
      <dt>Remark</dt>
      <dd>{remark}</dd>
      <dt>Updated Date</dt>
      <dd>{updatedDate}</dd>
    </dl>)
  }
}
