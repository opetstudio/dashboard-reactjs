import React, { Component } from 'react'

class MerchantCreatePageComponent extends Component {
  componentWillMount () {
    window.MerchantCreatePageComponentComponentWillMount()
  }
  componentDidMount () {
    window.MerchantCreatePageComponentComponentDidMount()
  }
  render () {
    return (
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            Merchant Create
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Merchant</a></li>
            <li className='active'>Create</li>
          </ol>
        </section>
        <section className='content'>
          <div className='box box-default'>
            <div className='box-header with-border'>
              <h3 className='box-title'>Select2</h3>

              {/* <div className='box-tools pull-right'>
                <button type='button' className='btn btn-box-tool' data-widget='collapse'><i className='fa fa-minus' /></button>
                <button type='button' className='btn btn-box-tool' data-widget='remove'><i className='fa fa-remove' /></button>
              </div> */}
            </div>
            <div className='box-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Minimal</label>
                    <select defaultValue='Alabama' className='form-control select2' style={{width: '100%'}}>
                      <option >Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Disabled</label>
                    <select defaultValue='Alabama' className='form-control select2' disabled='disabled' style={{width: '100%'}}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Multiple</label>
                    <select className='form-control select2' multiple='multiple' data-placeholder='Select a State' style={{width: '100%'}}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Disabled Result</label>
                    <select defaultValue='Alabama' className='form-control select2' style={{width: '100%'}}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option disabled='disabled'>California (disabled)</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='box-footer'>
          Visit <a href='https://select2.github.io/'>Select2 documentation</a> for more examples and information about
          the plugin.
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default MerchantCreatePageComponent
