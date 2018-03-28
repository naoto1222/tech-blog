export default function listReducer(state = {text: "", texts: []}, action) {
  const { text, texts, type } = action

  switch (type) {
    case "SUBMIT_TEXT":
      texts.unshift(text)
      return Object.assign({}, state, {texts: texts})
    default:
      return state
  }
}