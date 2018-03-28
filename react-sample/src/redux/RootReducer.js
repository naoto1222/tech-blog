import { combineReducers } from 'redux'
import loginReducer from './reducers/Login'
import listReducer from './reducers/List'
import modalReducer from './reducers/Modal'

export default combineReducers({
  login: loginReducer,
  list: listReducer,
  modal: modalReducer
})