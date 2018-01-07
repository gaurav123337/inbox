import React from 'react'

const ReplyMsgInfo = props => {
  // console.log(props.repliedMsgList, 'repliedMsg')
  // console.log(props.parentMsgList, 'parentMsgList')
  // return props.repliedMsgList.map((repliedMsg, index) => {
  //   console.log(repliedMsg, 'repliedMsg')
  //   return <p key={index}>{repliedMsg.repliedMsg}</p>
  // })
  //debugger
  const { parentMsgList, repliedMsgList } = props
  return parentMsgList.map((parentMsg, index) => {
    console.log(parentMsg, 'parentMsg')
    const { key } = parentMsg
    return repliedMsgList.map((repliedMsg, index) => {
      console.log(repliedMsg, 'repliedMsg')
      const { parentMsgKey, replyMsg, repliedMsgList } = repliedMsg
      if (key === parentMsgKey) {
        return <p key={index}>{repliedMsg.repliedMsg}</p>
      }
    })
  })

  //return null
}
export default ReplyMsgInfo
