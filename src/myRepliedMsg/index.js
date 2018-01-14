import React from 'react'
import './index.css'

const MyRepliedMsg = props => {
  return (
    <div>
      {props.repliedMsg.map((messages, index) => {
        if (props.parentId === messages.parentMsgKey) {
          return (
            <p key={index} className="myRepliedMsg">
              {messages.repliedMsg}
            </p>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}
export default MyRepliedMsg
