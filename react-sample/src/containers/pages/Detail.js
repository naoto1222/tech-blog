import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list, match } = this.props
    const index = Number(match.params.index)

    console.log('*****************')
    console.log("Detail render")
    console.log(this.props)
    console.log('*****************')

    return (
      <div id="text_label">
        {(() => {
          if (list && list.texts && list.texts.length >= index+1) {
            return `${list.texts[index].id}. ${list.texts[index].text}`
          } else {
            return `No Data`
          }
        })()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { list: state.list }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))