import React, { Component } from 'react'
import ReplyMsg from '../replyMsg'
export default class MsgDesc extends Component {
  showReplyForm = () => {
    this.props.onClicked(this.props.keyIndex)
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return true
  }

  render = () => {
    const { props } = this
    //console.log(props, 'all props in msgDesc')
    return (
      <li onClick={this.showReplyForm}>
        {props.msg.msg}
        <ReplyMsg
          clicked={props.clicked ? 'clicked' : ''}
          parentKey={props.msg.key}
        />
      </li>
    )
  }
}
