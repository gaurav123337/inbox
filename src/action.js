export let INBOX_MSG = [
  {
    id: 1,
    msg: 'Hi'
  },
  {
    id: 2,
    msg: 'How are you?'
  }
]

export const ADD_MSG = 'ADD_MSG'
export const RPLY_MSG = 'RPLY_MSG'

export const addMsg = msg => {
  //console.log('In action', msg)
  return {
    type: ADD_MSG,
    payload: msg
  }
}

export const rplyMsg = rpliedMsg => {
  console.log('In action rpliedMsg', rpliedMsg)
  return {
    type: RPLY_MSG,
    payload: rpliedMsg
  }
}
