import React, { Component } from 'react'
import ReplyMsgInfo from '../replyMsgInfo'
import { connect } from 'react-redux'
import { rplyMsg } from '../action'

const calculateState = props => {
  //console.log(props, 'props new')
  return { repliedMsgList: [...props.repliedMsgList] }
}

class ReplyMsg extends Component {
  state = {
    replyMsg: '',
    parentKey: '',
    repliedMsgList: [],
    parentMsgList: []
  }
  sendMyReply = e => {
    e.preventDefault()
    this.props.rplyMsg(this.state)
  }
  myReplyMsg = e => {
    this.setState({
      replyMsg: e.currentTarget.value,
      parentKey: this.props.parentKey
    })
  }

  componentWillReceiveProps = nextProps => {
    //console.log(this.props, 'this.props')
    //console.log(nextProps, 'nextProps')
    if (this.props.repliedMsgList !== nextProps.repliedMsgList) {
      this.setState(calculateState(nextProps))
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return true
  }

  render = () => {
    console.log('render called', this.props)
    console.log('state called', this.state)
    //console.log('render called', this.props)
    return this.props.clicked ? (
      <section>
        <form onSubmit={this.sendMyReply}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Your Reply"
            onChange={this.myReplyMsg}
          />
          <input type="submit" value="Submit" />
        </form>
        <ReplyMsgInfo
          parentMsgList={this.props.parentMsgList}
          repliedMsgList={this.state.repliedMsgList}
        />
      </section>
    ) : (
      <button type="button" className={this.props.clicked}>
        Reply
      </button>
    )
  }
}
const mapStateToPrps = state => {
  //console.log(state, 'state jsdgfhjdsf') //state.repliedMsgVal
  return {
    repliedMsgList: state.repliedMsgVal,
    parentMsgList: state.msgVal
  }
}
export default connect(mapStateToPrps, { rplyMsg })(ReplyMsg)
