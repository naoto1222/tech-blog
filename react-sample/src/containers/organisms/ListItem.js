import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'


const itemSource = {
  beginDrag (props) {
    return {
      id: props.id,
      originalIndex: props.findItem(props.id, props).index,
    };
  },
  endDrag (props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem()

    // if (!monitor.didDrop()) {
    //   props.moveItem(droppedId, originalIndex, props)
    // } else {
    //   props.itemMoved({ id: droppedId, droppedIndex: props.findItem(droppedId, props).index })
    // }
  }
}

const dropTargetCollect = (connect) => ({
  connectDropTarget: connect.dropTarget()
})

const itemTarget = {
  canDrop () {
    return false;
  },

  hover (props, monitor) {
    const { id: draggedId } = monitor.getItem()
    const { id: overId } = props

    if (draggedId !== overId) {
      const { index: overIndex } = props.findItem(overId, props)
      props.moveItem(draggedId, overIndex, props)
    }
  },
}

const dragSourceCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

class ListItem extends Component {
  render() {
    const { connectDragSource, connectDropTarget, id, text, index } = this.props

    return connectDragSource(connectDropTarget(
      <li id={`list_label${id}`}>
        <h3>{id}.<Link to={`/detail/${index}`}>{text}</Link></h3>
      </li>
    ))
  }
}

ListItem = flow(
  DragSource('Item', itemSource, dragSourceCollect),
  DropTarget('Item', itemTarget, dropTargetCollect)
)(ListItem)

function mapStateToProps(state) {
  return { list: state.list }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItem))