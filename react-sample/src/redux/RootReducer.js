import { combineReducers } from 'redux'
import loginReducer from './reducers/Login'
import listReducer from './reducers/List'

export default combineReducers({
  login: loginReducer,
  list: listReducer
})