import React, { Component } from 'react'

class MerchantListPageComponent extends Component {
  componentDidMount () {
    window._loadhostscript()
  }
  render () {
    return (
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            Merchant List
          </h1>
          <ol className='breadcrumb'>
            <li><a href='#'><i className='fa fa-dashboard' /> Merchant</a></li>
            <li className='active'>List</li>
          </ol>
        </section>
        <section className='content'>

              <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <div className="box-tools">
                            <div className="input-group input-group-sm hidden-xs" style={{width: "150px"}}>
                            <input type="text" name="table_search" className="form-control pull-right" placeholder="Search"></input>
                            <div className="input-group-btn">
                                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="box-body table-responsive no-padding">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Merchant Name</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Bukataplak</td>
                            <td>11-7-2015</td>
                            <td><span className="label label-success">Active</span></td>
                            <td>
                                <span className="btn label label-info"><i class="fa fa-fw fa-info"></i></span>
                                &nbsp;
                                <span className="btn label label-danger"><i class="fa fa-fw fa-trash"></i></span>
                            </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Tokomania</td>
                            <td>11-7-2016</td>
                            <td><span className="label label-warning">Inactive</span></td>
                            <td>
                                <span className="btn label label-info"><i class="fa fa-fw fa-info"></i></span>
                                &nbsp;
                                <span className="btn label label-danger"><i class="fa fa-fw fa-trash"></i></span>
                            </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Shopi</td>
                            <td>11-7-2017</td>
                            <td><span className="label label-success">Active</span></td>
                            <td>
                                <span className="btn label label-info"><i class="fa fa-fw fa-info"></i></span>
                                &nbsp;
                                <span className="btn label label-danger"><i class="fa fa-fw fa-trash"></i></span>
                            </td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Trapeloka</td>
                            <td>11-7-2018</td>
                            <td><span className="label label-warning">Inactive</span></td>
                            <td>
                                <span className="btn label label-info"><i class="fa fa-fw fa-info"></i></span>
                                &nbsp;
                                <span className="btn label label-danger"><i class="fa fa-fw fa-trash"></i></span>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    </div>
                        </div>
                    </div>


        </section>
        
      </div>
    )
  }
}
export default MerchantListPageComponent
