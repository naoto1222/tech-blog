export default function modalReducer(state = {isOpen: false}, action) {
  const { type, isOpen } = action
  switch (type) {
    case "CHANGE_MODAL":
      return Object.assign({}, state, {isOpen: isOpen})
    default:
      return state
  }
}