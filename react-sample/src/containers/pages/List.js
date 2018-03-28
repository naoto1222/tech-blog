import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitText } from '../../redux/actions/List'
import { withRouter } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { login, history } = this.props

    if(!login || (login && !login.id)) {
      history.push('/')
    }
  }

  registButtonClicked(e) {
    const { submitText, list } = this.props
    if(this.refs.text.value) {
      submitText(this.refs.text.value, list.texts)
      this.refs.text.value = null
    }
  }

  render() {
    const { login, list } = this.props

    console.log('*****************')
    console.log(login)
    console.log(list)
    console.log('*****************')

    return (
      <div>
        <p>ID:&nbsp;&nbsp;{login.id}</p>
        <p>PW:{login.pass}</p>
        <p>
          <input type="text" ref="text" id="text" />
          <button onClick={this.registButtonClicked.bind(this)}>
            <p>登録</p>
          </button>
        </p>
        <ul>
          {list && list.texts.length > 0 && list.texts.map((text, i) => {
            return <li>{i+1}. {text}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {login: state.login, list: state.list}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {submitText}), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))