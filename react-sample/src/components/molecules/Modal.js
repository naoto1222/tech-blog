import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeModal } from "../../redux/actions/Modal"


class Modal extends Component{

  toggleModal(e) {
    const { changeModal } = this.props
    changeModal(false)
  }

  render() {
    const { modal, children } = this.props

    console.log('*****************')
    console.log("Modal render")
    console.log(this.props)
    console.log('*****************')

    if(!modal.isOpen) {
      return null
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 400,
      minHeight: 200,
      margin: '0 auto',
      padding: 30
    }

    return (
      <div style={backdropStyle}>
        <div id="error_label" style={modalStyle}>
          {children}
          <div>
            <button id="close_button" onClick={this.toggleModal.bind(this)}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { modal: state.modal }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {changeModal}), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))