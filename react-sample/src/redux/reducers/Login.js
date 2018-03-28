export default function loginReducer(state = {id: "", pass: "", bool: false}, action) {
  const { id, pass, bool, type } = action
  switch (type) {
    case "SUBMIT_ID":
      return Object.assign({}, state, {id: id})
    case "SUBMIT_PASS":
      return Object.assign({}, state, {pass: pass})
    case "LOGIN_BOOL":
      return Object.assign({}, state, {bool: bool})
    default:
      return state
  }
}