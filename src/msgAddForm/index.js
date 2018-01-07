import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMsg } from '../action'
class AddMsgForm extends Component {
  state = {
    key: '',
    msg: []
  }
  addMyMsg = e => {
    //console.log(e)
    e.preventDefault()
    //console.log(this.state)
    this.props.addMsg(this.state)
  }
  getKey = e => {
    this.setState({
      key: e.currentTarget.value
    })
  }
  getMyMsg = e => {
    this.setState({
      msg: e.currentTarget.value
    })
  }
  render = () => {
    return (
      <form ref="addMsgorm" onSubmit={this.addMyMsg}>
        <input
          type="text"
          name="key"
          placeholder="key"
          ref="key"
          onChange={this.getKey}
        />
        <input
          type="text"
          name="msg"
          placeholder="Your Message"
          ref="msg"
          onChange={this.getMyMsg}
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}
export default connect(null, { addMsg })(AddMsgForm)
