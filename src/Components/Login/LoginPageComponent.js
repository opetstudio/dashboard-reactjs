import React from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Container
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import CryptoJS from 'crypto-js'
import Helmet from 'react-helmet'

// var bcrypt = require('bcryptjs')
// var salt = bcrypt.genSaltSync(1)

class LoginPageComponent extends React.Component {
  state = {
    password: '',
    email: '',
    grant_type: 'password',
    username: '',
    client_id: '',
    formSubmitMessage: ''
  }
  constructor (props) {
    super(props)
    this.state = {
      formSubmitMessage: this.props.formSubmitMessage
    }
    this.props.resetFormLogin()
  }
  componentDidMount (prevProps) {
    this.setState({
      formSubmitMessage: this.props.formSubmitMessage
    })
  }
  handleChange = (e, { name, value }) => {
    var newSt = {}
    newSt[name] = value
    if (name === 'email') {
      // let hash = bcrypt.hashSync(value, salt)
      // console.log(name + ' hash=>', hash)
      newSt['username'] = value
      newSt['client_id'] = value
    }
    this.setState(newSt)
  }
  handleSubmit = () => {
    // console.log('handleSubmit')
    const { username, password } = this.state
    // encrypt password
    // let hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64)
    // let secondHash = CryptoJS.SHA256(hash).toString(CryptoJS.enc.Base64)

    const submittedData = {
      grant_type: this.state.grant_type,
      username,
      password,
      client_id: this.state.client_id
    }
    this.setState(submittedData)
    this.props.loginCreate(submittedData)
  }
  _formOnSubmit (e) {
    if (e) e.preventDefault()
    const email = this.refs.email.value
    const pass = this.refs.pass.value
    this.props.loginCreate({
      userid: email,
      password: pass
    })
    return false
  }
  render () {
    const { isLoggedIn } = this.props
    const { password, email } = this.state

    if (window.localStorage.getItem('isLoggedIn') === 'true') { return <Redirect to='/' /> }
    return (
      <div className='login-box'>
        <Helmet>
          <title>Login</title>
          <body className='hold-transition login-page' />
        </Helmet>
        <div className='login-logo'>
          <a href='#'><b>PLINK</b> Direct Debit</a>
        </div>
        <div className='login-box-body'>
          <p className='login-box-msg'>Sign in to start your session</p>
          <form onSubmit={(e) => this._formOnSubmit(e)}>
            <div className='form-group has-feedback'>
              <input type='email' className='form-control' placeholder='Email' ref='email' required />
              <span className='glyphicon glyphicon-envelope form-control-feedback' />
            </div>
            <div className='form-group has-feedback'>
              <input type='password' className='form-control' placeholder='Password' ref='pass' required />
              <span className='glyphicon glyphicon-lock form-control-feedback' />
            </div>
            <div className='row'>
              <div className='col-xs-8'>
                <div className='checkbox icheck'>
                  {/* <label><input type='checkbox' /> Remember Me </label> */}
                </div>
              </div>
              <div className='col-xs-4'>
                <button type='submit' className='btn btn-primary btn-block btn-flat'>Sign In</button>
                {/* <button type='button' className='btn btn-primary btn-block btn-flat' onClick={() => this.handleSubmit()}>Sign In</button> */}
              </div>
            </div>
          </form>
          {/* <div className='social-auth-links text-center'>
            <p>- OR -</p>
            <a href='#' className='btn btn-block btn-social btn-facebook btn-flat'><i className='fa fa-facebook' /> Sign in using
              Facebook</a>
            <a href='#' className='btn btn-block btn-social btn-google btn-flat'><i className='fa fa-google-plus' /> Sign in using
              Google+</a>
          </div> */}
          {/* <a href='#'>I forgot my password</a><br /> */}
          {/* <a href='register.html' className='text-center'>Register a new membership</a> */}
        </div>
      </div>
    )
  }
}

export default LoginPageComponent
