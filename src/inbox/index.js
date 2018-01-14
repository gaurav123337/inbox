import React, { Component } from 'react'
import MsgList from '../msgList'
import AddMsgForm from '../msgAddForm'
import ReplyMsgInfo from '../replyMsgInfo'

import { connect } from 'react-redux'
import './index.css'
const calculateState = props => {
  console.log(props, 'props INdex')
  //return { msgList: [...props.msgList] }
  return {
    msgList: [...props.msgList],
    repliedMsgList: [...props.repliedMsgList],
    parentMsgList: [...props.msgList]
  }
}
class Inbox extends Component {
  state = {
    msgList: [],
    repliedMsgList: [],
    parentMsgList: []
  }
  componentWillReceiveProps = nextProps => {
    if (this.props.msgList !== nextProps.msgList) {
      this.setState(calculateState(nextProps))
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    //console.log(nextProps-- - nextState)
    return true
  }

  render = () => {
    return (
      <div className="body">
        <header className="header">Welcome to Inbox</header>

        <div className="form">
          <AddMsgForm />
        </div>
        <div className="list">
          <MsgList msgList={this.state.msgList} />
        </div>
        <div className="repliedMsgList">
          <h3> Replied Message List </h3>
          <ReplyMsgInfo
            parentMsgList={this.state.msgList}
            repliedMsgList={this.state.repliedMsgList}
          />
        </div>

        <div className="footer">That is awesome!!!</div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    msgList: state.msgVal,
    repliedMsgList: state.repliedMsgVal,
    parentMsgList: state.msgVa
  }
}

export default connect(mapStatetoProps, null)(Inbox)
