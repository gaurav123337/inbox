import React from 'react'

const ReplyMsgInfo = props => {
  const { parentMsgList, repliedMsgList } = props
  if (
    parentMsgList &&
    parentMsgList.length > 0 &&
    (repliedMsgList && repliedMsgList.length > 0)
  ) {
    return parentMsgList.map((parentMsg, index) => {
      console.log(parentMsg, 'parentMsg')
      const { key, msg } = parentMsg
      return repliedMsgList.map((repliedMsg, index) => {
        const { parentMsgKey } = repliedMsg
        if (key === parentMsgKey) {
          return (
            <p key={index}>
              {msg}---{repliedMsg.repliedMsg}
            </p>
          )
        } else return null
      })
    })
  } else return null

  //return null
}
export default ReplyMsgInfo
