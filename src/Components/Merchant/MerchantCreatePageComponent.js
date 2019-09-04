import React, { Component } from 'react'

class MerchantCreatePageComponent extends Component {
  componentDidMount () {
    window._loadhostscript()
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
          <div className='box box-primary'>
            <div className='box-header with-border'>
              <h3 className='box-title'>Merchant Information</h3>
              <div className='box-tools pull-right'>
                <button type='button' className='btn btn-box-tool' data-widget='collapse'><i className='fa fa-minus' /></button>
                <button type='button' className='btn btn-box-tool' data-widget='remove'><i className='fa fa-remove' /></button>
              </div>
            </div>
            <div className='box-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <form role="form">
                    <div class="box-body">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Merchant Code</label>
                        <input type="mcode" class="form-control" id="mcode" placeholder="Enter Merchant Code"></input>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Merchant Name</label>
                        <input type="mname" class="form-control" id="mname" placeholder="Enter Merchant Name"></input>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email"></input>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Phone No.</label>
                        <input type="phone" class="form-control" id="phone" placeholder="Enter Phone Number"></input>
                      </div>
                      <div class="form-group">
                        <label>Address</label>
                        <textarea class="form-control" rows="3" placeholder="Enter Address"></textarea>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-md-6'>
                    <form role="form">
                    <div class="box-body">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Front End Callback URL</label>
                        <input type="frontend" class="form-control" id="frontend" placeholder="Enter Front End Callback URL"></input>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Back End Callback URL</label>
                        <input type="backend" class="form-control" id="backend" placeholder="Enter Back End Callback URL"></input>
                      </div>
                      <div class="form-group">
                        <label>Status</label>
                        <select class="form-control">
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="box-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
                {/* <button type="submit" class="btn btn-info pull-right">Sign in</button> */}
              </div>
          </div>
        </section>
        
      </div>
    )
  }
}
export default MerchantCreatePageComponent
