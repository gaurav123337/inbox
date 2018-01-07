import { ADD_MSG } from './action'

const msgReducer = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_MSG:
      const state = [
        ...state,
        {
          key: action.key,
          msg: action.msg
        }
      ]
    default:
      return state
  }
}
