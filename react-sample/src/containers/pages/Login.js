import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Modal from '../../components/molecules/Modal'
import { changeModal } from '../../redux/actions/Modal'
import { submitId, submitPass, loginBool } from '../../redux/actions/Login'


class Login extends Component {
  constructor(props) {
    super(props)
  }

  loginButtonClicked(e) {
    const {submitId, submitPass, loginBool, changeModal, history} = this.props
    const id = this.refs.id.value
    const pw = this.refs.pass.value

    if(id === "takeda" && pw === "shinji") {
      submitId(this.refs.id.value)
      submitPass(this.refs.pass.value)
      loginBool(true)
    } else {
      loginBool(false)
      changeModal(true)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { history, login } = this.props

    console.log('*****************')
    console.log("nextProps")
    console.log(login)
    console.log(nextProps)
    console.log('*****************')

    if(nextProps && nextProps.login.bool === true) {
      history.push('/list')
    }
  }

  render() {
    const { login, modal, changeModal } = this.props

    console.log('*****************')
    console.log("Login render")
    console.log(this.props)
    console.log('*****************')

    return (
      <div>
        <p>ID: &nbsp;&nbsp;<input id="id_input" type="text" ref="id" /></p>
        <p>PW: <input id="pass_input" type="password" ref="pass" /></p>
        <p>
          <button id="login_button" onClick={this.loginButtonClicked.bind(this)}>
            <p>Login</p>
          </button>
        </p>
        <Modal>ID,PWに誤りがあります</Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { login: state.login, modal: state.modal }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {submitId, submitPass, loginBool, changeModal}), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))