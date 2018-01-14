import React, { Component } from 'react'
import { connect } from 'react-redux'
import MsgDesc from '../msgDesc'

class MsgList extends Component {
  state = {
    clicked: -1
  }

  clickedItem = num => {
    this.setState({ clicked: num })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return true
  }

  render = () => {
    console.log(this.props, 'Newly added list')
    return (
      <div>
        <h4>My Default List of Messages</h4>
        <ul>
          {this.props.msgList.length > 0 ? (
            this.props.msgList.map((msg, index) => {
              if (msg.hasOwnProperty('msg')) {
                return (
                  <div>
                    <MsgDesc
                      key={index}
                      keyIndex={index}
                      msg={msg}
                      clicked={index === this.state.clicked}
                      onClicked={this.clickedItem}
                    />
                  </div>
                )
              } else return null
            })
          ) : (
            <h1>Nothing to display </h1>
          )}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    repliedMsgList: state.repliedMsgVal,
    parentMsgList: state.msgVal
  }
}
export default connect(mapStateToProps, null)(MsgList)
