import React, { Component } from 'react'
import MsgList from '../msgList'
import AddMsgForm from '../msgAddForm'
import { connect } from 'react-redux'
import './index.css'
const calculateState = props => {
  //console.log(props, 'props new')
  return { msgList: [...props.msgList] }
}
class Inbox extends Component {
  state = {
    msgList: []
  }
  componentWillReceiveProps = nextProps => {
    if (this.props.msgList !== nextProps.msgList) {
      this.setState(calculateState(nextProps))
    }
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

        <div className="footer">That is awesome!!!</div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    msgList: state.msgVal
  }
}

export default connect(mapStatetoProps, null)(Inbox)
