import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>NotFound</div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound)