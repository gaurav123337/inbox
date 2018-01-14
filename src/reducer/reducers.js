import { ADD_MSG, RPLY_MSG } from '../action'

export const msgReducer = (state = {}, action) => {
  //console.log(action)
  switch (action.type) {
    case ADD_MSG:
      const newState = [
        {
          key: action.payload.key,
          msg: action.payload.msg
        },
        ...state
      ]
      //console.log(newState, 'newState AddMsg')
      return newState

    default:
      return state
  }
}
//export default msgReducer
export const repliedMsgReducer = (state = {}, action) => {
  switch (action.type) {
    case RPLY_MSG:
      const replyState = [
        {
          parentMsgKey: action.payload.parentKey,
          repliedMsgKey: Math.ceil(Math.random() * 10),
          repliedMsg: action.payload.replyMsg
        },
        ...state
      ]
      console.log(replyState, 'newState in replyState')
      return replyState
    default:
      return state
  }
}
