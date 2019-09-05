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

          <div className="box box-default">
        <div className="box-header with-border">
          <h3 className="box-title">Filter</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
          </div>
        </div>
        
        <div className="box-body">
          <div className="row">
            <div className="col-md-6">
            <form className="form-horizontal">
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Transaction No</label>
                <div className="col-sm-9">
                  <input type="trxid" className="form-control" id="trxid" placeholder="Transaction No"></input>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Customer</label>
                <div className="col-sm-9">
                  <input type="csname" className="form-control" id="csname" placeholder="Name"></input>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Merchant</label>
                <div className="col-sm-9">
                  <select className="form-control select2" style={{width: "100%"}}>
                    <option>Bpay</option>
                    <option>Bukataplak</option>
                    <option>Shopi</option>
                    <option>Tokomania</option>
                    <option>Trapeloka</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Payment Method</label>
                <div className="col-sm-9">
                  <select className="form-control select2" style={{width: "100%"}}>
                    <option>BCA Click Pay</option>
                    <option>Mandiri Online</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Bank Code</label>
                <div className="col-sm-9">
                  <select className="form-control select2" style={{width: "100%"}}>
                    <option>014 - BCA</option>
                    <option>008 - Mandiri</option>
                  </select>
                </div>
              </div>
            </form>
            </div>
            
            <div className="col-md-6">
              <form className="form-horizontal">
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Status</label>
                <div className="col-sm-9">
                  <select className="form-control select2" style={{width: "100%"}}>
                    <option>Setled</option>
                    <option>Rejected</option>
                    <option>Canceled</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Transaction Amount</label>
                <div className="col-sm-9">
                  <select className="form-control select2" style={{width: "100%"}}>
                    <option>0 - 100.000</option>
                    <option>100.001 - 500.000</option>
                    <option>500.001 - 1.000.000</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Bank Code</label>
                <div className="col-sm-9">
                  <select className="form-control select2" style={{width: "100%"}}>
                    <option>014 - BCA</option>
                    <option>008 - Mandiri</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Start Date</label>
                <div className="col-sm-9">
                  <div className="input-group date">
                  <div className="input-group-addon">
                    <i className="fa fa-calendar"></i>
                  </div>
                  <input type="text" className="form-control pull-right" id="datepicker"></input>
                </div>
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">End Date</label>
                <div className="col-sm-9">
                  <div className="input-group date">
                  <div className="input-group-addon">
                    <i className="fa fa-calendar"></i>
                  </div>
                  <input type="text" className="form-control pull-right" id="datepicker2"></input>
                  </div>
                </div>
              </div>
            </form>
            </div>
          </div>
          <div className="box-footer pull-right">
            <button type="submit" class="btn btn-secondary" style={{width: "100px"}}><i className="fa fa-search"></i>&nbsp;&nbsp;Search</button>
            &nbsp;
            &nbsp;
            <button type="submit" class="btn btn-secondary" style={{width: "100px"}}><i className="fa fa-close"></i>&nbsp;&nbsp;Reset</button>
          </div>
        </div>
        
      </div>

          <div className="box table-responsive">
            <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Trx ID</th>
                    <th>Eccomm Ref. No.</th>
                    <th>Checkout Date</th>
                    <th>Merchant Code</th>
                    <th>Merchant Name</th>
                    <th>Consumer Name</th>
                    <th>Bank Code</th>
                    <th>Bank Name</th>
                    <th>Payment Method</th>
                    <th>Curr</th>
                    <th>Amount</th>
                    <th>Fee</th>
                    <th>Net Amount</th>
                    <th>PG Fee</th>
                    <th>Bank Fee</th>
                    <th>Payment Date</th>
                    <th>PG Loyalty</th>
                    <th>Merchant Loyalty</th>
                    <th>Total Loyalty</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>971</td>
                    <td>112937896</td>
                    <td>05-09-2019 11:14:35</td>
                    <td>Bkt46</td>
                    <td>Bukataplak</td>
                    <td>bukataplak@mail.com</td>
                    <td>014</td>
                    <td>Bank Central Asia</td>
                    <td>BCAVA</td>
                    <td>IDR</td>
                    <td>239,000.00</td>
                    <td>5,000.00</td>
                    <td>234,000.00</td>
                    <td>3,000.00</td>
                    <td>2,000.00</td>
                    <td>05-09-2019 11:14:35</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td><span className="label label-success">Setled</span></td>
                    <td><span className="btn label label-info"><i className="fa fa-fw fa-eye"></i></span></td>
                  </tr>
                  <tr>
                    <td>967</td>
                    <td>112937891</td>
                    <td>05-09-2019 12:14:35</td>
                    <td>Tkt11</td>
                    <td>Tokomania</td>
                    <td>tokomania@mail.com</td>
                    <td>014</td>
                    <td>Bank Central Asia</td>
                    <td>BCAVA</td>
                    <td>IDR</td>
                    <td>239,000.00</td>
                    <td>5,000.00</td>
                    <td>234,000.00</td>
                    <td>3,000.00</td>
                    <td>2,000.00</td>
                    <td>05-09-2019 11:14:35</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td><span className="label label-danger">Rejected</span></td>
                    <td><span className="btn label label-info"><i className="fa fa-fw fa-eye"></i></span></td>
                  </tr>
                  <tr>
                    <td>960</td>
                    <td>1129371231</td>
                    <td>05-09-2019 13:14:35</td>
                    <td>Shp081</td>
                    <td>Shopi</td>
                    <td>shopi@mail.com</td>
                    <td>014</td>
                    <td>Bank Central Asia</td>
                    <td>BCAVA</td>
                    <td>IDR</td>
                    <td>239,000.00</td>
                    <td>5,000.00</td>
                    <td>234,000.00</td>
                    <td>3,000.00</td>
                    <td>2,000.00</td>
                    <td>05-09-2019 11:14:35</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td><span className="label label-warning">Canceled</span></td>
                    <td><span className="btn label label-info"><i className="fa fa-fw fa-eye"></i></span></td>
                  </tr>
                </tbody>
                </table>
          </div>
        </section>
        
      </div>
    )
  }
}
export default ReportListPageComponent
