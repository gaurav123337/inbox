import React, { Component } from 'react'
//import { INBOX_MSG } from '../action'
import MsgDesc from '../msgDesc'

export default class MsgList extends Component {
  state = {
    clicked: -1
  }

  clickedItem = num => {
    this.setState({ clicked: num })
  }

  render = () => {
    //console.log(this.props.msgList, 'Newly added list')
    return (
      <div>
        <h4>My Default List of Messages</h4>
        <ul>
          {this.props.msgList.length > 0 ? (
            this.props.msgList.map((msg, index) => {
              if (msg.hasOwnProperty('msg')) {
                return (
                  <MsgDesc
                    key={index}
                    keyIndex={index}
                    msg={msg}
                    clicked={index === this.state.clicked}
                    onClicked={this.clickedItem}
                  />
                )
              }
              else return null
            })
          ) : (
            <h1>Nothing to display </h1>
          )}
        </ul>
      </div>
    )
  }
}
