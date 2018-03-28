import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { submitId, submitPass, loginBool } from '../../redux/actions/Login'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  loginButtonClicked(e) {
    const {submitId, submitPass, loginBool, history} = this.props
    submitId(this.refs.id.value)
    submitPass(this.refs.pass.value)
    loginBool(true)
  }

  componentWillReceiveProps(nextProps) {
    const {history} = this.props

    console.log('*****************')
    console.log("nextProps")
    console.log(nextProps)
    console.log('*****************')

    if(nextProps && nextProps.login.bool === true) {
      history.push('/list')
    }
  }

  render() {
    const { login } = this.props

    console.log('*****************')
    console.log(login)
    console.log('*****************')

    return (
      <div>
        <p>ID: &nbsp;&nbsp;<input type="text" ref="id" id="id" /></p>
        <p>PW: <input type="password" ref="pass" id="pass" /></p>
        <p>
          <button onClick={this.loginButtonClicked.bind(this)}>
            <p>Login</p>
          </button>
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {login: state.login}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {submitId, submitPass, loginBool}), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))