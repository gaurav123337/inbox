import { combineReducers } from 'redux'
import { msgReducer, repliedMsgReducer } from './reducers'

const rootReducer = combineReducers({
  msgVal: msgReducer,
  repliedMsgVal: repliedMsgReducer
})

export default rootReducer
