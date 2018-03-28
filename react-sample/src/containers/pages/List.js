import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitText, dndList } from '../../redux/actions/List'
import { withRouter, Link } from 'react-router-dom'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ListItem from '../organisms/ListItem'


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

  componentWillUpdate(nextProps) {
    // console.log('*****************')
    // console.log("componentWillUpdate nextProps")
    // console.log(nextProps)
    // console.log('*****************')
  }

  componentWillReceiveProps(nextProps) {
    // console.log('*****************')
    // console.log("componentWillReceiveProps extProps")
    // console.log(nextProps)
    // console.log('*****************')
  }

  registButtonClicked(e) {
    const { submitText, list } = this.props
    if(this.refs.text.value) {
      const id = list.texts.length > 0 ? Math.max(...list.texts.map(m => m.id)) + 1 : 1
      submitText({id: id, text: this.refs.text.value}, list.texts)
      this.refs.text.value = null
    }
  }

  findItem(id, props) {
    const { list } = props
    const item = list.texts.find(c => c.id === id) || {}

    return {
      item,
      index: list.texts.indexOf(item),
    }
  }

  moveItem(id, atIndex, props) {
    const { item, index } = this.findItem(id, props)
    props.dndList(index, atIndex, item, props.list.texts)
  }

  render() {
    const { login, list, dndList } = this.props
    const itemType = Symbol("item")

    console.log('*****************')
    console.log("List render")
    console.log(this.props)
    console.log('*****************')

    return (
      <div>
        <p id="id_label">ID:&nbsp;&nbsp;{login.id}</p>
        <p id="pass_label">PW:{login.pass}</p>
        <p>
          <input id="text_input" type="text" ref="text" />
          <button id="regist_button" onClick={this.registButtonClicked.bind(this)}>
            <p>登録</p>
          </button>
        </p>
        <ul>
          {list && list.texts.length > 0 && list.texts.map((item, i) => {
            return <ListItem
              id={item.id}
              text={item.text}
              index={i}
              type={itemType}
              findItem={this.findItem}
              moveItem={this.moveItem}
              dndList={dndList}
              key={item.id}
            />
          })}
        </ul>
        <div>
          <Link id="blank_link" to={"http://www.yahoo.co.jp"} target="_blank">別タブで開く</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { login: state.login, list: state.list }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {submitText, dndList}), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(List)))