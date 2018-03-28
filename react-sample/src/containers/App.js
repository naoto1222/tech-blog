import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)