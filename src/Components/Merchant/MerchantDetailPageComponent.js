import React, { Component } from 'react'

class MerchantDetailPageComponent extends Component {
  componentDidMount () {
    window._loadhostscript()
  }
  render () {
    return (
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            Nama Merchant
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Merchant</a></li>
            <li className='active'>Detail</li>
          </ol>
        </section>
        <section className='content'>
              <div className="row">
                <div className="col-md-12">
                <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs">
                    <li className="active"><a href="#tab_1" data-toggle="tab"><span className="label label-info"><i className="fa fa-fw fa-info"></i></span>&nbsp;Merchant Information</a></li>
                    <li><a href="#tab_2" data-toggle="tab"><span className="label label-danger"><i className="fa fa-bell"></i></span>&nbsp;Merchant Notification</a></li>
                    <li><a href="#tab_3" data-toggle="tab"><span className="label label-success"><i className="fa fa-bank"></i></span>&nbsp;Merchant Account</a></li>
                    </ul>
                    <div className="tab-content">
                    <div className="tab-pane active" id="tab_1">
                            <div className="row">
                                <div className="col-md-12">
                                    <dl className="dl-horizontal" style={{marginLeft:"25px"}}>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Merchant Code</dt>
                                            <dd>BKL123</dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Merchant Name</dt>
                                            <dd>Bukataplak</dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Merchant Address</dt>
                                            <dd>Jl. Gatot Subroto, Jakarta. 52353</dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Website</dt>
                                            <dd>www.bukataplak.com</dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Front End Callback URL</dt>
                                            <dd>https://bukataplak.com/frontend/url</dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Back End Callback URL</dt>
                                            <dd>https://bukataplak.com/backend/url</dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Status</dt>
                                            <dd><span className="label label-success">Active</span></dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Mobile No.</dt>
                                            <dd><span className="label label-danger">N/A</span></dd>
                                        </div>
                                        <div style={{marginTop:"25px"}}>
                                            <dt>Email</dt>
                                            <dd><span className="label label-danger">N/A</span></dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                    </div>
                    <div className="tab-pane" id="tab_2">
                        
                    </div>
                    <div className="tab-pane" id="tab_3">
                        
                    </div>
                    </div>
                    <div className="box-footer">
                        <button type="submit" class="btn btn-primary"><i className="fa fa-pencil"></i>&nbsp;&nbsp;Edit</button>
                        &nbsp;
                        &nbsp;
                        <button type="submit" class="btn btn-secondary"><i className="fa fa-undo"></i>&nbsp;&nbsp;Back</button>
                    </div>
                </div>
                </div>
            </div>

        </section>
        
      </div>
    )
  }
}
export default MerchantDetailPageComponent
