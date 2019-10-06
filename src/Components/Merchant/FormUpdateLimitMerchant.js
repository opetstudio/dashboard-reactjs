import React, { Component } from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'
import { BallBeat } from 'react-pure-loaders'
import {Colors} from '../../Themes'

class FormUpdateLimitMerchant extends Component {
  componentWillUnmount () {
    this.props.merchantRequestPatch({isRequesting: false, responseCode: '', responseMessage: '', responseDescription: ''})
  }
  componentWillMount () {
    this.props.merchantRequestPatch({isRequesting: false, responseCode: '', responseMessage: '', responseDescription: ''})
    this.props.merchantRequestMinMaxLimit({merchantCode: this.props.userMerchantCode})
  }
  _onSubmitForm (e) {
    if (e) e.preventDefault()
    let bodyJson = {}
    _.forIn(this.refs, (v, k) => {
      bodyJson[k] = v.value
    })
    console.log('bodyJson', bodyJson)
    this.props.merchantUpdateMinMaxLimit({merchantCode: this.props.userMerchantCode, body: bodyJson})
  }
  render () {
    let {
      merchantLimitMin,
      merchantLimitMax,
      responseDescription,
      responseCode
    } = this.props
    if (this.props.isRequesting) return <BallBeat color={Colors.primary} loading />
    return (
      <form onSubmit={e => this._onSubmitForm(e)}>
        <div className='box box-primary'>
          <div className='box-header with-border'>
            <h3 className='box-title'>Merchant Limit</h3>
          </div>
          <div className='box-body'>
            {responseCode !== '' &&
              responseCode === 'MBDD00' && (
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='alert alert-success' role='alert'>
                      {responseDescription}
                    </div>
                  </div>
                </div>
              )}
            {responseCode !== '' &&
              responseCode !== 'MBDD00' && (
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='alert alert-danger' role='alert'>
                      {responseDescription}
                    </div>
                  </div>
                </div>
              )}
            <div className='row'>
              <div className='col-md-6'>
                <div className='box-body'>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Merchant Max Limit</label>
                    <input
                      type='maxlimit'
                      className='form-control'
                      id='maxlimit'
                      placeholder='Enter merchant maximal limit'
                      ref='maxlimit'
                      value={merchantLimitMax}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Merchant Min Limit</label>
                    <input
                      type='minlimit'
                      className='form-control'
                      id='minlimit'
                      placeholder='Enter merchant minimal limit'
                      ref='minlimit'
                      value={merchantLimitMin}
                    />
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='box-body' />
              </div>
            </div>
          </div>
          <div className='box-footer'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            {/* <button type="submit" className="btn btn-info pull-right">Sign in</button> */}
          </div>
        </div>
      </form>
    )
  }
}
export default FormUpdateLimitMerchant
